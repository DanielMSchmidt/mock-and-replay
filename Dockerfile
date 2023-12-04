FROM node:14.17.0-alpine3.10
EXPOSE 80
ENV port=80


ADD . . 
RUN npm install


ENTRYPOINT ["node", "./index.js"]
