FROM node:latest

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install && chmod -R 755 node_modules
RUN chmod +x node_modules/.bin/react-scripts


COPY . .

CMD ["npm", "start"]
