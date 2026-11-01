#!/bin/sh
# Builds the local server image, restarts the server on it, and removes the
# image it replaced, so no unnamed (<none>) image is left behind. The old
# image can only be removed once no container uses it, so the server is
# recreated first.
set -e

old=$(docker images -q local_quorum_database)

docker build -f Dockerfile.quorum-database-server.build --tag local_quorum_database .

docker compose -f ../../docker-compose.yml up -d --no-deps --force-recreate quorum_database_server

new=$(docker images -q local_quorum_database)
if [ -n "$old" ] && [ "$old" != "$new" ]; then
    docker rmi "$old" || echo "Could not remove the old image $old; something still uses it."
fi
