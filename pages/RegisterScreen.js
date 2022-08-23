import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import LogoImage from '../components/LogoImage';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RegisterScreen({ navigation }) {

  const [formContent, setFormContent] = useState({
    'email': '',
    'username': '',
    'firstname': '',
    'lastname': '',
    'password': ''
  })

  const updateField = e => {
    setFormContent({...formContent, [e.target.name]: e.target.value})
  }

  return (
    <SafeAreaView style={styles.safeView}>
      <ScrollView contentContainerStyle={styles.container}>
        <LogoImage myContainerStyle={{marginTop: '10%'}}/>
        <Text style={styles.text}>Register a new account</Text>
        <CustomTextInput
          myOnChangeText={updateField}
          myValue={formContent.email}
          myPlaceholder="Email"
          myAutoCapitalize="none"
        />

        <CustomTextInput
          myOnChangeText={updateField}
          myValue={formContent.username}
          myPlaceholder="Username"
          myAutoCapitalize="none"
        />

        <CustomTextInput
          myOnChangeText={updateField}
          myValue={formContent.firstname}
          myPlaceholder="First Name"
          myAutoCapitalize="words"
        />

        <CustomTextInput
          myOnChangeText={updateField}
          myValue={formContent.lastname}
          myPlaceholder="Last Name"
          myAutoCapitalize="words"
        />

        <CustomTextInput
          myOnChangeText={updateField}
          myValue={formContent.password}
          myPlaceholder="Password"
          myAutoCapitalize="none"
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('Pet Profile')}>
          <Text>Next Step</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 8
  },
  safeView: {
    flex: 1,
  },
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  nextButton: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    backgroundColor: '#4BB6FF',
    width: '90%',
    height: 60,
    borderRadius: 8,
  }
});
