#!/bin/bash

set -e

echo "Waiting for MongoDB to start..."
until mongo \
  --host localhost \
  --port 27017 \
  --username "$MONGO_INITDB_ROOT_USERNAME" \
  --password "$MONGO_INITDB_ROOT_PASSWORD" \
  --authenticationDatabase admin \
  --eval "printjson(db.adminCommand('ping'))" > /dev/null 2>&1; do
  echo "Main MongoDB instance not ready yet, waiting..."
  sleep 1
done
echo "MongoDB is ready."

echo "Restoring database from dump..."
mongorestore \
  --host localhost \
  --port 27017 \
  --username "$MONGO_INITDB_ROOT_USERNAME" \
  --password "$MONGO_INITDB_ROOT_PASSWORD" \
  --authenticationDatabase admin \
  --dir /docker-entrypoint-initdb.d/MongoDump \
  --drop

echo "Database restoration completed."
