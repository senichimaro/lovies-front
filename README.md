# løvies : Leo Movies App
This is app is built from down to up from the point of view about basic requirements and complexity gain with features addition.

In this way, basic implementations are Front-End UI components to human-readability and cool engage styling.

Upon this basics, more complex functionalities are added extending the business logic. Like user accounts (login & authentication) and persistent data.

### Basics
1. Components
  * [x] Search : search field and like a
  * [x] Loader : UX element
  * [x] Rendering : table for showing the result.
  * [x] Responsiveness : working on desktop as well as mobile
  * [x] Posters and trailers
2. Functionality
  * [x] API : TMDb `https://www.themoviedb.org/documentation/api`

### Extended
1. Components   
   * [x] favourites star icon
2. Functionality
   * [ ] user accounts (login & authentication)
   * [ ] setting movies as your favourites
   * [ ] A list like the "watch later" functionality on YouTube.

Final Scheme
~~~
./
|_home
|_login/signup
  |_/profile
  |_/favorites
  |_/seeLater
  |_/settings

~~~

## Packages
Front-End Librearies used for this project:
* React Router
* Redux
* Axios
* React Query
* React Forms
* GraphQL
* Auth0
* dotenv

## Back-End : PaaS
By the absence of the explicit requirement about to _create any kind of Back-End_. It was assumed that the persistence of data in this project wouldn't be via MERN (not Nodejs &Expressjs). 

So, It's used MongoDB services like Realm to work with in a _Platform as a Service_ way or _Serverless_ kind of app, because no specification is defined.


# Final steps
1. set movie page
   - [x] card button link to movie page by id
   - [x] get id from params
   - [x] get movie by id
   - [ ] display data or show error
2. set auth functionality : favorite
   - [x] star button save movie
3. set auth pages
   - [ ] profile
   - [ ] favorites
   - [ ] see-later
   - [ ] settings
4. set auth functionality : see-later
   - [x] needs a button


## Realm
1. [ ] getters & setters
   - [ ] functionality to work with lists
     - [ ] get list in /favorites
     - [ ] get list in /see-later
   - [ ] functionality to work with users
     - [ ] get list in /profile
     - [ ] get list in /settings
     - [ ] check if a user exist (find) or create (post) in one function (findOrCreate)
     - 