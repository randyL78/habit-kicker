FROM cypress/browsers:node18.12.0-chrome107

WORKDIR /app

COPY ./package*.json .
RUN npm install

COPY . .

CMD ["npx",  "cypress", "run", "-",  "browser chrome", "-",  "headless"]
