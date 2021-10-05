import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import React, {useState, useEffect} from 'react';

import ADIcon from 'react-native-vector-icons/AntDesign';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';

const Footer = ({likesCount: likesCountProp, caption, timePosted}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const onLikePressed = () => {
    const amount = isLiked ? -1 : 1;
    setLikesCount(likesCount + amount);

    setIsLiked(!isLiked);
  };

  useEffect(() => {
    setLikesCount(likesCountProp);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.leftIcons}>
          <TouchableWithoutFeedback onPress={onLikePressed}>
            {isLiked ? (
              <ADIcon name="heart" size={25} color={'#e73838'} />
            ) : (
              <ADIcon name="hearto" size={25} color={'#545454'} />
            )}
          </TouchableWithoutFeedback>
          <FontistoIcon name="comment" size={23} color={'#545454'} />
          <IonicIcon name="paper-plane-outline" size={26} color={'#545454'} />
        </View>
        <FAIcon name="bookmark-o" size={25} color={'#545454'} />
      </View>

      <Text style={styles.likes}>{likesCount} Likes</Text>
      <Text style={styles.caption}>{caption}</Text>
      <Text style={styles.timePosted}>{timePosted}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  likes: {
    fontWeight: 'bold',
    margin: 3,
  },
  caption: {
    margin: 3,
  },
  timePosted: {
    color: '#8c8c8c',
    margin: 3,
    fontSize: 14,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  leftIcons: {
    flexDirection: 'row',
    width: 120,
    justifyContent: 'space-between',
  },
});

export default Footer;
