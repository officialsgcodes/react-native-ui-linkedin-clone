import {Text} from 'react-native';
import React from 'react';
import Colors from '../Utils/Colors';

export default Heading = ({title}) => (
  <Text style={{fontSize: 19, color: Colors.BLACK, fontWeight: 'bold'}}>
    {title}
  </Text>
);
