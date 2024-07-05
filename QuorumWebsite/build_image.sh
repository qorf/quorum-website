export TAILWIND_ENV=production
./tailwindcss -i html/style/input.css -o html/style/output.css --minify

docker buildx create --name quorum-database-server-builder --node quorum-database-server-builder0 --use
docker buildx build --no-cache -f Dockerfile.quorum-database-server.build -t andreasstefik/quorum-database-server:2.3.0 . --platform linux/amd64,linux/arm64 --push
