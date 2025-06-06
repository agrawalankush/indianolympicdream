# Multi-stage build for efficiency
FROM node:18-alpine AS dependencies

WORKDIR /app

# Copy package files for better caching
COPY package*.json ./

# Install dependencies with cache optimization
RUN npm ci --only=production --silent --no-audit --no-fund

# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including dev)
RUN npm ci --silent --no-audit --no-fund

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage - minimal image
FROM node:18-alpine AS production

# Install dumb-init for proper signal handling
RUN apk add --no-cache dumb-init

WORKDIR /app

# Create non-root user
RUN addgroup -g 1001 -S nodejs && adduser -S nodejs -u 1001

# Copy built application and production dependencies only
COPY --from=dependencies --chown=nodejs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nodejs:nodejs /app/dist ./dist
COPY --from=builder --chown=nodejs:nodejs /app/server.js ./
COPY --from=builder --chown=nodejs:nodejs /app/server ./server
COPY --chown=nodejs:nodejs package*.json ./

# Switch to non-root user
USER nodejs

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:3000/api/allsports || exit 1

# Start application
ENTRYPOINT ["dumb-init", "--"]
CMD ["node", "server.js"]
