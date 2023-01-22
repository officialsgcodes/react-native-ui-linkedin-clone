import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import Colors from '../../Utils/Colors';
import Icon from 'react-native-vector-icons/Entypo'
import Styles from '../../Utils/Styles';

const ShowLicenses = ({DATA}) => DATA.LICENSE_CERTIFICATION.map(item => (
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
      <Text style={{fontSize: 19, color: Colors.BLACK, fontWeight: 'bold'}}>
        {item.title}
      </Text>
      <View style={Styles.flexCenter}>
        <Text style={{fontSize: 16}}>Issued - {item.issuedDate}</Text>
        <Icon name="dot-single" size={16} color={Colors.GRAY} />
        <Text>
          {item.expirationDate
            ? `Expires - ${item.expirationDate}`
            : 'No Expiration Date'}
        </Text>
      </View>

      {item.hasCertificate ? (
        <TouchableOpacity
          onPress={() => {}}
          style={[Styles.flexCenter, {
            marginTop: 10,
            borderRadius: 50,
            borderWidth: 1.5,
            borderColor: Colors.GRAY,
            paddingHorizontal: 10,
            paddingVertical: 5,
            alignSelf: 'flex-start'
          }]}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>
            Show Credentials{' '}
          </Text>
          <Icon name="link" size={19} color={Colors.GRAY} />
        </TouchableOpacity>
      ) : null}
    </View>
  </View>
))

export default ShowLicenses;
