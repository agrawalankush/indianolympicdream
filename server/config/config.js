const config = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: parseInt(process.env.PORT) || 3000,
  
  // MongoDB Configuration - simple dev/prod setup
  MONGODB: {
    URI: process.env.NODE_ENV === 'production' 
      ? process.env.MONGO_URI  // for production
      : 'mongodb://localhost:27017', // Local dev
    DB_NAME: process.env.MONGO_DB_NAME || 'IndianOlympicDream',
    AUTH_SOURCE: process.env.AUTH_SOURCE || 'admin'
  }
};

// Simple validation
const validateConfig = () => {
  console.log(`✅ ${config.NODE_ENV.toUpperCase()} environment loaded`);
  
  if (config.NODE_ENV === 'production' && !process.env.MONGO_URI) {
    console.error(`❌ Missing MONGO_URI for production`);
    process.exit(1);
  }
  
  const maskedURI = config.MONGODB.URI.replace(/:([^:@]+)@/, ':***@');
  console.log(`📡 MongoDB: ${maskedURI}`);
  console.log(`🚀 Server: 0.0.0.0:${config.PORT}`);
};

validateConfig();

module.exports = config;
