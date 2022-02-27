import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import Color from '../constants/color';

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    backgroundColor: Platform.OS === 'android' ? Color.primary : 'white',
    borderBottomColor: Platform.OS === 'ios' ? '#ccc' : 'transparent',
    borderBottomWidth: Platform.OS === 'ios' ? 1 : 0,
    height: 90,
    justifyContent: 'center',
    paddingTop: 36,
    width: '100%',
  },
  headerTitle: {
    color: Platform.OS === 'ios' ? Color.primary : 'white',
    fontSize: 18,
    fontFamily: 'open-sans-bold'
  }
});

export default Header;
