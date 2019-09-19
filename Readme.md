Sample ReactNative Folder Structure
===================================

> For Redux Store to Maintenance and be Testabale Structure

### The best structure from my perspective .

    .
    ├── ...
    ├── src                             
    │   ├── components                  # For All Common
    │   │   └─ ...                      # All Common Components [Reuseable]
    │   │   
    │   ├── navigation                  # Navigator For Each App Screens
    │   │   └── Navigation.js      
    │   │   
    │   ├── screens                     # Screens [ Activities ]
    │   │   └── LoginScreen             # Screen Folder Name
    │   │       ├── Component           # Screen Child Components[Can't Directly UseReduxStore]
    │   │       │   └── ...     
    │   │       └── LoginScreen.js      # Screen Parent Component[Can Directly Use Redux]
    │   │   
    │   ├── store                       # Redux Store
    │   │   ├── actions                 # All Actions 
    │   │   │   ├── ...
    │   │   │   └── actionTypes.js     
    │   │   ├── reducers                # All Reducers
    │   │   │    ├── ...
    │   │   │    └── AuthReducer.js     
    │   │   └── configStore.js          # Configs Binding eg. createStore & combineReducers
    │   │   
    │   └── styles                      # Main Template Styles [ Common Style ]
    │
    ├── App.js                          # Entry Main js
    ├── app.json
    ├── package.json
    └── babel.config.js