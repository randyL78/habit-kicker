FROM node
LABEL authors="randy"

WORKDIR "/app"

COPY ./package.json ./
RUN npm install

COPY . .
CMD ["npm", "start"]