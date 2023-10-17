### React folder structure

- create separate files for seperate component.
- in order to import components which are delcared in other files, we have to export the compoents first.

 ```
  export default component-name;
 ```

 ### export types

 - default and named exports.
 - a file can have **only one default export.**
 - When we want to **export multiple things we can use named export.**

    ```
    - default export
     export default Component;
     import Component from 'path';

    - named export
     export const Component;
     import { Component } from path; 
    ```
 - can we combine both the default and named parameters?   

 ### Event Handlers
 - on the component we can write the events and pass in a function which handles that event.

  ```
   <Component onClick=(() => console.log('Button Clicked'))>
  ```

### React Hooks
- Hooks are needed inorder to change of the component.
- Hooks are normal javascript functions. They are written inside react library.
- useState() - used to create react variables.
   - parameters passed to the useState() function will be assigned to the state variable.  
- useEffect() - 

- creating state variable

   ```
      import { useState } from 'React';

      const [data] = useState([]);
   ```
- useEffect will be called everytime when a component is rendered - if no dependency array is provided.
- useEffect will be called only on the initial render - in case of empty dependency array is provided.
- useEffect will be called everytime when the dependency array is changed.
- Never create the hooks outside the functional component. 
- Never create the hooks inside conditional statements, for loops,

### Why react apps are fast

React Uses

 - Reconciliation algorithm. Also known as React Fiber.
 - Virtual DOM - is an representation of actual DOM. It is basically a react object.
 - Diff Algorithm - 
 - Wheever a state variable changes - the whole component releate to state variable will be rendered.
 - 



