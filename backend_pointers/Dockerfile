# Use the official Gradle image to create a build artifact.
# Use an image with Java 17
FROM openjdk:17-jdk-alpine as build

# Copy local code to the container image.
WORKDIR /app
COPY . .

# Build a release artifact.
RUN gradle build -x test

# Use AdoptOpenJDK for base image.
# It's important to use OpenJDK 8u191 or above that has container support enabled.
# https://docs.docker.com/samples/java/
FROM adoptopenjdk:8-jdk-hotspot

# Copy the jar to the production image from the builder stage.
COPY --from=builder /app/build/libs/*.jar /app.jar

# Run the web service on container startup.
CMD ["java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "/app.jar"]