### Class Based Components

- extend React.Component

    ```
      class App extends React.Component {
         
         render() {
            return (
                <div> 
                     <h1>classbased component </h1>
                 <div>
            )
         }
      }
    ```
- we can receive the properties in class based components using constructor. 

### Creating State variables

```
   constructor() {
     this.state = {
        count: 0;
        count2: 0;
     }
   }
```

### Updating state variables.
- Use this.setState() 

 ```
   this.setState({
     count: this.state.count++;
   })
 ```

 ### Class based component render/mount cycle

 - whenever a class based component loads,
 i.e when class is instantiated **first costructor is called then the render method is called.**
 - Constructor, render, componentDidMount() is the order in which the things are called in react.
 - When there is a **parent-child relationship** first childs **componentDidMount()** then the parents one is called.
 - componentDidMount() - is used to make the api calls,because this method is called onnce the component is loaded.

- Parent constructor
- Parent render
    - child one costructor
    - child one render
    - child two constructor
    - child two render
    - child one componentdidmount - which is commit phase
    - child two componentdidmount
- Parent componentdidmount

- ComponentDidUpdate() - is called after the update stage.
- ComponentWillUnmount() - will be called when component is unmounted i.e when we go to the new  route to load a new component.

### API Calls in class based components.


