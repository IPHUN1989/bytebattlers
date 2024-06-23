# Build
FROM maven:3.9.7-eclipse-temurin-17-alpine@sha256:f497ab78d9245d5854e5603c812ea9abece1d1dcd466c478fd6016b433567196 AS build
WORKDIR /app
COPY pom.xml ./.
RUN mvn dependency:go-offline dependency:resolve-plugins 
COPY src ./src
RUN mvn clean package

# Running server
FROM eclipse-temurin:17-jre-alpine@sha256:d69f8cf3526fd75992366d2e96348682dfbc04c5d321c08d084e1fc26980d81d
WORKDIR /usr/local/bin/
COPY --from=build /app/target/*.jar bytebattlers.jar
ENTRYPOINT ["java", "-jar", "bytebattlers.jar"]
