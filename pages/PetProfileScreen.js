import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const logo = require('../assets/logo.png');


export default function PetProfileScreen({ navigation }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Dog', value: 'dog' },
    { label: 'Cat', value: 'cat' },
    { label: 'Rabbit', value: 'rabbit' },
  ]);

  const [petName, setPetName] = useState(null);
  const [petAge, setPetAge] = useState(null);
  const [petBreed, setPetBreed] = useState(null);

  return (
    <View style={styles.container}>
     
        <TouchableOpacity onPress={() => navigation.navigate('Splash')} style={styles.logoContainer}>
          <Image source={logo} style={styles.logoImage}/> 
        </TouchableOpacity>
  

      <Text>Add a pet profile</Text>

        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder='Species'
          style={[styles.dropdown, styles.petProfileInput]}
          textStyle={styles.dropdownText}
          dropDownContainerStyle={styles.dropdownContainer}
          arrowIconStyle={{position: 'absolute', top: -10}}
        />
 
      <TextInput
          onChangeText={setPetName}
          value={petName}
          placeholder="Pet Name"
          autoCapitalize="words"
          style={styles.petProfileInput}
        />

        <TextInput
          onChangeText={setPetAge}
          value={petAge}
          placeholder="Pet Age"
          keyboardType='numeric'
          style={styles.petProfileInput}
        />

        <TextInput
          onChangeText={setPetBreed}
          value={petBreed}
          placeholder="Breed"
          autoCapitalize="words"
          style={styles.petProfileInput}
        />

        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.button}>
            <Text>Back</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text>Add Another Pet</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text>Register</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
  logoContainer: {
    width: '50%', 
    height: '20%', 
    marginVertical: '10%'
  },
  logoImage: {
    flex: 1,
    resizeMode: 'contain', 
    maxWidth: '100%',  
    alignSelf: 'center'
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropdownText: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 5
  },
  dropdownContainer: {
    borderWidth: 3,
    borderRadius: 17,
    width: '90%',
    marginLeft: '5%',
    marginRight: '5%'
  },
  petProfileInput: {
    borderWidth: 3,
    borderRadius: 17,
    borderColor: 'black',
    width: '90%',
    height: 60,
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: 20,
    paddingLeft: '10%',
    paddingRight: '10%',
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: 'white',
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  button: {
    paddingHorizontal: '5%'
  }
});
