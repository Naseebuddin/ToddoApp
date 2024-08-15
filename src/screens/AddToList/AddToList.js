import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import colors from '../../styles/colors';
import {
  height,
  moderateScale,
  textScale,
  width,
} from '../../styles/responsiveSize';
import imagePath from '../../constants/imagePath';
import TextInputComp from '../../Components/TextInputComp';
import CustomBtn from '../../Components/CustomBtn';
import navigationsStrings from '../../constants/navigationsStrings';
const AddToList = ({navigation}) => {
  const [firstInputData,setFirstInputdata] = useState();
  const [secondInputData,setSecondInputdata] = useState();
  const [thirdInputData,setThirdInputData] = useState();
const handlNavigation  = () =>{
  const inputData = [firstInputData,secondInputData,thirdInputData];
  navigation.navigate(navigationsStrings.TODOTASK,{inputData})

}

  console.log(firstInputData,secondInputData,thirdInputData,'working');
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      bounces={false}
      style={{flex: 1, backgroundColor: colors.themebackgroundcolor}}>
      <View
        style={{
          flex: 1,
          paddingBottom: moderateScale(40),
          backgroundColor: colors.themebackgroundcolor,
        }}>
        <ImageBackground
          style={styles.backgroundStyle}
          resizeMode="cover"
          imageStyle={styles.imageBackStyle}
          source={imagePath.headerIc}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={imagePath.goBackArrow} />
          </TouchableOpacity>
        </ImageBackground>

        <View style={styles.containViewStyle}>
          <Text style={styles.welcomeText}>Welcome Onboard!</Text>
          <Image
            style={styles.whiteBoardImageStyle}
            source={imagePath.laptop}
          />
          <Text style={styles.forgetText}>
            Add What your want to do later on..
          </Text>
          <TextInputComp
          value={firstInputData}
          onChangeText={text=>setFirstInputdata(text)}
          />
          <TextInputComp 
          value={secondInputData}
          onChangeText={text =>setSecondInputdata(text)}
          />
          <TextInputComp 
          value={thirdInputData}
          onChangeText={text =>setThirdInputData(text)}
          />

          <CustomBtn
            btnStyle={{marginTop: moderateScale(20)}}
            btnText={'Add to list '}
            onpress={() => handlNavigation()}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default AddToList;

const styles = StyleSheet.create({
  imageBackStyle: {
    height: height / 6.3,
    width: width / 2.1,
  },
  backgroundStyle: {
    paddingHorizontal: moderateScale(30),
    paddingVertical: moderateScale(40),
  },
  containViewStyle: {
    alignItems: 'center',
    marginTop: moderateScale(44),
  },
  welcomeText: {
    fontSize: textScale(20),
    fontWeight: '500',
    color: colors.black,
  },
  whiteBoardImageStyle: {
    marginTop: moderateScale(21),
    height: height / 3.8,
    width: width / 1.5,
  },
  forgetText: {
    color: colors.btnColor,
    fontSize: textScale(13),
    marginBottom: moderateScale(32),
    fontWeight: '500',
    marginTop: moderateScale(12),
  },
  redyText: {
    fontSize: textScale(15),
    marginTop: moderateScale(32),
  },
  signinText: {
    fontSize: textScale(15),
    color: colors.btnColor,
    fontWeight: '500',
  },
});
