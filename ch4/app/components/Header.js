import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
    backgroundColor: Color.primary,
    height: 90,
    justifyContent: 'center',
    paddingTop: 36,
    width: '100%',
  },
  headerTitle: {
    color: 'black'
  }
});

export default Header;
