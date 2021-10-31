# connectu-Admin
RUN: 
 - git clone <gitRepoURL>
 - cd connectu-Admin
  - cd connectu-App
   - yarn install
   - npm run build
   - yarn start
 
  Please note(do not push the connectu KEYS to the repo)!
  Only on your local machine:
  !Replace firebase configuration keys with 
  the Connectu Official firebase account configs.
  make sure your machine has proper access to connectu's accounts
  
 
 
 Running on firebase host:
  - firebase login
  - firebase init (And choose ONLY the services that you'll make use of in the app)
  - firebase deploy
  
RUN ZOOM API:
 - cd zoomApi (from connectu-Admin directory)
  - yarn install
  - node index.js
 (You should be notified that your App is successfully connected to port 3444)
 
 
 
