***
# React-Challenge
The project aims to solve the React Challenge. 
A summary of the challenge will be described below in this document.

>The flow of work was organized in that way:
This repo has 2 branches: master and development.
All the steps of solving the challenge were loaded in the development branch. Atomic-commits were loaded reporting the main feature implemented in each one.
The last commit of the development branch was merged in the master.

### How-To run the project (in docker/docker-compose)
- First of all, install docker and docker-compose
- In development mode:  
   `docker-compose up -d --build`
- In production mode:  
   `docker-compose -f docker-compose.prod.yml up -d --build`

### How-To run locally the project 
- In this option, you don't need Docker neither Docker-Compose
- Running in development mode with hot-realod:
  `yarn start`

### How-To build the project for deployment: 
- run the command:   
  `yarn build`
  
  
    
***    
# Challenge summary description:
write a simple React Application that renders a list of react repositories in the table view of your choice. The following data should be shown:

- name  ===> (=repository name)
- stars ===> (=stars counter)
- forks ===> (=forks-counter)


## Constraint conditions
- Must use the typescript programming language and reac-hooks
- Free to use boilerplate configurations softwares (like create-react-app)
- Feel to use any design framework (like AntD)
- Don't leave unused dependencies/scripts
- Don't mock API reposnses
- Must use Github Graphql API v4 to fetch the list of repositories
- [Docs](https://developer.github.com/v4/)
- [Explorer](https://developer.github.com/v4/explorer/)

## Desirable:
- pagination
- flexible search
- Tests covering as much as you can
- Dockerize the app.

***
# Additional Info


This project was bootstrapped with the command line [create-react-app](https://github.com/facebook/create-react-app).  


## Security
For security reasons, you must create a personal access token in Github. Only through it, you could access the Github API properly.
After that, you also have to change one line of code assigning the value of the token to one constant called  
GITHUB_PERSONAL_ACCESS_TOKEN (in the "index.tsx" file).

Here is the link you should use to create your Personal Acess Token no Github:
https://github.com/settings/tokens

Why is that weird thing necessary? 
Store tokens hardcoded within source files is a bad practice (Security)
In actual systems, we would use 3 layers for that.  
The right place to solve that kind of problem is on the backend side.
One solution possible, only to mention one of them,  is to store the token in environment variables in the server. 

As this app will run in the browser. We can't access the values of environment variables.  
This App doesn't have a server system that is owned by us.  
It accesses a server, but this server is owned by Github where we don't have access.
   
### Domain Driven Design - DDD

We structured our code in 3 master folders: VisualLayer, BusinessLayer, and CommunicationLayer.
The reason for that was it offers a direct way of think and organize the code. There isn't only one correct way to apply DDD.  
The goal is it must be clear. Should offer a simple way to navigate throughout the project and a quick reference of where to create new files for coding.
Readability, Maintainability, extensibility.
Example: whether you need to write a new screen or component that models a part of a screen it is intuitive creates the new code inside the visual layer folder. It is important to avoid wast time studying and discovering how is the better way to insert a file or where a specific feature was implemented.


***
# Scripts

In the project directory, you can run:  
`yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).