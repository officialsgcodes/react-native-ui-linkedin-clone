import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from '../Utils/Colors';
import Images from '../Utils/Images';
import CustomIcon from './CustomIcon';
import Styles from '../Utils/Styles';

export default ShowJobs = ({item}) => (
  <View
    style={[Styles.flexCenter, { marginVertical: 16, marginHorizontal: 25}]}>
    <Image
      source={item.logo}
      style={{height: 50, width: 50, marginRight: 16}}
    />
    <View>
      <Text
        style={{
          fontSize: 19,
          color: Colors.BLACK,
          fontWeight: 'bold',
          width: 230,
        }}
        numberOfLines={2}
        ellipsizeMode="tail">
        {item.title}
      </Text>
      <TouchableOpacity onPress={() => {}}>
        <Text
          style={{
            fontSize: 16,
            color: Colors.LIGHT_BLACK,
            fontWeight: 'bold',
            marginTop: 3,
          }}>
          {item.companyName}
        </Text>
      </TouchableOpacity>
      <Text style={{fontSize: 14, color: Colors.GRAY, marginTop: 3}}>
        {item.location}
      </Text>
      {item.hasSchoolAlumni ? (
        <View style={Styles.flexCenter}>
          <Image
            source={Images.LOGOS.UNIVERSITY}
            style={{height: 25, width: 25, marginVertical: 5}}
          />
          <Text style={{fontSize: 13, color: Colors.GRAY, marginLeft: 10}}>
            {item.alumniCount} School Alumni
          </Text>
        </View>
      ) : null}

      <Text style={{fontSize: 13, color: Colors.GRAY}}>
        {item.daysAgo}
        {item.daysAgo > 1 ? ' days ' : ' day '}
        Ago
      </Text>
    </View>
    <TouchableOpacity onPress={() => {}}>
      <CustomIcon name="bookmark-outline" size={28} color={Colors.GRAY} />
    </TouchableOpacity>
  </View>
);
