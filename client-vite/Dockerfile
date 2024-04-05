FROM node:20-alpine
LABEL authors="randy"

WORKDIR "/app"

COPY ./package.json ./
RUN npm install

COPY . .
CMD ["npm", "run", "dev"]
