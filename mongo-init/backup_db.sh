#!/bin/bash
set -e

echo "Starting database backup..."

# The temporary directory inside the container for the new dump
MONGO_ROOT_USERNAME="admin"
MONGO_ROOT_PASSWORD="admin"
MONGO_DB_NAME="IndianOlympicDream"
BACKUP_DIR="/tmp/MongoDump"

# Clean up any previous temporary dump
rm -rf "$BACKUP_DIR"

# Create the new dump using the environment variables from docker-compose
mongodump \
  --username "${MONGO_ROOT_USERNAME}" \
  --password "${MONGO_ROOT_PASSWORD}" \
  --authenticationDatabase admin \
  --db "${MONGO_DB_NAME}" \
  --out "$BACKUP_DIR"

echo "Database dump created successfully at $BACKUP_DIR"
