# Extract version from package.json
version=$(grep '"version":' server/package.json | sed -E 's/.*"([0-9]+\.[0-9]+\.[0-9]+)".*/\1/')

DOCKER_IMAGE="react-express";

# Build the Docker image
docker build -t $DOCKER_IMAGE:${version} .

# Tag the Docker image
docker tag $DOCKER_IMAGE:${version} $DOCKER_REPO/$DOCKER_IMAGE:${version}
docker tag $DOCKER_IMAGE:${version} $DOCKER_REPO/$DOCKER_IMAGE:latest

# Push the Docker image
docker push $DOCKER_REPO/$DOCKER_IMAGE:${version}
docker push $DOCKER_REPO/$DOCKER_IMAGE:latest