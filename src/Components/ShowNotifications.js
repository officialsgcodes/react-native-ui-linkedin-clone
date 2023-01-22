import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from '../Utils/Colors';
import CustomIcon from './CustomIcon';
import Styles from '../Utils/Styles';

export default ShowNotifications = ({item}) => {
  const CTA = ({title}) => (
    <TouchableOpacity
      onPress={() => {}}
      style={{
        borderRadius: 50,
        borderColor: Colors.BLUE,
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginTop: 10,
        alignSelf: 'flex-start',
        width: 'auto',
      }}>
      <Text style={{fontSize: 16, color: Colors.BLUE}}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View
      style={[
        Styles.flexCenter,
        {
          justifyContent: 'space-evenly',
          marginVertical: 10,
        },
      ]}>
      <Image
        source={item.logo}
        style={{height: 50, width: 50, marginRight: 20}}
      />
      <View>
        <Text
          style={{
            width: 240,
            fontSize: 16,
            color: Colors.BLACK,
            paddingRight: 5,
          }}>
          {item.description}
        </Text>
        {item.isNewJob ? (
          <CTA title="View Job" />
        ) : item.isAView ? (
          <CTA title="See all views" />
        ) : item.isJobAlert ? (
          <CTA title="See 30+ Jobs" />
        ) : item.isBirthday ? (
          <CTA title="Say Happy Birthday" />
        ) : item.isConnectionAccepted ? (
          <CTA title="Message" />
        ) : item.isTrending ? (
          <Text>{item.trendingCount} Reactions</Text>
        ) : null}
      </View>
      <View>
        <Text style={{fontSize: 13, marginBottom: 5}}>
          {item.notificationTime}d
        </Text>
        <TouchableOpacity onPress={() => {}}>
          <CustomIcon name="ellipsis-vertical" size={22} color={Colors.BLACK} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
