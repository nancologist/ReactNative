import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import Color from '../constants/color';

const Header = props => {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid
        })
      }}
    >
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  headerBase: {
    alignItems: 'center',
    height: 90,
    justifyContent: 'center',
    paddingTop: 36,
    width: '100%',
  },
  headerIOS: {
    backgroundColor: 'white',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  },
  headerAndroid: {
    backgroundColor: Color.primary
  },
  headerTitle: {
    color: Platform.OS === 'ios' ? Color.primary : 'white',
    fontSize: 18,
    fontFamily: 'open-sans-bold'
  }
});

export default Header;
