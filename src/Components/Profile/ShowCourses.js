import {View, Text} from 'react-native';
import React from 'react';
import Colors from '../../Utils/Colors';

export default ShowCourses = ({DATA}) =>
  DATA.COURSES.map(item => (
    <View
      style={{
        borderBottomColor: Colors.LIGHT_GRAY,
        borderTopWidth: 1,
        paddingVertical: 10,
        marginHorizontal: 10,
      }}>
      <Text style={{fontSize: 17, color: Colors.BLACK}}>{item}</Text>
    </View>
  ));
