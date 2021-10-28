# connectu-Admin
RUN: 
 - git clone <gitRepoURL>
 - cd connectu-Admin
  
  Please note(do not push the connectu KEYS to the repo).
  Only on your local machine:
  !Replace firebase configuration keys with 
  the Connectu Official firebase account configs.
  make sure your machine has proper access to connectu's accounts
  
 - yarn install
 - npm run build
 - yarn start
 
 Running on firebase host:
  - firebase login
  - firebase init (And choose ONLY the services that you'll make use of in the app)
  - firebase deploy
  
