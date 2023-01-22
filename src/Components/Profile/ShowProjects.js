import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Entypo'
import Colors from '../../Utils/Colors'
import Styles from '../../Utils/Styles'

export default ShowProjects = ({DATA}) => DATA.PROJECTS.map(item => (
  <View
    style={{
      borderBottomColor: Colors.LIGHT_GRAY,
      borderBottomWidth: 1,
      paddingVertical: 10,
      marginHorizontal: 10,
    }}>
    <Text style={{fontSize: 17, color: Colors.BLACK, fontWeight: 'bold'}}>
      {item.title}
    </Text>
    <Text>
      {item.startDate} - {item.endDate}
    </Text>
    {item.isLinkPresent ? (
      <TouchableOpacity
        onPress={() => {}}
        style={[Styles.flexCenter, {
          marginTop: 10,
          borderRadius: 50,
          borderWidth: 1.5,
          borderColor: Colors.GRAY,
          paddingHorizontal: 10,
          paddingVertical: 5,
          alignSelf: 'flex-start',
        }]}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>
          Show Project{' '}
        </Text>
        <Icon name="link" size={19} color={Colors.GRAY} />
      </TouchableOpacity>
    ) : null}

    <Text
      numberOfLines={2}
      ellipsizeMode="tail"
      style={{marginTop: 10, color: Colors.GRAY}}>
      {item.description}
    </Text>
  </View>
))