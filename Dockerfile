FROM node:alpine
WORKDIR .
RUN mkdir src
RUN mkdir public
COPY package.json .
COPY src/ src/
COPY public/ public/

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start"]
