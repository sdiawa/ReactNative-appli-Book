import React from "react";
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Cover from "./Cover";

const CoverList = ({images}) => {
    const renderCover = ({item}) => {
        return(
            <TouchableOpacity>
               <Cover small image={item.imageSrc}/> 
            </TouchableOpacity> 
        );
    };
    return(
        <FlatList
        style={styles.flex}
            contentContainerStyle={styles.padding}
            data={images}
            horizontal={true}
            renderItem={(item) => renderCover(item)}
            keyExtractor={item => item.id}
            />
    );
};

const styles = StyleSheet.create({
    padding:{
        paddingHorizontal: 25
    },
    flex: {
        flex: 1
    }
})

export default CoverList