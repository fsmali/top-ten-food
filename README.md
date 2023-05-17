# Project 3 - Foods page
Take a look at the top 10 most popular foods around the globe. If you sign in, you can give your opinion by writing a review, create a list of your preferred foods and the ingredients used in them, or even add a new food item to the existing list.
## Table of Contents:

* Project Overview
* Installation
* Features
* Project Brief
* Technologies Used
* Timeline
* Wins and Challenges
* Future Content and Improvements
* Key Learnings
* Credits

## Project Overview

Project 3 provided me with an amazing opportunity to collaborate with two talented team members to build my first full-stack application. Our goal was to create a website where users could explore the top 10 global foods, add them to their favorites, write reviews, or even create their own custom foods. Working with my team members was a delightful and fulfilling experience, and this project turned out to be one of my favorite projects during my time at GA. I am interested in working on similar projects in my future career.

You can access the deployed project through this [link](). However, registration is required for most actions on the website, as they are locked before authentication. Alternatively, you can use the login credentials of a premade user, which are "user@gmail.com" for email and "userPassword" for the password.

<img width="879" alt="Screenshot 2023-05-17 at 13 14 38" src="https://github.com/fsmali/top-ten-food/assets/116434578/ada8542d-9857-447c-ae9d-04b309fb1a34">

## Installation


To begin this project, you will need to enter "git clone" followed by the name of the ssh key in an empty folder using your terminal. To open the directory in Visual Studio Code, use "code ." Once inside, open the backend folder by right-clicking and selecting "open in integrated terminal." Before running the backend, you must have Node.js installed. Go to the Node.js website, download the appropriate version for your operating system, and follow the installation prompts. To verify that Node.js is installed and check its version, enter "node -v" in the Visual Studio Code terminal.

Next, install the project's dependencies by entering "npm install" in the backend terminal. To start the server, type "npm start". To install the necessary dependencies for the frontend, right-click on the frontend folder and open it in the integrated terminal. Then, install the dependencies by running "npm install." Finally, type "npm run dev" in the frontend terminal to run the server and open the URL in your browser.

## Features
* Home page displaying random facts about some of the foods included in the list
* Browse page displaying the top 10 foods in the world with images and their country of origin and a search bar to search a food by its country
* Detail page for each food with more information and the ability to leave a review
* List page where users can add and remove foods from their personal list as well as create their own custom foods
* User authentication system using JWT
* Backend API built with Node.js and Express.js
* Database using MongoDB atlas to deploy

## The Brief

* Build a full-stack application by making your own backend and your own frontend
* Use an Express API to serve your data from a Mongo database
* Consume your API with a separate frontend built with React
* Be a complete product which most likely means multiple relationships and CRUD functionality for at least a couple of models
* Be deployed online so it's publicly accessible

## Technologies Used

### Backend:
* Node.js: a JavaScript runtime built on Chrome's V8 JavaScript engine
* Express: a popular Node.js framework for building web applications
* Mongoose: an Object Data Modeling (ODM) library for MongoDB and Node.js
bcrypt: a library for hashing passwords
* Cloudinary: a cloud-based image and video management service
* CORS: a middleware that enables Cross-Origin Resource Sharing (CORS) for Express
* Dotenv: a module that loads environment variables from a .env file
express-validator: a middleware for validating request data in Express
* jsonwebtoken: a library for generating and verifying JSON Web Tokens (JWT)
uuidv4: a library for generating UUIDs

### Frontend:
* React: a JavaScript library for building user interfaces
* Bootstrap: a popular CSS framework for building responsive web pages
* Axios: a promise-based HTTP client for making API requests from the browser
* React-bootstrap: a library that provides Bootstrap components as React components
* React-router-dom: a library for routing and navigation in React applications
* Sass: a popular CSS preprocessor

## Timeline

### Day 1

