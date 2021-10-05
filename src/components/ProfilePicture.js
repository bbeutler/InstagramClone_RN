import {Image, StyleSheet, View} from 'react-native';
import React from 'react';

const ProfilePicture = ({uri, size = 70}) => {
  return (
    <View style={[styles.container, {width: size + 6, height: size + 6}]}>
      <Image
        style={[styles.image, {width: size, height: size}]}
        source={{
          uri: uri,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 7,
    borderRadius: 38,
    borderWidth: 3,
    borderColor: '#ae22e0',
  },
  image: {
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#ffffff',
  },
});

export default ProfilePicture;
