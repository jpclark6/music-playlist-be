# Play-Play Back-End
---
# Introduction
---
Back-End for Play Play, a song playlist creator app.

# Setup
---
Follow these instructions to get a copy of the project running on your local machine for development and testing purposes.

From GitHub clone down repository using the following commands in terminal:
```sh
git clone https://github.com/jpclark6/music-playlist-be
cd music-playlist-be
```

Run these commands to install dependencies locally:


```sh 
npm init --yes
npm install knex -g
npm install knex --save
npm install express -g
npm install express --save
npm install pg --save
npm install body-parser --save
```

Run the following commands to set up your test environment and database:

```sh
npm install -D mocha chai chai-http
psql
CREATE DATABASE quantified_self;
npx knex migrate:latest
npx knex seed:run
```

# How to use
---
Run the command:
```sh
npm start
```
In your terminal you should see the promt: ```Server started on port 5000```

Navigate to:
* [http://localhost:5000/] - URL to visit your endpoints

# Endpoints
---
Visit the following endpoints to retrieve data:

## Favorites Endpoints
--

### GET /api/v1/favorites

This returns all favorites in the database.

Example output:

```scala
[
    {
        "id": 1,
        "name": "Dreams",
        "artist_name": "Fleetwood Mac",
        "genre": "Class Rock",
        "rating": 100
    },
    {
        "id": 2,
        "name": "Banana Clip",
        "artist_name": "Miguel",
        "genre": "R&B",
        "rating": 100
    },
    {
        "id": 3,
        "name": "Lost",
        "artist_name": "Frank Ocean",
        "genre": "R&B",
        "rating": 72
    }
]
```

### GET /api/v1/favorites/:id

This returns a specific favorite based on the id passed from the database. A status 404 is returned if no Favorite by the ID passed in is found.

```scala
{
    "id": 2,
    "name": "Banana Clip",
    "artist_name": "Miguel",
    "genre": "R&B",
    "rating": 100
}
```

### POST /api/v1/favorites
A new favorite can be created using the following format:

```scala
    {
        "name": "Sick Mode",
        "artist_name": "Travis Scott",
        "genre": "Rap",
        "rating": 86
    }
```
If successful, the status code returned is 200. A 400 status is returned if not successful.



### PATCH /api/v1/favorites/:id
This allows a favorites's name, artist name, genre or rating to be updated.
Updates should be sent in the following format:

```scala
    {
        "name": "Ice Box",
        "artist_name": "Omarion",
        "genre": "R&B",
        "rating": 88
    }
```
If successfully updated, "message": "record successfully updated" will be returned along with a 200 status code. A status 400 code will be returned if not successful.

### DELETE /api/v1/favorites/:id

This endpoint allows a favorite to be deleted. A 204 status is returned if successful. A 404 will be returned if the favorite id cannot be found.

## Playlists Endpoints
---
## GET /api/v1/playlists


This returns all favorites in the database.

Example output:

```scala
[
    {
        "id": 5,
        "playlist_name": "Chill Vibes",
        "favorites": [
            {
                "id": 1,
                "name": "Dreams",
                "artist_name": "Fleetwood Mac",
                "genre": "Class Rock",
                "rating": 100
            }
        ]
    },
    {
        "id": 6,
        "playlist_name": "Happy Feet",
        "favorites": [
            {
                "id": 2,
                "name": "Banana Clip",
                "artist_name": "Miguel",
                "genre": "R&B",
                "rating": 100
            }
        ]
    }
]
```

## POST /api/v1/playlists
A new playlist can be created using the following format:

```scala
    {
        "playlist_name": "Happy Dance"
    }
```
If successful, the status code returned is 200. A 400 status is returned if not successful.

## POST /api/v1/playlists/:id/favorites
A favorite can be added and linked to a specified playlist using the following format:

```scala 
    {
        "favorite_id": 1,
        "playlist_id": 6 
    }
```

If successful, the status code returned is 200. A 400 status is returned if not successful.





### Tech
---
Play Play Back-End uses the following:

* [Javascript] - High-level, interpreted programming language that conforms to the ECMAScript specification.
* [Node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework
* [Mocha] - Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun.
* [Chai] - Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.

## Known Issues
---
- Post requests does not return desired format
- Functionality to delete a favorite from a playlist has not been implemented yet.

## Running Tests
---
To run the tests from terminal use the command
```sh
npm test
```

## Core Contributors
---
Justin Clark -Github jpclark6
Jimmy Smith -Github jsmith23










