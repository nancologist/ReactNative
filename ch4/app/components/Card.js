import {View, StyleSheet} from 'react-native';

const Card = props => {
  return (
    <View
      style={{
        ...styles.card,
        ...props.style
      }}
    >
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6
  }
});

export default Card;
