### Custom Hooks

- Custom hooks are normal javascipt functions which will use the convention of word "use" before their name.

### How to make the app performant/fast

- App Chunking, Code splitting , dynamic bundling, lazy loading, on demand loading.
- we have to do the logical separation of components first..
- We need to implement lazy loading/ondemand loading. Lazy loading will help in generating a separating new bunndle.
- The following component should be **lazy loaded inside the app.js or where the routing is defined**.
- SWe should also import lazy and Suspense components.

- App.js
    ```
      const component = lazy(() => import('./Grocery'));

      const appRouter = createBrowserRouter([
      {
        path: "/",
        element: <AppLayout />,
        children: [
          {
            path: "/grocery",
            element: <Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>
          }
        ],
        errorElement: <Error />,
      },
    ]);

    ```
- 
