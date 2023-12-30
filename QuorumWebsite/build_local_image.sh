export TAILWIND_ENV=development
./tailwindcss -i html/style/input.css -o html/style/output.css --source-maps

docker build -f Dockerfile.quorum-database-server.build --tag local_quorum_database .
