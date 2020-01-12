# React Film 

## Instructions

* **Fork** this repository, then clone your fork.
* **NOTE** You have 2 servers that you will be running here so read these instructions carefully.
* **In the root of this directory**: Run `yarn install or npm install` to download dependencies.
* Run the server using `yarn start` or `node server.js`. (Don't worry too much about this process, you'll get used to doing this and it will be explained more in the future).
* In a separate terminal cd into the `client` folder and run `yarn install` to download dependencies.
* Still inside the `client` folder run `yarn start` to run the client application.

* Once your application is up and running on the client, you should see a browser window that looks like this at `localhost:3000`

### Part 1:

* Wrap your app with the router.
* Inside your App file add two routes.
  * one route for `/` that loads the `FilmList` component.
  * one route that will take an `id` parameter after`/films/` (ex: `/film/2`, `/film/3` where the id is dynamic). This route should load the `Film` component.
  * Add functionality that let's you create add a new film with properties(check server.js file to see movie properties you need) to the list of films available using Formik. see a sample I created with codepen [here with Formik](https://codesandbox.io/s/form-management-pf2wj)

### Part 2:

* Make it so that the card in `FilmList` is a link, this should direct the user to the `/films/{id of film here}` URL, where `:id` is the id of the individual film.
* When a user clicks on a film card they should be taken to `/movies/{id of movie here}` to see the details for the selected movie.
* Add functionality so the `Home` button on the `SavedList` component navigates back to home.

## Stretch Goals.

If you have completed Parts 1 & 2 feel free to move on to these stretch goals.

### Add `Save Film` funcitonality.

You will notice there is a 'Saved Film' component that we are not currently using. In this step you will add the functionality to save a film. You will need to pass the `addToSavedList` function to the `Film` component. Once you have done that you will need to add a click handler to the save button.

### Turn your Saved Film list into `Link`s.

You will need to uncomment lines 14-23 in `Movie.js` to complete this. Your list of saved films should be links to the films itself. Study and understand what the `saveFilm` function is doing.

