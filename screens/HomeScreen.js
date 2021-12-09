import React from 'react';
import axios from 'axios';
import { View, Text } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import FilmDetail from '../components/FilmDetail';

const GOOGLE_INFO_URL = "https:/www.googleapis.com/oauth2/v3/userinfo?access_token=";

const GHIBLI_URL = 'https://ghibliapi.herokuapp.com/films';

export const HomeScreen = () => {

    const { user, setUser, auth } = React.useContext(AuthContext);

    const [randomFilm, setRandomFilm] = React.useState([]);

    let token = auth;

    React.useEffect(() => {        
        getUser(token);
    }, [])

    const getUser = token => {
        axios.get(GOOGLE_INFO_URL+token.accessToken).then(resp=>{
            setUser(resp.data)            
        }).catch(error=>{
            console.log(error.message)
        })
    }

    const getAllFilms = async () => {
        const response = await axios.get(GHIBLI_URL);
        const data = await response.data;
    
        return data;
    }

    React.useEffect(() => {
        getAllFilms().then(films => {
            const film = getRandom(films);
            setRandomFilm(film);
        })
    }, [])

    return (
        <View style={{flex:1 ,marginTop: 20}}>
            <View style={{alignItems: 'center', paddingHorizontal: 15}}>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>
                    Welcome {user.given_name}
                </Text>
                <Text style={{marginTop: 20, fontSize: 20}}>
                    Have you seen this movie?
                </Text>
            </View>
            <FilmDetail film={randomFilm} />
        </View>
    )
}
  
function getRandom(list) {
    return list[Math.floor((Math.random()*list.length))];
}

