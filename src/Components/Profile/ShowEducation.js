import React from 'react';
import {View, Text, Image} from 'react-native';
import Colors from '../../Utils/Colors';
import Styles from '../../Utils/Styles';

const ShowEducation = ({DATA}) => DATA.EDUCATION.map(item => (
  <View style={[Styles.flexCenter, { paddingBottom: 10}]}>
    <Image
      source={item.logo}
      style={{height: 50, width: 50, marginHorizontal: 16}}
    />
    <View>
      <Text
        style={{
          fontSize: 19,
          color: Colors.BLACK,
          fontWeight: 'bold',
          width: 250,
        }}>
        {item.college}
      </Text>
      <Text style={{color: Colors.BLACK}}>{item.name}</Text>
      <Text>{item.time}</Text>
    </View>
  </View>
))

export default ShowEducation;
