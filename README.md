# Mobile Dev Project
Web created using ReactJs, it tests user login / logout to Db and implements multiple security layers for safe Data storage.  

### To Install Dependencies  
<details>
<summary>Project deps:</summary>
<br>  
  
```
npm install 
```

</details>
<details>
<summary>Server deps:</summary>
<br>  
  
```
Server currently private
``` 

  
```
npm install 
``` 

</details>

--Then change .env files in base project dir and in Server dir accordingly  



### To Start
<details>
<summary>mySQL Script for Db:</summary>
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
<summary>mySQL Insert test data:</summary>
<br>  

```sql
-- Insert test data into the location table
INSERT INTO location (address, city, latitude, longitude, description, timeZone)
VALUES
    ('123 Main St', 'Beirut', 12.34, 56.78, 'Beirut Description', 'UTC+3'),
    ('456 Oak St', 'Oklahoma', 23.45, 67.89, 'Oklahoma Description', 'UTC-5'),
    ('123 Main St', 'Paris', 12.34, 56.78, 'Paris Description', 'UTC+3'),
    ('456 Oak St', 'Baabda', 23.45, 67.89, 'Baabda Description', 'UTC-5'),
    ('123 Main St', 'Moscow', 12.34, 56.78, 'Moscow Description', 'UTC+3'),
    ('456 Oak St', 'Tokyo', 23.45, 67.89, 'Tokyo Description', 'UTC-5');

-- Insert test data into the hotels table
INSERT INTO hotels (name, rating, description, location)
VALUES
    ('Luxury Hotel beirut', 4.5, 'Luxury Hotel beirut Description', 1),
    ('Comfort Inn Oklahoma', 2.0, 'Comfort Inn Oklahoma Description', 2),
    ('Comfort Inn Paris', 3.8, 'Comfort Inn Paris Description', 3),
    ('Luxury Hotel Baabda', 4.5, 'Luxury Hotel Baabda Description', 4),
    ('Comfort Inn Moscow', 3.8, 'Comfort Inn Moscow Description', 5),
    ('Comfort Inn Tokyo', 5.0, 'Comfort Inn Tokyo Description', 6);

-- Insert test data into the hotelImages table
INSERT INTO hotelImages (hotelId, alt, imageHDUrl, imageUrl)
VALUES
    (1, 'Hotel beirut Image 1', 'url/to/hotelA/hd/image1', 'url/to/hotelA/image1'),
    (1, 'Hotel beirut Image 2', 'url/to/hotelA/hd/image2', 'url/to/hotelA/image2'),
    
    (2, 'Hotel Oklahoma Image 1', 'url/to/hotelB/hd/image1', 'url/to/hotelB/image1'),
    (2, 'Hotel Oklahoma Image 2', 'url/to/hotelB/hd/image2', 'url/to/hotelB/image2'),
    
    (3, 'Hotel Paris Image 1', 'url/to/hotelB/hd/image1', 'url/to/hotelB/image1'),
    (3, 'Hotel Paris Image 2', 'url/to/hotelB/hd/image2', 'url/to/hotelB/image2'),
    
    (4, 'Hotel Baabda Image 1', 'url/to/hotelB/hd/image1', 'url/to/hotelB/image1'),
    (4, 'Hotel Baabda Image 2', 'url/to/hotelB/hd/image2', 'url/to/hotelB/image2'),
    
    (5, 'Hotel Moscow Image 1', 'url/to/hotelB/hd/image1', 'url/to/hotelB/image1'),
    (5, 'Hotel Moscow Image 2', 'url/to/hotelB/hd/image2', 'url/to/hotelB/image2'),
    
    (6, 'Hotel Tokyo Image 1', 'url/to/hotelB/hd/image1', 'url/to/hotelB/image1'),
    (6, 'Hotel Tokyo Image 2', 'url/to/hotelB/hd/image2', 'url/to/hotelB/image2');

-- Insert test data into the rooms table
INSERT INTO rooms (price, size, hotelId)
VALUES
    (150.0, 'King Suite', 1),
    (100.0, 'Double Room', 2),
    (150.0, 'King Suite', 3),
    (100.0, 'Double Room', 4),
    (150.0, 'King Suite', 5),
    (100.0, 'Double Room', 6);

-- Insert test data into the roomImages table
INSERT INTO roomImages (roomId, alt, imageHDUrl, imageUrl)
VALUES
    (1, 'Room beirut Image 1', 'url/to/roomA/hd/image1', 'url/to/roomA/image1'),
    (1, 'Room beirut Image 2', 'url/to/roomA/hd/image2', 'url/to/roomA/image2'),
    
    (2, 'Room Oklahoma Image 1', 'url/to/roomB/hd/image1', 'url/to/roomB/image1'),
    (2, 'Room Oklahoma Image 2', 'url/to/roomB/hd/image2', 'url/to/roomB/image2'),
    
    (3, 'Room Paris Image 1', 'url/to/roomB/hd/image1', 'url/to/roomB/image1'),
    (3, 'Room Paris Image 2', 'url/to/roomB/hd/image2', 'url/to/roomB/image2'),
    
    (4, 'Room Baabda Image 1', 'url/to/roomB/hd/image1', 'url/to/roomB/image1'),
    (4, 'Room Baabda Image 2', 'url/to/roomB/hd/image2', 'url/to/roomB/image2'),
    
    (5, 'Room Moscow Image 1', 'url/to/roomB/hd/image1', 'url/to/roomB/image1'),
    (5, 'Room Moscow Image 2', 'url/to/roomB/hd/image2', 'url/to/roomB/image2'),
    
    (6, 'Room Tokyo Image 1', 'url/to/roomB/hd/image1', 'url/to/roomB/image1'),
    (6, 'Room Tokyo Image 2', 'url/to/roomB/hd/image2', 'url/to/roomB/image2');

-- Insert test data into the flights table
INSERT INTO flights (name, departure_location, destination, departure_time)
VALUES
	('Flight 123', 1, 2, '2023-01-01T12:00:00'),
  ('Flight 220', 2, 1, '2023-02-01T14:30:00'),
  ('Flight 221', 1, 3, '2023-01-01T12:00:00'),
  ('Flight 222', 3, 1, '2023-02-01T14:30:00'),
  ('Flight 223', 1, 4, '2023-01-01T12:00:00'),
  ('Flight 224', 4, 1, '2023-02-01T14:30:00'),
  ('Flight 325', 2, 3, '2023-01-01T12:00:00'),
  ('Flight 332', 3, 2, '2023-02-01T14:30:00'),
  ('Flight 333', 2, 4, '2023-01-01T12:00:00'),
  ('Flight 334', 4, 2, '2023-02-01T14:30:00'),
  ('Flight 435', 3, 4, '2023-01-01T12:00:00'),
  ('Flight 436', 4, 3, '2023-02-01T14:30:00'),
  ('Flight 536', 5, 6, '2023-01-01T12:00:00'),
  ('Flight 635', 6, 5, '2023-02-01T14:30:00'),
  ('Flight 136', 1, 6, '2023-01-01T12:00:00'),
  ('Flight 631', 6, 1, '2023-02-01T14:30:00');
    

-- Insert test data into the flightImages table
INSERT INTO flightImages (flightId, alt, imageHDUrl, imageUrl)
VALUES
    (1, 'Flight123 Image', 'url/to/flight123/hd/image', 'url/to/flight123/image'),
    (2, 'Flight220 Image', 'url/to/flight456/hd/image', 'url/to/flight456/image'),
    
    (3, 'Flight221 Image', 'url/to/flight123/hd/image', 'url/to/flight123/image'),
    (4, 'Flight222 Image', 'url/to/flight456/hd/image', 'url/to/flight456/image'),
    
    (5, 'Flight223 Image', 'url/to/flight123/hd/image', 'url/to/flight123/image'),
    (6, 'Flight224 Image', 'url/to/flight456/hd/image', 'url/to/flight456/image'),
    
    (7, 'Flight123 Image', 'url/to/flight123/hd/image', 'url/to/flight123/image'),
    (8, 'Flight456 Image', 'url/to/flight456/hd/image', 'url/to/flight456/image'),
    
    (9, 'Flight123 Image', 'url/to/flight123/hd/image', 'url/to/flight123/image'),
    (10, 'Flight456 Image', 'url/to/flight456/hd/image', 'url/to/flight456/image'),
    
    (11, 'Flight123 Image', 'url/to/flight123/hd/image', 'url/to/flight123/image'),
    (12, 'Flight456 Image', 'url/to/flight456/hd/image', 'url/to/flight456/image'),
    
    (13, 'Flight123 Image', 'url/to/flight123/hd/image', 'url/to/flight123/image'),
    (14, 'Flight456 Image', 'url/to/flight456/hd/image', 'url/to/flight456/image'),
    
    (15, 'Flight123 Image', 'url/to/flight123/hd/image', 'url/to/flight123/image'),
    (16, 'Flight456 Image', 'url/to/flight456/hd/image', 'url/to/flight456/image');

-- Insert test data into the accounts table
INSERT INTO accounts (username, email, password, profilePic, authenticated)
VALUES
    ('UserA', 'userAF@example.com', 'passwordA', NULL, true),
    ('UserB', 'userBG@example.com', 'passwordB', NULL, true);

-- Insert test data into the trips table
INSERT INTO trips (trip_name, user_id, flight_id, booked_roomId)
VALUES
    ('Trip to Somewhere AF', 1, 1, 1),
    ('Trip to Somewhere BG', 2, 2, 2);

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
