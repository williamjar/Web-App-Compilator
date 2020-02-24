FROM node:9-slim
WORKDIR /app
COPY package.json /app
RUN npm install
RUN apt-get update || : && apt-get install python -y
COPY . /app
CMD ["npm","start"]
