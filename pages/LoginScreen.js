import React, { useContext, useEffect, useMemo, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator
} from 'react-native';
import CustomTextInput from '../components/CustomTextInput'
import LogoImage from '../components/LogoImage';

import { AuthContext } from '../components/context';




export default function LoginScreen({ navigation }) {

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const { signIn } = useContext(AuthContext);

  const loginHandle = (userName, password) => {
    signIn(userName, password) 
  }

  return (
    <SafeAreaView style={styles.safeView}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{width: '100%', height: '100%', alignItems: 'center'}}>
            <LogoImage myContainerStyle={{marginTop: '20%'}}/>
            <View style={styles.innerView}>
            <Text style={styles.welcomeText}>Welcome Back!</Text>
            <CustomTextInput
              myPlaceholder="username"
              myAutoCapitalize='none'
              onChangeText={setUsername}
              value={username}
            />
            <CustomTextInput
              myPlaceholder="password"
              myAutoCapitalize="none"
              secureTextEntry={true}
              onChangeText={setPassword}
              value={password}
            />
            <TouchableOpacity style={styles.loginButtons} onPress={() => loginHandle(username, password)}>
              <Text>LOGIN</Text>
            </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  safeView: {
    flex: 1,
  },
  loginButtons: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    backgroundColor: '#4BB6FF',
    width: '90%',
    height: 60,
    borderRadius: 8,
  },
  innerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  welcomeText: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: '20%'
  }
})