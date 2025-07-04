#!/usr/bin/env bash

# Do a database dump in container
docker exec -it iod-mongodb /docker-entrypoint-initdb.d/backup_db.sh
# Backup current dump
mv ./mongo-init/MongoDump/ ./mongo-init/MongoDump_backup_"$(date +%Y%m%d_%H%M%S)"
# Copy new database dump from container to host
docker cp iod-mongodb:/tmp/MongoDump ./mongo-init/
