FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g prisma

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
