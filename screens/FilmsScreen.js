import React from 'react'
import axios from 'axios';
import { View, Text, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export const FilmsScreen = () => {

    const navigation = useNavigation();

    const [films, setFilms] = React.useState([]);

    const GHIBLI_URL = 'https://ghibliapi.herokuapp.com/films';

    const getAllFilms = async () => {
        const response = await axios.get(GHIBLI_URL);
        const data = await response.data;
    
        return data;
    }

    React.useEffect(() => {
        getAllFilms().then(films => {
            setFilms(films);
        })
    }, [])

    return (
        <View style={{
            flex:1 
        }}>
            <View style={{marginTop: 20, marginHorizontal: 20}}>   
                <View >
                    <Text  
                        style={{ 
                            justifyContent: 'center', 
                            alignContent:'center', 
                            fontSize:15,
                            marginBottom: 20
                        }}>
                        List of Studio Ghibli Films
                    </Text>
                </View>
                <View
                    style={{
                        height:600,
                    }}
                >  
                    <View>
                        {   
                            films ? 
                            <FlatList
                                data={films}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={({item})=>(
                                    <TouchableOpacity onPress={()=>navigation.navigate('Film Detail', item)} style={{marginTop: 15, backgroundColor: 'lavender', padding: 5}}>
                                        <View >
                                            <Text>{item.title}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )}
                            />
                            : <Text  style={{marginTop:20}}>No se encontro ningun resultado para esta busqueda</Text>
                        }
                    </View>        
                </View>
            </View>    
        </View>
    )
}

