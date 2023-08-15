import React from "react";
import { View, StyleSheet, Image } from 'react-native';


const Cover = ({image, small}) => {
    const { container, imageStyle,smallStyle } = styles;
    const getContainerStyles= () => small ? smallStyle: container;
    return(
        <View style={getContainerStyles()}>
            <Image style={imageStyle} source={image}/>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
       
        width: 162,
        height: 243,  
        
    },
    imageStyle: {
      
            width: "100%", // Utilisez 100% de la largeur du conteneur
            height: "100%", // Utilisez 100% de la hauteur du conteneur
            borderRadius: 10
    },
    smallStyle: {
       
        width: 70,
        height: 112,  
        marginTop: 30,
        marginHorizontal: 5
        
    },
});

export default Cover;