import {Image, Dimensions, StyleSheet} from 'react-native';
import React from 'react';

const Body = ({imageUri}) => {
  return <Image source={{uri: imageUri}} style={styles.image} />;
};
const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
  },
});
export default Body;
