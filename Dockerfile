FROM node:18-alpine AS frontend-build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

COPY angular.json tsconfig*.json ./about:blank#blocked
COPY ngsw-config.json ./
COPY src ./src

# Build Angular app for production
RUN npm run build 

# --- Stage 2: Build backend ---
FROM node:18-alpine AS backend-build

WORKDIR /app

# Install backend dependencies
COPY package.json package-lock.json ./
RUN npm install --omit=dev

# Copy backend source
COPY server ./server
COPY server.js ./
# COPY server/config ./server/config
# COPY server/routes ./server/routes

# --- Stage 3: Production image ---
FROM node:18-alpine

WORKDIR /app

# Copy backend code and dependencies
COPY --from=backend-build /app/node_modules ./node_modules
COPY --from=backend-build /app/server ./server
COPY --from=backend-build /app/server.js ./
COPY --from=backend-build /app/package.json ./package.json
# COPY --from=backend-build /app/server/config ./server/config
# COPY --from=backend-build /app/server/routes ./server/routes

# Copy Angular production build
COPY --from=frontend-build /app/dist/indianolympicdream ./dist/indianolympicdream

# Expose the port your app runs on
EXPOSE 3000

# Start the server
CMD ["node", "server.js"]

