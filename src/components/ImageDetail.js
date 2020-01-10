import React from 'react';
import { Text , View , Image, StyleSheet } from 'react-native';

const ImageDetail = (props) => {
    console.log(props);
    return(
        <View>
            <Image source={props.imageSource} />            
            <Text>{props.title}</Text>
            <Text>Image Scroe - {props.imageScore}</Text>
        </View>
    )
}


StyleSheet.create({

})

export default ImageDetail;