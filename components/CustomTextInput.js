import React from 'react';
import { TextInput, StyleSheet, View, Image } from 'react-native';

const CustomTextInput = (props) => {

  //Import the logo image. This is the same as the main logo
  const image = require('../assets/logo.png');

  //Create the custom text input inside a View. The custom input contains a
  //regular react native TextInput with specific styling and a small version
  //of the main logo overlayed on the text input
  return(
    <View style={styles.container}>
      <TextInput
        {...props}
        placeholder={props.myPlaceholder}
        autoCapitalize={props.myAutoCapitalize}
        style={styles.customTextInput}
      />
      <Image source={image} style={styles.image} />
    </View>
)
}

//Create the styling
const styles = StyleSheet.create({
  container: {
    width: '90%', 
    marginHorizontal: '5%'
  },
  customTextInput: {
    borderWidth: 2,
    borderRadius: 8,
    borderColor: 'black',
    width: '100%',
    height: 60,
    marginBottom: 20,
    paddingLeft: '10%',
    paddingRight: '10%',
    textAlign: 'left',
    fontSize: 18,
    backgroundColor: 'white',
  },
  image: {
    width: 25, 
    height: 25, 
    position: 'absolute', 
    left: '84%', 
    top: '23%', 
    resizeMode: 
    'contain', 
    transform: [{ rotate: '30deg' }],
    opacity: 0.8
  },
})

//Export the component so we can import and use it in other files
export default CustomTextInput;