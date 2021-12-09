import React from 'react';
import axios from 'axios';
import { View, Text, Image, StyleSheet } from 'react-native';
import { AuthContext } from '../context/AuthContext';

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
        // Set All films
        getAllFilms().then(films => {
            const film = getRandom(films);

            setRandomFilm(film);

            //setFilms(films);
        })
    }, [])

    return (
        <View style={{marginTop: 20, paddingHorizontal: 15}}>
            <View style={{flex:1, alignItems: 'center'}}>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>
                    Welcome {user.given_name}
                </Text>
            </View>
            <Text style={{marginTop: 50, fontSize: 20}}>
                Have you seen this movie?
            </Text>
            <Text style={{marginTop: 25, fontSize: 25}}>
                {randomFilm.title}
            </Text>

            <Text style={{marginTop:20, fontWeight: 'bold', fontSize: 20}}>
                Synopsis 
            </Text>

            <Text style={{marginTop: 15}}>
                {randomFilm.description}
            </Text>

            <Image
                style={styles.image}
                source={{
                    uri: randomFilm.image,
                }}
            />
        </View>
    )
}
  
function getRandom(list) {
    return list[Math.floor((Math.random()*list.length))];
}

const styles = StyleSheet.create({
    image: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        marginTop: 20
    }
});