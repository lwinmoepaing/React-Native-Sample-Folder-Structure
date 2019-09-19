Sample ReactNative Folder Structure
===================================

> For Redux Store to Maintenance and be Testabale Structure

### The best structure from my perspective .

    .
    ├── ...
    ├── src                             
    │   ├── components                  # For All Common
    │   │   └─ ...                      # All Common Components [ Reuseable]
    │   │   
    │   ├── navigation                  # Navigator For Each App Screens
    │   │   └── Navigation.js      
    │   │   
    │   ├── screens                     # Screens [ Activities ]
    │   │   └── LoginScreen             # Screen Folder Name
    │   │       ├── Component           # Screen Child Components[Can't Directly UseReduxStore]
    │   │       │   └── ...     
    │   │       └── LoginScreen.js     
    │   │   
    │   ├── store        
    │   │   ├── actions     
    │   │   │   ├── ...
    │   │   │   └── actionTypes.js     
    │   │   ├── reducers     
    │   │   │    ├── ...
    │   │   │    └── AuthReducer.js     
    │   │   └── configStore.js      
    │   │   
    │   └── styles     
    │
    ├── App.js
    ├── app.json
    ├── package.json
    └── babel.config.js