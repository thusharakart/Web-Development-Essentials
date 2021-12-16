
#### Install redux

> npm install redux react-redux

> create reducers

> create combinedReducer @reducers/index.js

> create STORE @index.js

##### In oder to visualize the states we can use Redux DevTool Extension with Chrome Web Browser

> go to https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd

> Add to chrome

> go to https://github.com/zalmoxisus/redux-devtools-extension

> copy the basic store and add it to the project @index.js

```
    const store = createStore(
        reducer, /* preloadedState, */
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

```
> wrap the app with Provider @index.js which will connects our global States our store to our entire app.

> inspect the browser( hit F12 ) and go to Redux tab and hit State

> create new file index.js @actions

> import the required actions @App.js

> add the functionality @App.js

