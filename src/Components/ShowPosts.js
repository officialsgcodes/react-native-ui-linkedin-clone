import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from '../Utils/Colors';
import Icon from 'react-native-vector-icons/Entypo';
import {deviceWidth} from './Dimensions';
import Images from '../Utils/Images';
import CustomIcon from '../Components/CustomIcon';
import Styles from '../Utils/Styles';

export default function ShowPosts({item}) {
  return (
    <View
      style={{
        backgroundColor: Colors.WHITE,
        marginVertical: 5,
        paddingVertical: 10,
      }}>
      <View style={Styles.flexCenter}>
        <Image
          source={item.profile_picture}
          style={{
            height: 60,
            width: 60,
            borderRadius: 100,
            marginHorizontal: 10,
          }}
        />
        <View>
          <View style={Styles.flexCenter}>
            <Text
              style={{fontSize: 16, color: Colors.BLACK, fontWeight: 'bold'}}>
              {item.name}
            </Text>
            {item.connection ? (
              <Text style={{fontWeight: 'bold'}}>
                <Icon size={16} name="dot-single" color={Colors.GRAY} />
                {item.connection}
              </Text>
            ) : null}
          </View>
          <Text style={{width: 180}} numberOfLines={1} ellipsizeMode="tail">
            {item.title}
          </Text>
          <Text style={{fontSize: 11}}>{item.timeAgo} hr</Text>
        </View>
        {item.connection ? (
          <TouchableOpacity
            onPress={() => {}}
            style={{width: 80, alignItems: 'flex-end'}}>
            <Icon name="dots-three-vertical" size={19} color={Colors.GRAY} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {}}
            style={Styles.flexCenter}>
            <Icon name="plus" color={Colors.BLUE} size={22} />
            <Text
              style={{
                fontSize: 19,
                fontWeight: 'bold',
                color: Colors.BLUE,
                marginLeft: 5,
              }}>
              Follow
            </Text>
          </TouchableOpacity>
        )}
      </View>

      {item.content ? (
        <Text
          style={{
            paddingHorizontal: 16,
            color: Colors.BLACK,
            marginVertical: 10,
            textAlign: 'justify',
          }}
          numberOfLines={3}
          ellipsizeMode="tail">
          {item.content}
        </Text>
      ) : (
        <View style={{marginTop: 10}} />
      )}

      {item.hasImage ? (
        <Image
          source={item.postImage}
          style={{height: 300, width: deviceWidth}}
        />
      ) : null}

      <View
        style={[Styles.flexCenter, {
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          paddingTop: 5,
        }]}>
        <View style={Styles.flexCenter}>
          <Image
            style={{height: 25, width: 25, borderRadius: 100}}
            source={Images.LIKE}
          />
          <Text>{item.likes} likes</Text>
        </View>
        <View style={Styles.flexCenter}>
          {item.comments > 0 ? <Text>{item.comments} comments</Text> : null}
          {item.comments > 0 && item.shares > 0 ? (
            <Icon name="dot-single" size={16} color={Colors.GRAY} />
          ) : null}
          {item.shares > 0 ? <Text>{item.shares} shares</Text> : null}
        </View>
      </View>

      <View
        style={{
          borderTopColor: Colors.LIGHT_GRAY,
          borderTopWidth: 1,
          margin: 10,
        }}
      />

      <View
        style={[Styles.flexCenter, {
          justifyContent: 'space-between',
          paddingHorizontal: 40,
        }]}>
        <TouchableOpacity onPress={() => {}} style={{alignItems: 'center'}}>
          <Icon
            name="thumbs-up"
            size={19}
            color={item.isLiked ? Colors.BLUE : Colors.GRAY}
          />
          <Text style={{color: item.isLiked ? Colors.BLUE : Colors.GRAY}}>
            Like
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems: 'center'}} onPress={() => {}}>
          <CustomIcon
            name="chatbubble-ellipses-outline"
            size={19}
            color={Colors.GRAY}
          />
          <Text>comment</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems: 'center'}} onPress={() => {}}>
          <Icon name="share" size={19} color={Colors.GRAY} />
          <Text>share</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems: 'center'}} onPress={() => {}}>
          <CustomIcon name="send-outline" size={19} color={Colors.GRAY} />
          <Text>send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
