# Web App Compilator

Web application for compiling Python code. The code is compiled in a docker image and the result is sent back to the client. 


**To start the client**

`cd client`

`npm install`

`npm start`

The server will be available on localhost:3000

**To start the server**

Install Docker, and run it. 

`cd server`

`npm install`

Build Docker Image:

`docker build -t node-docker .` 

Run server with docker:

`docker run -it -p 9001:3000 -v ${pwd}:/app node-docker`

*The server starts in interactive(-it) mote, and we map the ports of the docker image*. *The server runs with nodemon, so any changed will update the server automatically and restart it.*
<<<<<<< HEAD
The server will be available on localhost:9001, however, interaction happens via the client above. 
=======
The server will be available on localhost:9001, however, interaction happens via the client you initiated above. 


>>>>>>> e1d48734fadc7a1c30e6c297f36a008e0a195573
