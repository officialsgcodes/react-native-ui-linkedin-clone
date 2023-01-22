import {View, FlatList} from 'react-native';
import React from 'react';
import Colors from '../Utils/Colors';
import ShowAllFooter from '../Components/ShowAllFooter';
import ShowNotifications from '../Components/ShowNotifications';
import Notifications from '../Data/Notifications';

export default function Notification() {
  return (
    <View
      style={{
        marginTop: 10,
        paddingHorizontal: 10,
        backgroundColor: Colors.WHITE,
      }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={Notifications}
        renderItem={ShowNotifications}
        ListFooterComponent={() => <ShowAllFooter />}
      />
    </View>
  );
}
