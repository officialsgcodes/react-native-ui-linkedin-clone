import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from '../Utils/Colors';
import Images from '../Utils/Images';
import CustomIcon from './CustomIcon';
import Styles from '../Utils/Styles';

export default function ShowNetworks({item}) {
  return (
    <View
      style={{
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.GRAY,
        margin: 5,
        width: 160,
        height: 270,
        alignItems: 'center',
      }}>
      <Image
        source={item.banner}
        style={{
          width: '100%',
          height: 70,
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        }}
      />
      <Image
        source={item.profile_picture}
        style={{borderRadius: 100, height: 100, width: 100, marginTop: -50}}
      />
      <Text
        style={{
          fontSize: 19,
          color: Colors.BLACK,
          fontWeight: 'bold',
          paddingHorizontal: 7,
          marginTop: 5,
        }}>
        {item.name}
      </Text>
      <Text
        style={{
          fontSize: 15,
          paddingHorizontal: 7,
          textAlign: 'center',
          marginBottom: 10,
          height: 35,
        }}>
        {item.title}
      </Text>
      {item.hasSameCompany ? (
        <View style={Styles.flexCenter}>
          <Image
            source={Images.COMPANY}
            style={{
              height: 20,
              width: 20,
              borderRadius: 50,
              marginHorizontal: 6,
            }}
          />
          <Text style={{fontSize: 13}}>M.I. Softwares</Text>
        </View>
      ) : item.mutualConnections > 0 ? (
        <View style={Styles.flexCenter}>
          <CustomIcon
            icon="ellipsis-horizontal-circle"
            size={16}
            color={Colors.GRAY}
          />
          <Text style={{fontSize: 13, marginLeft: 2}}>
            {item.mutualConnections} mutual connections
          </Text>
        </View>
      ) : (
        <View style={{height: 20}} />
      )}
      <TouchableOpacity
        onPress={() => {}}
        style={{
          borderWidth: 1,
          borderColor: Colors.BLUE,
          borderRadius: 50,
          paddingHorizontal: 30,
          paddingVertical: 2,
          marginVertical: 10,
        }}>
        <Text style={{fontSize: 19, fontWeight: 'bold', color: Colors.BLUE}}>
          Connect
        </Text>
      </TouchableOpacity>
    </View>
  );
}
