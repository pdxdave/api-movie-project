import React from 'react';
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

const Home = () => {

    const [{state, loading, error} , fetchMovie] = useHomeFetch()

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
            <SearchBar />
            <Grid />
            <MovieThumb />
            <LoadMoreBtn />
            <Spinner />
        </React.Fragment>
    )
}

export default Home