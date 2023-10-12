### How to create react app manually

* **Step1**: Initialize the project.

    * npm init

* **Step2**: install the package bundler like webpack or parcel. 

    * npm install parcel - it fetches the modules related to dependecy and creates the node_modules.
    * npx parcel index.html - it exceutes the index.html and server will be live on a port on localhost.
    * npx parcel build index.html - the generate dev build files are hosted on
    /dist folder.
    * 

## Dev Dependencies vs Dependency

* Dev Dependencies are needed for development purpose. (npm install -D parcel). -D installs dependencies as dev dependencies.
* Other used are in production phase.

## carot and tlide in package.json

* caret(^) - allow for minor comptiable versions with current dependencies.
* tlide (~) - allows for major patch version.

## package.json vs package-lock.json

*  package.json - is the configuration file for npm to keep track of all the approximate versions of packages installed on the project.
* package-lock.json - stores the exact version of the package/dependency installed and it also store hash related to that version - when app moved from one enviroment to other hash will be used.

## Support app in different browsers

- add **browserslist** in package.json
- we can check in browserslist.org site to check from different browser versions.

## parcel
- Dev Build 
- creates local server 
- HMR - Hot Module Replacemet 
- Faster Builds - it caches the things in the .parcel-cache folder
- Image optimization/compression
- Minification of files - when app is build for production.
- Compressing of files
- Considtent Hashing
- Code Splitting
- Differential Bundling - support for older browsers.
- We can deploy app on Https.
- Tree Shaking - removes the unused code.




