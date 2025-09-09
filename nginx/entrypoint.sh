#!/bin/sh

# Exit on fail
set -e

# Substitute environment variables in the Nginx template
envsubst '${API_HOST} ${API_PORT}' < /etc/nginx/templates/default.conf.template > /etc/nginx/conf.d/default.conf

# Start Nginx in the foreground
exec nginx -g 'daemon off;'
