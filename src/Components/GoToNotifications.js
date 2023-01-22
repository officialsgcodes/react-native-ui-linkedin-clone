import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import CustomIcon from './CustomIcon';
import Styles from '../Utils/Styles';

export default function GoToNotifications({navigation}) {
  return (
    <View
      style={{
        backgroundColor: Colors.WHITE,
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 16,
      }}>
      <Text style={{fontSize: 16, color: Colors.BLACK, marginVertical: 5}}>
        Invitations have moved to Notifications tab
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate(Screens.NOTIFICATION)}
        style={[Styles.flexCenter, {
          paddingHorizontal: 16,
          alignSelf: 'flex-start',
          paddingVertical: 5,
          borderRadius: 50,
          backgroundColor: Colors.BLUE,
          elevation: 5,
        }]}>
        <CustomIcon
          name="notifications"
          size={19}
          color={Colors.WHITE}
          style={{marginRight: 10}}
        />
        <Text style={{color: Colors.WHITE, fontSize: 16, fontWeight: 'bold'}}>
          Go To Notifications
        </Text>
      </TouchableOpacity>
    </View>
  );
}
