import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const Action = props => {
    const { container, price, priceContent, preview, previewContent } = styles;
    return(
        <View style={container}>
            <TouchableOpacity onPress={() => {}} style={price} >
                <Text style ={priceContent}>19.99$</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={preview} >
                <Text style ={previewContent}>Free Preview</Text>
            </TouchableOpacity>
        </View>

    );
};


const styles = StyleSheet.create({

    container:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 27,
        width: 271,
        height: 48,
        
    },
    price: {
        
        
        justifyContent: "center",
        alignItems: "center",
        width: 150,
        height: 48,
        borderTopLeftRadius: 15, 
        borderBottomLeftRadius: 15,
        backgroundColor: "white"
    },
    priceContent: {
        color: "black",
        fontFamily: "Montserrat-Black",
        fontSize: 18,
        fontWeight: "700",
        lineHeight: 18

    },
    preview: {
       
        justifyContent: "center",
        alignItems: "center",
        width: 150,
        height: 48,
        borderTopRightRadius: 15, 
        borderBottomRightRadius: 15,
        backgroundColor: "#ef8262",
        color: "white",

    },
    previewContent: {
        color: "black",
        fontFamily: "Gilroy-Bold",
        fontSize: 16,
        fontWeight: "700",
        lineHeight: 16


    }

})


export default Action;