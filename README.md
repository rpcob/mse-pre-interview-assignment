1. Set up the project
Create a new React app using 'create-react-app' or another React-based framework. In this example, we'll use 'create-react-app'.

npx create-react-app mse-pre-interview-assignment
cd mse-pre-interview-assignment


2. Install required dependencies
Install 'axios' for making HTTP requests.

npm install axios


3. Create a mock REST API
The code fetches default values from an API at 'http://localhost:3004/defaults'.

npm install -g json-server
json-server --watch defaultValues.json --port 3004