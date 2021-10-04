# løvies : Leo Movies App
This is app is built from down to up from the point of view about basic requirements and complexity gain with features addition. [see it live](https://senichimaro.github.io/lovies/#/)

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
   * [x] user accounts (login & authentication)
   * [x] setting movies as your favourites
   * [x] A list like the "watch later" ('later') functionality on YouTube.

Final Scheme
~~~
./
|_home
|_login/signup
  |_/favorites
  |_/later

~~~

## Packages
Front-End Librearies used for this project:
* React Router
* Redux
* Axios
* Auth0
* dotenv

## Back-End 
There were no specific requirements about Back-End or PaaS, so MERN was provided to improve efficiency in data handling.


# Final steps
1. set movie page
   - [x] card button link to movie page by id
   - [x] get id from params
   - [x] get movie by id
   - [ ] display data or show error
2. set auth functionality : favorite
   - [x] star button save movie
3. set auth pages
   - [ ] favorites
   - [ ] see-later ('later')
4. set auth functionality : see-later
   - [x] needs a button


## ~~Realm~~ Nodejs/Express -> MongoDB/Mongoose
1. [x] getters & setters
   - [x] functionality to work with lists
     - [x] get list in /favorites
     - [x] get list in /see-later
   - [x] functionality to work with users
     - [x] check if a user exist (find) or create (post) in one function (findOrCreate)

## The Name: Why løvies?
To be creative 'løvies' is a mix of 'lion' in danish, 'love' for love in plaine inglish, and movies: It's like 'The WebApp for movies lovers by movie lovers from Leo Vegas'.