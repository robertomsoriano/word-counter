# Word Counter

Word counter using ExpressJS and MongoDB. Provides a RESTful API endpoint, that POST requests with a json message with two fields: "id" and "message". For example: (example: { "id": "123", "message": "hello world" }) or simply { "id": "123", "message": "hello world" }, that counts the words in the message. Server check for valid request bodies and doesn't count request with ids that have been used already.

## Get Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

This Projects requires NodeJS and MongoDB. We will also use NPM for package management. 
> MongoDB will be connected using [MongooseJS](https://mongoosejs.com/).
> You may signup for a free Cloud [MongoDB](https://www.mongodb.com/cloud) instance, or run your own locally.

* [NodeJS](https://nodejs.org/)
* [MongoDB](https://www.mongodb.com/)
* [NPM](https://www.npmjs.com/)


### Installing

Clone or download this GitHub repository

```
git clone https://github.com/robertomsoriano/word-counter.git
```

Install dependencies using NPM.

```
cd word-counter/
npm install 
```
Add .env file with MONGO_URI and NODE_ENV environment variables. 
> [MongooseJS](https://mongoosejs.com/) will use the MONGO_URI to connect to your MongoDB instance. <br/>
> NODE_ENV will equal 'production', to help us mimic Docker container behavior. 

```
touch .env
echo MONGO_URI='YOUR_MONGO_DB_URI'>> .env
echo NODE_ENV='production'>> .env
```

Start the server

```
npm run start

//If sucessfull, console output should read:
MongoDB connection with retry
Server started
MongoDB is connected
```

Unless specified otherwise, server will run in http://<i></i>localhost, or http://<i></i>127.0.0.1:80

## Deployment
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/robertomsoriano/word-counter)

You may deploy this application to Heroku
* Here is a [live version](https://word-counter-lw.herokuapp.com/) on Heroku.


Or use Heroku CLI
```
npm install -g heroku
git add . 
git commit -m "First Heroku deploy"
heroku create //You will need to login or signup.
git push heroku master
```
You may also deploy using Docker
* Here is a [live version](https://counter.robertmsoriano.com) on my Linux VPS using Docker.

```
# Dockerfile

FROM node:10-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 80

CMD ["npm", "run", "start"]
```


## Author

* **Roberto Soriano** - (https://robertmsoriano.com)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* LifeWay Christian Resources, who inspired this project. 
* Thank you giving me the opportunity of building this for you. 