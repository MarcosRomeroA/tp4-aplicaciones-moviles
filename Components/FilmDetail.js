import React from 'react'
import {Text, View, Image, StyleSheet } from 'react-native'

export default function FilmDetail(data) {

    const film = data.film;

    return (
        <View style={{paddingHorizontal: 10}}>  
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
        height: 300,
        marginTop: 20
    }
});