On our first day, we began by brainstorming ideas for our main project and setting stretch goals. We documented our plan in Excalidraw, a collaborative whiteboarding tool. We decided to work together using Visual Studio Code's live share option, which allowed us to correct each other, share thoughts, and solve problems as a team. Although this approach may have taken us more time in the short term, it proved invaluable in helping us better understand the code we were writing by explaining it to each other.

### Day 2-3
On our second day, we started working on the backEnd. We began with the basics like creating the server.js and consts.js file and tested the backEnd with Postman. We stored the DB_CONNECTION_STRING and JWT_SECRET in the .env file which was included in the .gitignore file.

![68747470733a2f2f692e696d6775722e636f6d2f336a77335045612e706e67](https://github.com/fsmali/top-ten-food/assets/116434578/c4dbd33d-4492-46ad-96c4-6a8df0b61638)

![68747470733a2f2f692e696d6775722e636f6d2f51584a565173512e706e67](https://github.com/fsmali/top-ten-food/assets/116434578/ac89605b-1bb7-4e49-8064-57d494f434f9)


The DB_CONNECTION_STRING and JWT_SECRET come from the .env file that we later added in the backEnd folder and was included in the .env that our .gitignore file contained. Then we continued to create our food and user models.

foodSchema:

![68747470733a2f2f692e696d6775722e636f6d2f343659527266732e706e67](https://github.com/fsmali/top-ten-food/assets/116434578/1957a5a1-85d3-421f-8097-a2077b77345b)


On the following days we added a utils folder which would include the seed data and the connectToDb function used in the server.js file.

connectToDb function:
![68747470733a2f2f692e696d6775722e636f6d2f484a5945726f382e706e67](https://github.com/fsmali/top-ten-food/assets/116434578/9cf724de-bdf8-4275-b959-c4419a7011ab)


To better organize our data, we kept the food and user data in separate files within the utils folder:

![68747470733a2f2f692e696d6775722e636f6d2f77577774666b702e706e67](https://github.com/fsmali/top-ten-food/assets/116434578/8d9e4248-9375-4d34-9f2c-8be50660564a)


### Day 4-5
![68747470733a2f2f692e696d6775722e636f6d2f487154525173512e706e67](https://github.com/fsmali/top-ten-food/assets/116434578/c78e3de5-5f2c-434d-b299-fc5248d9dfdc)


Auth middleware:

![68747470733a2f2f692e696d6775722e636f6d2f487154525173512e706e67](https://github.com/fsmali/top-ten-food/assets/116434578/2e461c9f-ba70-4c5a-8667-b5721427f761)


Then we started working on the more time consuming and challenging part of the backend, that being the controllers and the router.js file. We first started with the easiest ones like the food controller and router.

We created some of the routers using the auth and validate middleware in some of them :

![68747470733a2f2f692e696d6775722e636f6d2f58784f4f4a61562e706e67](https://github.com/fsmali/top-ten-food/assets/116434578/0212c2ab-0534-4172-8583-c0237cef1d68)


We then wrote the code for the controllers used in the routers like the foodController:

![68747470733a2f2f692e696d6775722e636f6d2f643637573258322e706e67](https://github.com/fsmali/top-ten-food/assets/116434578/96406fa3-c50a-4b40-8b55-1622ae8c7813)


All the functions of each controller are exported in an object form so that they are easily accessed in the router file:

![68747470733a2f2f692e696d6775722e636f6d2f7131574c7369382e706e67](https://github.com/fsmali/top-ten-food/assets/116434578/80d6d3ce-da2b-404b-bb19-251b8684811d)


As it turned out, we had the most trouble with the reviews part. First we had to figure out how to set up the review schema and then how to implement the reviews array inside the foodSchema:
![68747470733a2f2f692e696d6775722e636f6d2f343659527266732e706e67](https://github.com/fsmali/top-ten-food/assets/116434578/613d3a76-7bb7-4c5f-ab33-57241ab0e7ad)


Then for the controller we had to push the review with the text that was created in the req.body into the reviews array and save the food.

![68747470733a2f2f692e696d6775722e636f6d2f6d6754594a72672e706e67](https://github.com/fsmali/top-ten-food/assets/116434578/22b08a43-0a27-44c9-9482-11b7c8d525bd)


### Day 6-7-8-9 and 10
On day six we finished the final controllers for the backend and got started on the frontend side. The register and login page were completed first as we had done something similar before in class. We also added errors and some additional validation.

![68747470733a2f2f692e696d6775722e636f6d2f396c474276736d2e706e67](https://github.com/fsmali/top-ten-food/assets/116434578/4467f487-2ba0-4999-9a46-bca14146c79e)


We then shifted our attention to the navbar and homepage. For the navbar we wanted to have some conditional rendering if the user was signed in or not. So if the user was logged in, the Register and Login links in Home Explore Register Login would be replaced by my List and logout.

![68747470733a2f2f692e696d6775722e636f6d2f55657663417a622e706e67](https://github.com/fsmali/top-ten-food/assets/116434578/dd4de532-3e60-47ce-b674-87881d84e8eb)


![68747470733a2f2f692e696d6775722e636f6d2f48706750564d652e706e67 (1)](https://github.com/fsmali/top-ten-food/assets/116434578/2580eea7-dc54-4eb2-a988-6fdd5e5feb0b)


Our footer was quite similar with a slightly different style, while the homepage did not have any additional functionality as it mainly focused on improving the visual design.

The explore page was next and was propably the trickiest one. We first worked on the search bar logic, making it so that you could search for a food by country using a dropdown menu and then rendered each food on the page.

Search bar logic:

![68747470733a2f2f692e696d6775722e636f6d2f5558474b4a546e2e706e67](https://github.com/fsmali/top-ten-food/assets/116434578/b9f98665-1cf9-4269-ba8f-d8a382d9510e)


After that we added the food page, which would contain a more detailed description of each food, with a form to leave a review as well.

### Day 11,12
While working on the project, we mainly collaborated using Visual Studio Code's live share feature. However, as the deadline approached, we found that, while helpful, this approach was quite time-consuming. As a result, we decided to split the workload among team members to improve efficiency. We worked on separate branches and later merged them with the main branch in GitHub. I was responsible for creating the “My List” page, while my team members worked on styling and the “Add a Review” feature. On the My List page, I aimed to provide users with the ability to create a custom food item by submitting a form. Additionally, users could add foods from the Explore page to their list and remove items using a delete button. This allowed users to curate a personalized list of their favorite foods.

Remove from list logic using filter function:

![68747470733a2f2f692e696d6775722e636f6d2f326d79684932492e706e67](https://github.com/fsmali/top-ten-food/assets/116434578/09cd1788-d65c-466f-8221-9c24fa6516ff)


foodId was used as a parameter in the remove function and item._id was passed as an argument in the onClick function of the button:

![68747470733a2f2f692e696d6775722e636f6d2f4c4d3766686e7a2e706e67](https://github.com/fsmali/top-ten-food/assets/116434578/cacd9c54-b07e-4f80-b568-862a37c43282)


The form was created in a similar way with the register and login page:

![68747470733a2f2f692e696d6775722e636f6d2f796e6868766c782e706e67](https://github.com/fsmali/top-ten-food/assets/116434578/47185c48-724d-4eab-9208-089e3370d864)


by using spread operator to push the e.target.value to each input by selecting its name with [e.target.name]:

![68747470733a2f2f692e696d6775722e636f6d2f437468494e69572e706e67](https://github.com/fsmali/top-ten-food/assets/116434578/bc23a6a8-e525-42cb-8e15-31b567877fe5)


After finishing my work on the List page, I assisted one of my teammates with implementing the "add review" feature. We encountered a minor challenge where we were unable to display the newly added review on the page without a refresh. Eventually, we discovered that we simply needed to send an axios.get request for that specific food item again.

![68747470733a2f2f692e696d6775722e636f6d2f463374754b53432e706e67](https://github.com/fsmali/top-ten-food/assets/116434578/da5184ff-0824-49da-a129-f52364f33ded)


After creating the 'My List' page and 'Add Review' feature, we wanted to add a button to allow users to add foods to their list directly from the explore page. This was done with some guidance from our instructor as we ran into some problems. To indicate whether a food had already been added to the list, we implemented a checkmark icon that appears on the button after the food is added. For this to work we created a separate food card component where we checked if the food already existed in the user's list with a find function:

![68747470733a2f2f692e696d6775722e636f6d2f4a5439687962372e706e67](https://github.com/fsmali/top-ten-food/assets/116434578/755800e4-aac0-4f5c-92c8-216665c57c96)


and used ternary operator to render the buttons:

![68747470733a2f2f692e696d6775722e636f6d2f6f3448307a304b2e706e67](https://github.com/fsmali/top-ten-food/assets/116434578/f50ee11e-2459-4eaa-ae03-11e19d03d43b)


Then the Food card was used in the explore page:

![68747470733a2f2f692e696d6775722e636f6d2f32746632357a4e2e706e67](https://github.com/fsmali/top-ten-food/assets/116434578/e5f960f9-608c-4b77-8036-bfe9f5697ee9)


### Day 13
On the last day, we spent time fixing minor bugs, enhancing the styling, and deploying the project. To deploy the frontend, we used Netlify and for the backend, we utilized MongoDB Atlas.

### Final project:

### Homepage:
<img width="1440" alt="Screenshot 2023-05-17 at 15 54 29" src="https://github.com/fsmali/top-ten-food/assets/116434578/ee89d4bb-09d5-489b-ac25-ddbe14968490">
### Explore page:

![68747470733a2f2f692e696d6775722e636f6d2f463356774d6c4e2e706e67](https://github.com/fsmali/top-ten-food/assets/116434578/ff28dbc3-d22e-481b-bf8f-5b9380ec781e)


### Food page:
![68747470733a2f2f692e696d6775722e636f6d2f6547356d61536c2e706e67](https://github.com/fsmali/top-ten-food/assets/116434578/80596a57-9d27-45e4-bfc8-fea92b87dae0)


### My list page:
![68747470733a2f2f692e696d6775722e636f6d2f6b4d766f3556542e706e67](https://github.com/fsmali/top-ten-food/assets/116434578/f330a8d6-3db4-4d32-8b89-fd95d7cdadc2)


### Register page:
![68747470733a2f2f692e696d6775722e636f6d2f657150683435702e706e67](https://github.com/fsmali/top-ten-food/assets/116434578/40ed9242-60db-4bfb-bcb2-a31d43f8df6f)


### Log in page:

![68747470733a2f2f692e696d6775722e636f6d2f5270476e71576f2e706e67](https://github.com/fsmali/top-ten-food/assets/116434578/8910be43-2486-4a63-929e-01a7381d0311)



## Wins and Challenges

### Wins
We faced an issue where our authentication token would be lost when we refreshed the page while logged in which took a to figure out. Another significant achievement was successfully implementing the 'add to list' button and its ability to change to a checkmark if the food was added.

### Challenges
Most of our challenges were encountered in the frontend development. We found implementing the search bar and adding review functionality a bit challenging, but we were ultimately able to find solutions for both.

 ## Future Content and Improvements
 ## Some of my future content plans:

Make the styling responsive to different screen sizes and improve the styling of the ingredients
Adding the ability to update, edit food in My List page
Ability to edit the review
## Key Learnings
This project was the most challenging so far in the course as we had to create both the backend and frontend ourselves, but also because it was the first group project we had done. However, it taught me valuable lessons on how to effectively communicate ideas and code with my team members, organize meetings, do some pair programming, and push each other to write better code. In addition, the project provided me with valuable experience in managing my time when working on a larger-scale project and gave me insight into how roles are assigned to different team members. I also gained a lot of experience using GitHub as well, working on different branches, committing and pushing code. Overall this was a great and very useful experience in my coding career, one that I would want to replicate again in the future.






