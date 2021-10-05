import {View, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import Story from './Story';

const data = [
  {
    imageUri:
      'https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/285816934_578793443670354_5728335408265157727_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ACxAh-QOlBwAX9pBLlr&_nc_ht=scontent-los2-1.xx&oh=00_AT-b3Rk54JcoMHdU4bK-fGid27ATjjoi0wqX0n4MWBBvIg&oe=6310C2F7',
    name: 'Jennifer',
  },
  {
    imageUri:
      'https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/301983815_4915535161881645_5266333081608268407_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=lD935yKVWRAAX9fabE6&_nc_ht=scontent-los2-1.xx&oh=00_AT-HMsvpZSVBFwjY9n_g_7nBC3SsoRtM3s1kzlqacs0lCQ&oe=63107566',
    name: 'Mabel',
  },
  {
    imageUri:
      'https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/301473960_7875810065822343_9154062723555241600_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_hZQeMnuK3oAX8Ycxoa&_nc_ht=scontent-los2-1.xx&oh=00_AT-hbLcU3FkZcpr11EYO5j_4IgZCbRE1YMJmPeC8ogRdfw&oe=63117384',
    name: 'Isaac',
  },
  {
    imageUri:
      'https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/287166766_1028531151370531_1833629095788263918_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=xO5sowTgL-wAX96vMnz&_nc_ht=scontent-los2-1.xx&oh=00_AT8MOGt7JvKbx51_wraNJt5M15ffDfYBnmQf5sNvjKEaaw&oe=6311AA40',
    name: 'Blessing',
  },
  {
    imageUri:
      'https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/285816934_578793443670354_5728335408265157727_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ACxAh-QOlBwAX9pBLlr&_nc_ht=scontent-los2-1.xx&oh=00_AT-b3Rk54JcoMHdU4bK-fGid27ATjjoi0wqX0n4MWBBvIg&oe=6310C2F7',
    name: 'Jenny',
  },
  {
    imageUri:
      'https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/301983815_4915535161881645_5266333081608268407_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=lD935yKVWRAAX9fabE6&_nc_ht=scontent-los2-1.xx&oh=00_AT-HMsvpZSVBFwjY9n_g_7nBC3SsoRtM3s1kzlqacs0lCQ&oe=63107566',
    name: 'Mabella',
  },
  {
    imageUri:
      'https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/301473960_7875810065822343_9154062723555241600_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_hZQeMnuK3oAX8Ycxoa&_nc_ht=scontent-los2-1.xx&oh=00_AT-hbLcU3FkZcpr11EYO5j_4IgZCbRE1YMJmPeC8ogRdfw&oe=63117384',
    name: 'Isaki',
  },
  {
    imageUri:
      'https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/287166766_1028531151370531_1833629095788263918_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=xO5sowTgL-wAX96vMnz&_nc_ht=scontent-los2-1.xx&oh=00_AT8MOGt7JvKbx51_wraNJt5M15ffDfYBnmQf5sNvjKEaaw&oe=6311AA40',
    name: 'Bleyo',
  },
];

const Stories = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={({name}) => name}
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => (
        <Story imageUri={item.imageUri} name={item.name} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
});
export default Stories;
