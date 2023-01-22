import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import * as ProfileData from '../Data/Profile';
import Colors from '../Utils/Colors';
import Icon from 'react-native-vector-icons/Entypo';
import Heading from '../Components/Heading';
import CustomIcon from '../Components/CustomIcon';
import ShowAllFooter from '../Components/ShowAllFooter';
import SectionHeading from '../Components/SectionHeading';
import ShowPeople from '../Components/Profile/ShowPeople';
import ShowCourses from '../Components/Profile/ShowCourses';
import ShowProjects from '../Components/Profile/ShowProjects';
import ShowSkills from '../Components/Profile/ShowSkills';
import ShowLicenses from '../Components/Profile/ShowLicenses';
import ShowEducation from '../Components/Profile/ShowEducation';
import ShowExperience from '../Components/Profile/ShowExperience';
import Styles from '../Utils/Styles';

export default function Profile() {
  const DATA = ProfileData.default;

  const Analytics = ({title, subTitle, icon}) => (
    <View style={[Styles.flexCenter, { paddingVertical: 10}]}>
      <CustomIcon
        name={icon}
        size={28}
        color={Colors.GRAY}
        style={{marginRight: 10}}
      />
      <View>
        <Text style={{fontSize: 17, fontWeight: 'bold', color: Colors.BLACK}}>
          {title}
        </Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={{color: Colors.LIGHT_BLACK}}>{subTitle}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{backgroundColor: Colors.WHITE, marginBottom: 10}}>
        <Image source={DATA.INFO.banner} style={{width: '100%', height: 100}} />
        <Image
          source={DATA.INFO.profile_picture}
          style={{
            height: 100,
            width: 100,
            borderRadius: 100,
            borderColor: Colors.WHITE,
            bottom: 50,
            left: 15,
          }}
        />
        <View style={{marginTop: -45, paddingHorizontal: 10}}>
          <Text style={{fontSize: 28, color: Colors.BLACK, fontWeight: 'bold'}}>
            {DATA.INFO.name}
          </Text>
          <Text style={{color: Colors.BLACK, fontSize: 16}}>
            {DATA.INFO.bio}
          </Text>
          <Text style={{marginTop: 4, marginBottom: 10}}>
            Talks about - {DATA.INFO.talksAbout.map(item => `${item} `)}
          </Text>
          <View style={Styles.flexCenter}>
            <Text
              style={{color: Colors.BLUE, fontSize: 15, fontWeight: 'bold'}}>
              {DATA.INFO.followers} followers
            </Text>
            <Icon name="dot-single" size={16} color={Colors.GRAY} />
            <Text
              style={{color: Colors.BLUE, fontSize: 15, fontWeight: 'bold'}}>
              {DATA.INFO.connections > 500 ? '500+' : DATA.INFO.connections}{' '}
              connections
            </Text>
          </View>
        </View>

        <View
          style={[Styles.flexCenter, {
            marginVertical: 16,
            justifyContent: 'space-evenly',
          }]}>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              backgroundColor: Colors.BLUE,
              borderRadius: 50,
              width: 140,
              paddingVertical: 5,
              alignItems: 'center',
            }}>
            <Text style={{color: Colors.WHITE, fontSize: 19}}>Open to</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderWidth: 1,
              borderColor: Colors.GRAY,
              borderRadius: 50,
              width: 140,
              paddingVertical: 5,
              alignItems: 'center',
            }}>
            <Text style={{color: Colors.GRAY, fontSize: 19}}>Add Section</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderRadius: 50,
              borderWidth: 1,
              borderColor: Colors.GRAY,
              width: 35,
              height: 35,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="dots-three-horizontal" size={19} color={Colors.GRAY} />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{backgroundColor: Colors.WHITE, marginBottom: 10, padding: 10}}>
        <Heading title="Analytics" />
        <View style={Styles.flexCenter}>
          <CustomIcon name="eye" size={19} color={Colors.GRAY} />
          <Text> Private to you</Text>
        </View>
        <Analytics
          icon="people"
          title={`${DATA.ANALYTICS.profile_views} profile views`}
          subTitle="Discover who's viewed your profile"
        />
        <Analytics
          icon="bar-chart"
          title={`${DATA.ANALYTICS.post_impressions} post impressions`}
          subTitle="Check out who's engaing with your posts"
        />
        <Analytics
          icon="search"
          title={`${DATA.ANALYTICS.search_appearence} search appearences`}
          subTitle="See how often you appear in search results"
        />
      </View>

      <View
        style={{backgroundColor: Colors.WHITE, marginBottom: 10, padding: 10}}>
        <View
          style={[Styles.flexCenter, {
            justifyContent: 'space-between',
            marginBottom: 14,
          }]}>
          <Heading title="About" />
          <TouchableOpacity onPress={() => {}}>
            <CustomIcon size={22} name="pencil" color={Colors.GRAY} />
          </TouchableOpacity>
        </View>

        <Text
          style={{color: Colors.BLACK, fontSize: 15, textAlign: 'justify'}}
          numberOfLines={4}
          ellipsizeMode="tail">
          {DATA.ABOUT}
        </Text>
      </View>

      <View style={Styles.container}>
        <SectionHeading title="Experience" />
        <ShowExperience DATA={DATA} />
        <ShowAllFooter />
      </View>

      <View style={Styles.container}>
        <SectionHeading title="Education" />
        <ShowEducation DATA={DATA} />
      </View>

      <View style={Styles.container}>
        <SectionHeading title="Licenses & Certifications" />
        <ShowLicenses DATA={DATA} />
      </View>

      <View style={Styles.container}>
        <SectionHeading title="Skills" />
        <ShowSkills DATA={DATA} />
      </View>

      <View style={Styles.container}>
        <SectionHeading title="Courses" />
        <ShowCourses DATA={DATA} />
      </View>

      <View style={Styles.container}>
        <SectionHeading title="Projects" />
        <ShowProjects DATA={DATA} />
      </View>

      <View style={[Styles.container, { backgroundColor: Colors.LIGHT_BLUE, marginBottom: 0 }]}>
        <SectionHeading title="People also viewed" />
        <ShowPeople DATA={DATA} />
      </View>
    </ScrollView>
  );
}
