FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# The built application will be in /app/dist/indianolympicdream
CMD ["echo", "Angular app built successfully in /app/dist/indianolympicdream"]
