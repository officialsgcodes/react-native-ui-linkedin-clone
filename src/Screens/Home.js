import {View, FlatList} from 'react-native';
import React from 'react';
import Posts from '../Data/Posts';
import ShowPosts from '../Components/ShowPosts';

export default function Home() {
  return (
    <View>
      <FlatList
        data={Posts}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <ShowPosts item={item} />}
      />
    </View>
  );
}
