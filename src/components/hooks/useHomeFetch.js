import {useState, useEffect} from 'react';
import {API_URL, API_KEY} from '../../config.js';

export const useHomeFetch = () => {

        // need an empty array to take in the movies
        const [state, setState] = useState({ movies:[]})
        const [loading, setLoading] = useState(false)
        const [error, setError] = useState(false)
    
        // using async await to make sure we don't move forward until we get a return
        const fetchMovies = async endpoint => {
            // currently no errors
            setError(false)
            // loading has started
            setLoading(true)
    
            try {
                // await in parens runs first, then outer await parses the json
                const result = await (await fetch(endpoint)).json()
                console.log(result)
                setState( prev => ({
                    // grab the previous state
                    ...prev,
                    movies: [...result.results],
                    // checking for bannerImage. If not there, get the first in array
                    heroImage: prev.bannerImage || result.results[0],
                    currentPage: result.page,
                    totalPages: result.total_pages
                }))
                
            }
            catch(err){
                setError(true)
                console.log(err)
            }
            //loading has stopped
            setLoading(false)
        }
    
        // useEffect is passing the movieEndpoint to getMovies()
        useEffect(() => {
            fetchMovies(`${API_URL}movie/popular?api_key=${API_KEY}`)
        }, []) // [] will just run once on mount
    
        return [{state, loading, error}, fetchMovies]
}
