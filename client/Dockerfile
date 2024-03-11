FROM node:21-alpine

WORKDIR /app

COPY ./app /app/
EXPOSE 5173
RUN npm install
CMD [ "npm", "run", "dev" ]