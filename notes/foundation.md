### Creating Scripts

- In the package.json we can create scripts under script object.

 ```
   "script": {
     "start":"parcel index.html",
     "build": "parcel build index.html"
   } 

   - npm run start or npm start
   - npm run build or npm build
 ```

### JSX

- Javascript syntax for react elements.
- It is html like syntax in javascript - but not javascript.
- JSX cannot be understood by the javascript engine or browser.
- JSX is transpiled before it reaches to JSEngine. It is done by parcel using bibel.
- JSX if needed to be split into multiple lines - wrap it into ();
- JSX takes care of cross-site scripting.

### React Components

- Class Based Components - old way of writing components
- Functional Components - new way of writing components.
   
   * Javascript function which returns jsx/react element.
   ```
   const HeadingCompoent = () => {
  return  <h1 className='heading'>Functional Component</h1> };
   ```
- we can use {} to write javascript inside the JSX element. we can use this to include react elemets inside react components.
- <ComponentName/> - This is used to iclude component.

### Component Composition

- Including one react compoet into other.



