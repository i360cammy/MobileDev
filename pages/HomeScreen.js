import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import LogoImage from '../components/LogoImage';  

export default function({ navigation }) {
    return(
        <SafeAreaView style={styles.safeView}>
            <View style={styles.container}>
                <LogoImage />
                <Text style={styles.text}>Vet Clinic App</Text>
            </View>
            <View style={styles.iconContainer}>

                <TouchableOpacity>
                    <Image source={require('../assets/chat.png')} style={styles.icons}/>
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <Image source={require('../assets/calendar.png')} style={styles.icons}/>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={require('../assets/help.png')} style={styles.icons}/>
                </TouchableOpacity>                
                
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    safeView: {
        flex: 1
    },
    text: {
        fontSize: 50,
        paddingTop: 75
    },
    iconContainer: {
        flex: 2,
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    icons: {
        resizeMode: 'contain',
        width: 50,
        marginTop: 20
    }
})