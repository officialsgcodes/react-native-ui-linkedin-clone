import {View, Text, ScrollView, FlatList} from 'react-native';
import React from 'react';
import Colors from '../Utils/Colors';
import Jobs from '../Data/Jobs';
import ShowAllFooter from '../Components/ShowAllFooter'
import ItemSeparator from '../Components/ItemSeparator'
import ShowJobs from '../Components/ShowJobs'

export default function Job() {
  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <View
        style={{flex: 1, backgroundColor: Colors.WHITE, marginVertical: 10}}>
        <Text
          style={{
            fontSize: 16,
            color: Colors.BLACK,
            fontWeight: 'bold',
            marginBottom: 16,
            marginHorizontal: 16,
            paddingTop: 10,
          }}>
          Recommended for you
        </Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Jobs}
          renderItem={ShowJobs}
          ItemSeparatorComponent={() => <ItemSeparator />}
          ListFooterComponent={() => <ShowAllFooter />}
        />
      </View>
    </ScrollView>
  );
}
