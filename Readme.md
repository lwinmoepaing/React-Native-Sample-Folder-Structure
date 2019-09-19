Sample ReactNative Folder Structure
===================================

> For Redux Store to Maintenance and be Testabale Structure

### the best structure from my perspective .

    .
    ├── ...
    ├── src                    
    │   ├── components  
    │   │   └─ ...      
    │   │   
    │   ├── navigation  
    │   │   └── Navigation.js      
    │   │   
    │   ├── screens         
    │   │   └── LoginScreen     
    │   │       ├── Component     
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