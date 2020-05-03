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
This is the process by which we get the hero image and content on the main page.  We are using a custom hook called useHomeFetch().  That hook is setting the state, setting loading, and setting errors.  A useEffect() hook is passing a url to a function called fetchMovies() within our useHomeFetch(). fetchMovies() is grabbing the movie data using a fetch, then parsing the data into json. Yes, there are two awaits; first we get all the endpoint data, then parse. Next we set the state.  To do this we use ```prev```.  We copy the old state using ```...prev```.  We take the returned data and put it into an array called ```movies```.  Notice we are spreading in result and it's connected to results which is a property on the API ```result.results```.   Next, we create a property called ```heroImage``` and we store the image in tha property.  First we check if we have the heroImage in the state.  If so, we move on.  If not, we grab the first result. After that we create properties for ```currentPage``` and ```totalPages```.