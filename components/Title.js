import React from "react";
import { Text, StyleSheet, View } from 'react-native';

const Title = ({title, constomStyle, left}) => {
    const { container, bookTitle, leftAling} = styles;
    const getStyle = ()=> left ? leftAling : container

    
    return (
        <View style={getStyle()}>
        <Text style={[bookTitle, constomStyle]}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
       
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        alignItems: "center",
       
         
    },
    bookTitle: {
        fontSize: 30,
        color: "white",
        fontFamily: "GT-Sectra-Fine-Regular",
        fontWeight: "400",
        lineHeight: 30,
        marginTop: 40
    },
    leftAling: {
        flexDirection: "row",

        justifyContent: "flex-start",
        color: "white",
        alignContent: "center",
        width: "100%",
        paddingLeft: 30
    },
   
});

export default Title;
