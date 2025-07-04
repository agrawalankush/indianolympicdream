#!/bin/bash
set -e

echo "Connecting to MongoDB shell and selecting database ${MONGO_DB_NAME}..."
docker exec -it iod-mongodb bash -c 'mongo "${MONGO_DB_NAME}" -u "${MONGO_INITDB_ROOT_USERNAME}" -p "${MONGO_INITDB_ROOT_PASSWORD}" --authenticationDatabase admin'
