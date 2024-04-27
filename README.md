How to Create a Server
    Run these terminal commands
        > cd server
        > npm init -y
        > npm i express
        > npm i ejs
        > npm i nodemon
    Edit the server's package.json and add this in "scripts" ("dev": "nodemon server.js")

How to Create a Client
    Run these terminal commands
        > cd client
        > npm create vite@latest
        > npm i

FAQ
    1. there is no node_modules
        a. run this command: "npm i" in the same folder as the package.json
    2. How to change api port in frontend
        a. Open vite.config.js in client folder and change the port in server
