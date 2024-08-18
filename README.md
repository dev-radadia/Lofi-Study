# Lofi-Study

## About

Lo-fi and pixel-art themed virtual study environment, equipped with an editable lofi radio, timer, to-do list and relaxing sound effects. This project was essentially born out of my desire for an all-in-one space for all my study needs throughout university.

Check out the web application at: 

## Features

- User authorisation and authentication
- Simple timer
- Customisable playlist that allows users to paste in their own youtube links to listen to
- Controllable radio that plays directly from the playlist
- To-do list that allows users to input tasks and mark tasks as done
- Customisable background color via an interactive color picker
- Adjustable sound effects that allows users to craft their own ambient sounds
- CRUD operations on all features

## Technologies

**Frontend:**

- TypeScript
- React.js
- Redux Toolkit
- Styled Components (CSS-in-JS)

**Backend:**

- TypeScript
- Node.js
- Express.js
- MongoDB

## Design and Architecture

### Architecture
The project implements the MERN (MongoDB, Express, React, Node.JS) stack.

![image](https://user-images.githubusercontent.com/57848315/177243647-85737f56-d0b9-46bc-abe2-28073cc2b943.png)


### Data Model
The data model implements a referenced model where related documents are linked to a user with userId.

![Alt text](/images/Data%20Model.svg)

## Testing & Deployment
Tests for backend APIs are written using the [Jest](https://jestjs.io/) library and automated as part of the build step of the CI/CD pipeline.

The web application is deployed with [Vercel](https://vercel.com/) as part of the deploy step of the CI/CD pipeline.