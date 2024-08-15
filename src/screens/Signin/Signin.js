import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import imagePath from '../../constants/imagePath';
import {
  height,
  moderateScale,
  textScale,
  width,
} from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import TextInputComp from '../../Components/TextInputComp';
import CustomBtn from '../../Components/CustomBtn';
import navigationsStrings from '../../constants/navigationsStrings';

const Signin = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <ScrollView 
    showsVerticalScrollIndicator={false}
    bounces={false}
    style={{ flex:1,backgroundColor: colors.themebackgroundcolor}}>
    <View style={{flex: 1,
      paddingBottom:moderateScale(40),
      backgroundColor: colors.themebackgroundcolor}}>
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
        <Text style={styles.welcomeText}>Welcome Back!</Text>
        <Image
          style={styles.whiteBoardImageStyle}
          source={imagePath.whiteBoard}
        />
        <TextInputComp
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder={'Enter your Email address '}
        />
        <TextInputComp
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder={'Confirm Password'}
        />
        <Text style={styles.forgetText}>Forgot Password ?</Text>
        <CustomBtn
        btnStyle={{marginTop:moderateScale(20)}}
        btnText={'Sign In '}
        />
           <Text style={styles.redyText}>
           Dont have an account ?<Text 
              
              style={styles.signinText}
              onPress={()=>navigation.navigate(navigationsStrings.SIGNUP)}
              >  Sign Up</Text>
              </Text>
      </View>
      
    </View>
    </ScrollView>
  );
};

export default Signin;

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
    marginTop:moderateScale(44)
  },
  welcomeText: {
    fontSize: textScale(20),
    fontWeight: '500',
    color: colors.black,
  },
  whiteBoardImageStyle: {
    marginTop: moderateScale(21),
    height: height / 2.3,
    width: width / 1.4,
  },
  forgetText: {
    color: colors.btnColor,
    fontSize: textScale(13),
    fontWeight: '500',
    marginTop: moderateScale(12),
  },
  redyText:{
    fontSize:textScale(15),
    marginTop:moderateScale(32)
  },
  signinText:{
    fontSize:textScale(15),
    color:colors.btnColor,
    fontWeight:'500'
  }
});
