import React, {useState} from 'react';
import {
    API_URL,
    API_KEY,
    API_BASE_URL,
    POSTER_SIZE,
    BACKDROP_SIZE,
    IMAGE_BASE_URL
} from '../config'

import HeroImage from './elements/HeroImage';
import SearchBar from './elements/SearchBar';
import Grid from './elements/Grid'
import MovieThumb from './elements/MovieThumb';
import LoadMoreBtn from './elements/LoadMoreBtn'
import Spinner from './elements/Spinner'

import {useHomeFetch} from './hooks/useHomeFetch'

import NoImage from './images/no_image.jpg'

const Home = () => {

    const [{state, loading, error} , fetchMovie] = useHomeFetch()
    const {searchTerm, setSearchTerm} = useState('')

    console.log(state)

    if(error) return <div>There is a problem</div>
    if(!state.movies[0]) return <div>Loading...</div>

    return (
        <React.Fragment>
            <HeroImage 
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}`}
                title={state.heroImage.original_title}
                text={state.heroImage.overview}
                release_date={state.heroImage.release_date}
            />
            <SearchBar/>

            <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
                {state.movies.map(movie => (
                    <MovieThumb 
                        key={movie.id}
                        clickable
                        image={
                            state.movie.poster_path 
                            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                            : NoImage
                        }
                    />
                ))}
            </Grid>

            <LoadMoreBtn />
            <Spinner />
        </React.Fragment>
    )
}

export default Home