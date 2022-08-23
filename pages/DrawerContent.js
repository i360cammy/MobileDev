import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Drawer } from 'react-native-paper';
import {  DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { AuthContext } from '../components/context';

export default function DrawerContent(props) {

    const {signOut} = React.useContext(AuthContext);

    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                <Drawer.Section style={styles.topSection}>
                    <DrawerItem label='Home' onPress={() => {props.navigation.navigate('Home')}}/>
                </Drawer.Section>  
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomSection}>
                <DrawerItem style={styles.signOutLabel} label='Sign Out' onPress={() => {signOut()}}/>
            </Drawer.Section>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topSection: {
        marginTop: 15
    },
    bottomSection: {
        marginBottom: 15,
        borderTopWidth: 1,
        borderTopColor: '#f4f4f4'
    },
    signOutLabel: {
        marginLeft: 20
    }

})