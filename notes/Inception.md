### Include Javascript in html

* Use the script tag to write javascript inside html.
* appendChild - can be used to attach any node to a particular tag.

### Why crossorigin attribute
* If we are using react from CDN it is recommended to use crossorigin.
* It sets Access-Control-Allow-Orign : * - so that we do ot have the CORS issue.

### How to add react to the project?
* We can use CDN links to add react library to the project - **it is not recommended.**
* We have to use npm to install react ad react-dom into the node_modules folder, import react into the project.
* Include the CDN link using script tag inside html.
* We need to include react and react-dom cdn links. where react is the core library and react-dom is needed to manipulate the react dom (document object model).

### How to create elements in react

* Use React.createElement("h1",{},"Hello World React"). Use the object to give the attributes to the h1 tag.
* In order to create root - Use ReactDOM.createRoot(). 
* React elements are basically objects.
* React.createElement creates the react element and when render method is called it will be converted to html that browser understands.
* If sibilings has to be created we need to pass array of children.
* Root.render() - replaces the exisiting html where ever we are renderig the object. 

### JSX

* JSX will be used to create the tags to make life easier, instead of using the React.createElement().


### HomeWork: CDN? 


