import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

//Image royalty free and provided courtesy of www.pexels.com
//const image = require('../assets/pexels-blue-bird-7210698.jpg');
const image = require('../assets/splashImage.jpg');
//const image = require('../assets/pexels-noel-aph-11605151.jpg');

export default function SplashScreen({ navigation }) {
    return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode='cover' style={styles.image} blurRadius={5}>
          <TouchableOpacity
            style={styles.splashButtons}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>

          <Text style={styles.splashText}>OR</Text>

          <TouchableOpacity
            style={[styles.splashButtons, styles.splashButtonRegister]}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.buttonText}>REGISTER</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
  safeView: {
    flex: 1,
  },
  splashText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  splashButtons: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    width: '70%',
    height: '8%',
    borderRadius: 8,
    margin: 36,
    opacity: 0.8
  },
  splashButtonRegister: {
    marginBottom: 56
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    opacity: 0.9,
  }
});
