import React from "react";
import { View, StyleSheet, Text } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { prefix } from '../utils/constants';



const Rating = (props) => {
    const { container, star, rate, votes } = styles;
    return (
        <View style={container}>
            <Ionicons name={`${prefix}-star`} style={star} />
            <Text style={rate}>4.8</Text> 
            <Text style={votes}>(2578)</Text> 
        </View>
    );
};

const styles = StyleSheet.create({

    container:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
        width: 148,
        paddingHorizontal: 25
    },
    star: {
        color: "#ffdd4f"
    },
    rate: {
        color: "white",
        fontFamily: "Montserrat-Medium",
        fontSize: 16,
        fontWeight: "500",
        lineHeight: 16

    },
    votes: {
        color: "white",
        opacity: 0.5,
        fontFamily: "Montserrat-Black",
        fontSize: 14,
        fontWeight: "400",
        lineHeight: 14


    }

})



export default Rating;