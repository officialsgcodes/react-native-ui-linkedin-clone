import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import CustomIcon from '../CustomIcon';
import Colors from '../../Utils/Colors';
import Styles from '../../Utils/Styles';

export default ShowPeople = ({DATA}) =>
  DATA.PEOPLE_VIEWED.map(item => (
    <View style={[Styles.flexCenter, { paddingVertical: 10}]}>
      <Image
        source={item.profile_picture}
        style={{height: 50, width: 50, borderRadius: 100, marginRight: 20}}
      />
      <View style={{width: 230}}>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: Colors.BLACK}}>
          {item.name}
        </Text>
        <Text>{item.title}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {}}
        style={{
          borderWidth: 1,
          borderColor: Colors.GRAY,
          borderRadius: 50,
          width: 35,
          height: 35,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <CustomIcon name="navigate" size={22} color={Colors.GRAY} />
      </TouchableOpacity>
    </View>
  ));
