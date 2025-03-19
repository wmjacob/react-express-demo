# Stage 1: Build the React client
FROM node:22 AS client-build
WORKDIR /app/client
COPY client/package*.json ./
RUN npm install
COPY client/ ./
RUN npm run build

# Stage 2: Set up the Express server
FROM node:22 AS server
WORKDIR /app/server
COPY server/package*.json ./
COPY server/ ./
RUN npm install
RUN npm run build

# Stage 3: Combine client and server
FROM node:22
WORKDIR /app
COPY --from=client-build /app/client/build ./client/build
COPY --from=server /app/server/dist ./server/dist
COPY --from=server /app/server/node_modules ./server/node_modules
COPY server/package*.json ./server/

# Expose the server port
EXPOSE 8080

# Start the server
CMD ["node", "server/dist/main.js"]
