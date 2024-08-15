import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import imagePath from '../../constants/imagePath';
import {
  height,
  moderateScale,
  textScale,
  width,
} from '../../styles/responsiveSize';
import colors from '../../styles/colors';

const TodoTask = ({navigation, route}) => {
  const [ischeck,setIsCheck]= useState(null)
  const incomingDataFrom = route?.params?.inputData;
  console.log(incomingDataFrom, 'coming');

  return (
    <ScrollView
      bounces={false}
      style={{flex: 1, backgroundColor: colors.themebackgroundcolor}}>
      <View
        style={{
          flex: 1,
          backgroundColor: colors.themebackgroundcolor,
          paddingBottom: moderateScale(40),
        }}>
        <ImageBackground style={styles.imgBackStyle} source={imagePath.back}>
          <ImageBackground
            style={styles.goBackIcImage}
            source={imagePath.headerIc}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={imagePath.goBackArrow} />
            </TouchableOpacity>
          </ImageBackground>
          <Image style={styles.profileImage} source={imagePath.handsome} />
        </ImageBackground>
        <Image style={styles.girlImageStyle} source={imagePath.girl} />
        <View style={styles.containView}>
          <Text style={styles.todoTextStyle}>Todo Tasks.</Text>
          <View style={styles.taskView}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.dairyText}>Dairy Tasks.</Text>
                <Image source={imagePath.Add} />
              </View>
              <View>
                {incomingDataFrom.map((item, index) => {
                  return (
                    <View
                      style={{
                        flexDirection: 'row',
                        marginVertical:moderateScale(6)
                      }}>
                        <Image source={ischeck == item  ? imagePath.RectangleCheck :imagePath.RectangleUncheck}/>
                      <Text
                      onPress={()=>setIsCheck(item)}
                      style={styles.comingTextStyle}>{item}</Text>
                    </View>
                  );
                })}
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default TodoTask;

const styles = StyleSheet.create({
  imgBackStyle: {
    width: width / 1,
    height: height / 2,
  },
  goBackIcImage: {
    width: width / 2,
    height: height / 6.7,
    paddingVertical: moderateScale(44),
    paddingHorizontal: moderateScale(22),
  },
  profileImage: {
    height: moderateScale(140),
    width: moderateScale(140),
    alignSelf: 'center',
  },
  girlImageStyle: {
    height: height / 4.5,
    width: width / 2.8,
    alignSelf: 'center',
    marginTop: moderateScale(-40),
  },
  containView: {},
  todoTextStyle: {
    fontSize: textScale(20),
    marginHorizontal: moderateScale(20),
    fontWeight: '500',
    color: colors.black,
  },
  taskView: {
    marginTop: moderateScale(20),
    marginHorizontal: moderateScale(20),
    borderWidth: 0.2,
    height: height / 3.5,
    borderRadius: 30,
    shadowColor: colors.black,
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3.2,
    elevation: 5,
    paddingHorizontal: moderateScale(18),
    paddingVertical: moderateScale(18),
  },
  dairyText: {
    fontSize: textScale(13),
    fontWeight: '500',
    opacity: 0.5,
    color: colors.black,
  },
  comingTextStyle:{
    marginLeft:moderateScale(12),
    fontSize: textScale(13),
    fontWeight: '500',
    color: colors.black,
  }
});
