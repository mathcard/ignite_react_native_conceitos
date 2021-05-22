import React from 'react';
import { Image, View, Text, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import lightIcon from '../assets/icons/lampada.png';

interface DarkProps {
  dark: boolean;
  onPress: () => void;
}

export function Header({ dark, onPress } : DarkProps) {    
  return (
    <View style={dark ? styles.headerDark : styles.header}>
     
      <Text style={styles.headerText}>to.</Text>
      <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}        
        onPress={()=> {onPress()}}
        
      >
        <Image source={lightIcon} style={styles.lightIcon}/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: '#273FAD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerDark: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: '#282B5A',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },
  headerTextDark: {
    fontSize: 24,
    color: '#E1E1E6',
    fontFamily: 'Poppins-Regular',
  },
  lightIcon: {
    width: 30,
    height: 30,
    backgroundColor: '#fff',
    borderRadius: 5,        
    marginTop: 40,
    alignItems: 'flex-end'

  }
});
