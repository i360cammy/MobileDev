import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LogoImage = (props) => {
  //Import logo image
  const logo = require('../assets/logo.png');

  //Provides the navigation so that we can navigate from here
  const navigation = useNavigation();

  //Create the logo image, placing it inside a touchableOpacity so it can
  //recieve touch events so that we can use it for navigation. We have permanent
  //styles for both the touchableOpacity and the Image, but we also leave
  //the possibility of passing additional styles via the props.
  return (
    <TouchableOpacity
      {...props}
      onPress={() => navigation.navigate('Splash')}
      style={[styles.logoContainer, props.myContainerStyle]}>
      <Image source={logo} style={[styles.logoImage, props.myLogoStyle]} />
    </TouchableOpacity>
  );
};

//Create the styling 
const styles = StyleSheet.create({
    logoContainer: {
    width: '50%', 
    height: '30%', 
    marginBottom: '5%',
  },
  logoImage: {
    flex: 1,
    resizeMode: 'contain', 
    maxWidth: '100%',  
    alignSelf: 'center'
  },
});

//Export so we can import and use it in other files
export default LogoImage;
