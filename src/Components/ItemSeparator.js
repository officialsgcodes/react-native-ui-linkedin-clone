import {View} from 'react-native';
import React from 'react';
import Colors from '../Utils/Colors';

export default function ItemSeparator() {
  return (
    <View
      style={{
        borderTopColor: Colors.LIGHT_GRAY,
        borderTopWidth: 1,
        width: '70%',
        marginLeft: '25%',
      }}
    />
  );
}
