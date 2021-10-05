import {View, Text, FlatList} from 'react-native';
import React from 'react';
import Post from './Post/Post';
import Stories from './Stories';

const data = [
  {
    id: '1',
    user: {
      imageUri:
        'https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/287166766_1028531151370531_1833629095788263918_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=xO5sowTgL-wAX96vMnz&_nc_ht=scontent-los2-1.xx&oh=00_AT8MOGt7JvKbx51_wraNJt5M15ffDfYBnmQf5sNvjKEaaw&oe=6311AA40',
      name: 'Blessing',
    },
    imageUri:
      'https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    caption: 'Beautiful Night City #instagram',
    likesCount: 1234,
    timePosted: '6 minutes ago',
  },
  {
    id: '2',
    user: {
      imageUri:
        'https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/287166766_1028531151370531_1833629095788263918_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=xO5sowTgL-wAX96vMnz&_nc_ht=scontent-los2-1.xx&oh=00_AT8MOGt7JvKbx51_wraNJt5M15ffDfYBnmQf5sNvjKEaaw&oe=6311AA40',
      name: 'Blessing',
    },
    imageUri:
      'https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?cs=srgb&dl=pexels-peng-liu-169647.jpg&fm=jpg',
    caption: 'Beautiful Night City #instagram',
    likesCount: 1234,
    timePosted: '6 minutes ago',
  },
  {
    id: '3',
    user: {
      imageUri:
        'https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/287166766_1028531151370531_1833629095788263918_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=xO5sowTgL-wAX96vMnz&_nc_ht=scontent-los2-1.xx&oh=00_AT8MOGt7JvKbx51_wraNJt5M15ffDfYBnmQf5sNvjKEaaw&oe=6311AA40',
      name: 'Blessing',
    },
    imageUri:
      'https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    caption: 'Beautiful Night City #instagram',
    likesCount: 1234,
    timePosted: '6 minutes ago',
  },
  {
    id: '4',
    user: {
      imageUri:
        'https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/287166766_1028531151370531_1833629095788263918_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=xO5sowTgL-wAX96vMnz&_nc_ht=scontent-los2-1.xx&oh=00_AT8MOGt7JvKbx51_wraNJt5M15ffDfYBnmQf5sNvjKEaaw&oe=6311AA40',
      name: 'Blessing',
    },
    imageUri:
      'https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    caption: 'Beautiful Night City #instagram',
    likesCount: 1234,
    timePosted: '6 minutes ago',
  },
  {
    id: '5',
    user: {
      imageUri:
        'https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/287166766_1028531151370531_1833629095788263918_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=xO5sowTgL-wAX96vMnz&_nc_ht=scontent-los2-1.xx&oh=00_AT8MOGt7JvKbx51_wraNJt5M15ffDfYBnmQf5sNvjKEaaw&oe=6311AA40',
      name: 'Blessing',
    },
    imageUri:
      'https://images.pexels.com/photos/1707820/pexels-photo-1707820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    caption: 'Beautiful Night City #instagram',
    likesCount: 1234,
    timePosted: '6 minutes ago',
  },
];

const Feed = () => {
  return (
    <FlatList
      data={data}
      ListHeaderComponent={<Stories />}
      keyExtractor={({id}) => id}
      renderItem={({item}) => <Post post={item} />}
    />
  );
};

export default Feed;
