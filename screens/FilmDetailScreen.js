import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export const FilmDetailScreen = ({ route }) => {

    const film = route.params;

    return (
        <View style={{marginTop: 20, paddingHorizontal: 15}}>
            <Text style={{marginTop: 25, fontSize: 25}}>
                {film.title}
            </Text>

            <Text style={{marginTop:20, fontWeight: 'bold', fontSize: 20}}>
                Synopsis 
            </Text>

            <Text style={{marginTop: 15}}>
                {film.description}
            </Text>

            <Image
                style={styles.image}
                source={{
                    uri: film.image,
                }}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    image: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        marginTop: 20
    }
});