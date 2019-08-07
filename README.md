# Word Counter

Word counter using ExpressJS and MongoDB. Provides a RESTful API endpoint, that POST requests with a json message with two fields: "id" and "message". For example: (example: { "id": "123", "message": "hello world" }) or simply { "id": "123", "message": "hello world" }, that counts the words in the message. Server check for valid request bodies and doesn't count request with ids that have been used already.

## Get Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

This Projects requires NodeJS and MongoDB. We will also use NPM for package management. 
-MongoDB will be connected using [MongooseJS](https://mongoosejs.com/).
-You may signup for a free Cloud [MongoDB](https://www.mongodb.com/cloud) instance, or run your own locally.

*[NodeJS](https://nodejs.org/)
*[MongoDB](https://www.mongodb.com/)
*[NPM](https://www.npmjs.com/)


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
-[MongooseJS](https://mongoosejs.com/) will use the MONGO_URI to connect to your MongoDB instance.
-NODE_ENV will equal 'production', to help us mimic Docker container behavior. 

```
touch .env
echo MONGO_URI='YOUR_MONGO_DB_URI'>> .env
echo NODE_ENV='production'>> .env
```

Start the server

```
npm run start
//If sucessfull, console output should read:
> MongoDB connection with retry
> Server started
> MongoDB is connected
```

Unless specified otherwise, server will run in http://localhost, or http://127.0.0.1:80


## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

You may deploy this application 

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds


## Authors

* **Roberto Soriano** - (https://robertmsoriano.com)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* LifeWay Christian Resources, who inspired this project. 
* Thank you giving me the opportunity of building this for you. 