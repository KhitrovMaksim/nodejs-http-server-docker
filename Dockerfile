FROM node:18.13.0-bullseye-slim
WORKDIR /usr/src/app
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]