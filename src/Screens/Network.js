import {View, Text, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import Colors from '../Utils/Colors';
import GoToNotifications from '../Components/GoToNotifications';
import Networks from '../Data/Network';
import ShowNetworks from '../Components/ShowNetworks';
import Styles from '../Utils/Styles';

export default function Network({navigation}) {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
      <TouchableOpacity
        onPress={() => {}}
        style={[Styles.flexCenter, {
          paddingHorizontal: 16,
          paddingVertical: 10,
          backgroundColor: Colors.WHITE,
          justifyContent: 'space-between',
        }]}>
        <Text style={{fontSize: 19, fontWeight: 'bold', color: Colors.BLACK}}>
          Manage my Network
        </Text>
      </TouchableOpacity>

      <GoToNotifications navigation={navigation} />
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.WHITE,
          paddingTop: 10,
          paddingHorizontal: 10,
        }}>
        <Text
          style={{
            fontSize: 19,
            color: Colors.BLACK,
            fontWeight: 'bold',
            marginBottom: 10,
            paddingHorizontal: 5,
          }}>
          People you may know
        </Text>
        <FlatList
          contentContainerStyle={[Styles.flexCenter, { flexWrap: 'wrap'}]}
          data={Networks}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <ShowNetworks item={item} />}
        />
      </View>
    </ScrollView>
  );
}
