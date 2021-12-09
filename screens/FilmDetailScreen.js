import React from 'react';
import FilmDetail from '../components/FilmDetail';

export const FilmDetailScreen = ({ route }) => {

    const film = route.params;

    return (
        <FilmDetail film={film} />
    )
}
