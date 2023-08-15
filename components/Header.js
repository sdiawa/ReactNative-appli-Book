import React from "react";
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { prefix } from '../utils/constants';

const Header = (props) => {
    const { container, closeIcon, cartIcon } = styles;
    return (
        <View style={container}>
            <Ionicons name={`${prefix}-close`} style={closeIcon} />
            <Ionicons name={`${prefix}-cart`} style={cartIcon} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
       
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        alignItems: "center",
        paddingHorizontal: 38,
        marginVertical: 20,
        marginBottom: 28,
        
    },
    closeIcon: {
        fontSize: 45,
        color: "white"
    },
    cartIcon: {
        fontSize: 45,
        color: "white"
    }
});

export default Header;
