FROM cypress/browsers:node18.12.0-chrome107

WORKDIR /app

COPY ./package*.json .
RUN npm install

COPY . .

RUN npm install -g wait-on

RUN wait on api:5000
RUN wait on client:3000

CMD ["npx",  "cypress", "run", "-",  "browser chrome", "-",  "headless"]
