# Mean

## Installation

1. Install nodejs please visit http://Nodejs.org for more information.
2. Install angular cli latest version using the following command : `npm install @angular/cli -g`
3. Install mongodb, we will install mongodb on our local machine. please visit mongodb website and install it depends on your OS specifications. https://www.mongodb.com/download-center?jmp=tutorials&_ga=2.216733855.867775932.1502387021-1711869881.1500135373#atlas

## Run

1. Clone my repository and navigate to it's directory and run `npm install` to install all required dependencies.
2. Run mongodb database:
    a. Open new terminal window and run "C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe".
    b. Open another terminal window and run "C:\Program Files\MongoDB\Server\3.4\bin\mongo.exe".
    c. Run the following command to create database "mean" and collection "user":
        1. `use mean`
        2. `db.users.insert({"user_id": "1", ""name":"Nour"})`

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.


## Server

Run `node server` on your project directory and open your browser on http://localhost:3000 and you will see list of added users.