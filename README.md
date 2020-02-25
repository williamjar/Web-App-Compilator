# Web App Compilator

**To start the client**
`cd client`
`npm install`
`npm start`

The server will be available on localhost:3000

**To start the server**
`cd server`
`npm install`

Build Docker Image:
`docker build -t node-docker` 

Run:
`docker run -it -p 9001:300 -v ${pwd}:/app node-docker`

The server will be available on localhost:9001


