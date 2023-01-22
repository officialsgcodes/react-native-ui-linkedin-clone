import React from 'react';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'
import Colors from '../../Utils/Colors';
import Styles from '../../Utils/Styles';

const ShowExperience = ({DATA}) => DATA.EXPERIENCE.map(item => (
  <View
    style={[Styles.flexCenter, {
      borderBottomColor: Colors.LIGHT_GRAY,
      borderBottomWidth: 1,
      paddingVertical: 10,
    }]}>
    <Image
      source={item.logo}
      style={{height: 50, width: 50, marginRight: 10}}
    />
    <View>
      <Text style={{fontSize: 19, fontWeight: 'bold', color: Colors.BLACK}}>
        {item.title}
      </Text>
      <View style={Styles.flexCenter}>
        <Text style={{color: Colors.BLACK, fontSize: 16}}>
          {item.companyName}
        </Text>
        <Icon name="dot-single" size={16} color={Colors.BLACK} />
        <Text style={{color: Colors.BLACK, fontSize: 16}}>
          {item.jobType}
        </Text>
      </View>
      <Text style={{fontSize: 15}}>
        {item.startDate} - {item.endDate}
      </Text>
    </View>
  </View>
))

export default ShowExperience;
