# Dockerfile
FROM node:18-alpine

WORKDIR /app
COPY app/ .

RUN npm install express

EXPOSE 3000
CMD ["node", "index.js"]
