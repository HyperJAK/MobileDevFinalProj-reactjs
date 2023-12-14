# Mobile Dev Project
Web created using ReactJs, it tests user login / logout to Db and implements multiple security layers for safe Data storage.

### To Start
<details>
<summary>mySQL Script for Db: (Needs to be edited)</summary>
<br>  

```sql
create database mobileDevdb;
use mobileDevdb;

create table accounts(
id int primary key auto_increment,
username varchar(255),
email varchar(255),
password varchar(612),
profilePic LONGBLOB,
authenticated boolean
);

create table location(
id int primary key auto_increment,
address varchar(512),
city varchar(255),
latitude double,
longitude double,
description varchar(512),
timeZone varchar(255)
);

CREATE TABLE hotels (
    hotelId INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    rating FLOAT,
    description VARCHAR(9999),
    location INT,
    FOREIGN KEY (location) REFERENCES location(id)
);

CREATE TABLE hotelImages (
    id INT PRIMARY KEY AUTO_INCREMENT,
    hotelId int,
    alt VARCHAR(255),
    imageHDUrl LONGBLOB,
    imageUrl LONGBLOB,
    FOREIGN KEY (hotelId) REFERENCES hotels(hotelId)
);



-- Example of querry selection of all images of hotel with id = 2:
/*  SELECT hi.*
FROM hotelImages hi
JOIN hotelImageMapping him ON hi.id = him.imageId
WHERE him.hotelId = 2;  */




create table rooms(
roomId int primary key auto_increment,
price float,
size varchar(100),
hotelId int,
FOREIGN KEY (hotelId) REFERENCES hotels(hotelId)
);

CREATE TABLE roomImages (
    id INT PRIMARY KEY AUTO_INCREMENT,
    alt VARCHAR(255),
    imageHDUrl LONGBLOB,
    imageUrl LONGBLOB,
    roomId int,
    FOREIGN KEY (roomId) REFERENCES rooms(roomId)
);




create table flights(
flightId int primary key auto_increment,
name varchar(255),
departure_location int,
destination int,
departure_time varchar(255),
FOREIGN KEY (departure_location) REFERENCES location(id),
FOREIGN KEY (destination) REFERENCES location(id)
);

CREATE TABLE flightImages (
    id INT PRIMARY KEY AUTO_INCREMENT,
    alt VARCHAR(255),
    imageHDUrl LONGBLOB,
    imageUrl LONGBLOB,
    flightId int,
    FOREIGN KEY (flightId) REFERENCES flights(flightId)
);


create table trips(
id int primary key auto_increment,
trip_name varchar(255),
user_id int ,
flight_id int,
booked_roomId int,
FOREIGN KEY (user_id) REFERENCES accounts(id),
FOREIGN KEY (flight_id) REFERENCES flights(flightId),
FOREIGN KEY (booked_roomId) REFERENCES rooms(roomId)
);

-- Drop the trigger if it exists
DROP TRIGGER IF EXISTS denyDuplicateAccount;
DELIMITER //
CREATE TRIGGER denyDuplicateAccount
BEFORE INSERT 
ON accounts 
FOR EACH ROW 
BEGIN
    DECLARE duplicateCount INT;

    SELECT COUNT(*) INTO duplicateCount FROM accounts WHERE email = NEW.email;

    IF duplicateCount > 0 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Duplicate entry is not allowed';
    END IF;
END;
//
DELIMITER ;
```

</details>

<details>
<summary>Commands to run web and server:</summary>
<br>
-Web: for now its (not in server dir)

```
npm start 
```

<br>
-Server: 

```
cd Server 
```
```
npm run devStart
```
</details>

#
# Overview  

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Available Scripts for main web

In the project directory, you can run:

To install all dependencies from default json package lock file run:
### `npm install`
## To install all dependencies for Server:
### First clone server from: `https://github.com/PeekMe01/MobileDevServer`
## Then open cmd and run: `npm install`
## OR: Run `Install.cmd` file
### Finally run `Run.cmd` or manually open cmd and type: `npm run start`


etc...(rest of command at bottom)


Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
