### Notes

#### Page hierarchy

```
    Index.js
        /components
            - App.js
                Home
                /elements
                    Header
            - Home
                /elements
                    HeroImage
                    SearchBar
                    Grid
                    MovieThumb
                    LoadMoreBtn
                    Spinner

```

### Hero Image
This is the process by which we get the hero image and content on the main page.  We are using a custom hook called useHomeFetch().  That hook is sets the state, loading, and errors.  A useEffect() hook is passing a url to a function called fetchMovies() within our useHomeFetch(). fetchMovies() grabs the movie data using a fetch, then parses the data into json. Yes, there are two awaits; first we get all the endpoint data, then parse. Next we set the state.  To do this we use ```prev```.  We copy the old state using ```...prev```.  We then take the returned data and put it into an array called ```movies```.  Notice we are spreading in result and it's connected to results which is a property on the API ```result.results```.   Next, we create a property called ```heroImage``` and we store the image in that property.  First we check if we have the heroImage in the state.  If so, we move on.  If not, we grab the first result. After that we create properties for ```currentPage``` and ```totalPages```.     

When this is done, we return the state, loading, error and the fetchMovies() function.  These will be imported and used in Home.    

### Movie Grid on Home page

We import a NoImage pic in the event there is no image to get from the API.   

We want to know if we are in "search" mode or not.  The default movies loaded will be known as "popular movies".  Movies returned as a search result will be known as "search result".  We use the useState() hook to monitor this.  We'll make a header prop in the Grid component using a ternary to handle this.

Recall that we are bringing in the state to the Home page and that the movies are in a property called "movies".  We can map through the movies in the Grid component and send them to the "MovieThumb" component.

Inside the MovieThumb component we pass as props the key, a clickable prop which will be used for when we click on an image to take us to a new page, and finally we grab the image from the state. Notice that this is ternary.  If there is no image, we pull up a NoImage image.