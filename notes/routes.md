### React router

- Install react router dom

    ```
     npm install react-router-dom
    ```
- Import the createBrowserRouter and pass the list of routers.
- Import ReactProvider from react-router-dom..
 
   ```
     const appRouter = createBrowserRouter( {
        path: '/',
        element: <Component/>
     })

     root.render(<RouterProvider route={appRouter} />);
   ```

### Children Routes

- We can use Outlet component in order to display the children as per the path.

  ```
   const appRouter = createBrowserRouter( {
        path: '/',
        element: <Component/>,
        children: [
         {
            path: "/about",
            element: <About/>
         }
        ]
     })
   ```

   - When we want to route to a different page, **do not use href**.
   - Use the Link component.
   -  ```
       <Link to="/path">About US</Link>
      ```

### Routing types in web apps

- client side routing
- server side routing
