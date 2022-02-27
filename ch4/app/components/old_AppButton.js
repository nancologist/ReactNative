// import {View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform} from 'react-native';
// import Color from '../constants/color';
//
// const AppButton = (props) => {
//   let BtnCmp = TouchableOpacity
//
//   if (Platform.OS === 'android' && Platform.Version >= 21) {
//     BtnCmp = TouchableNativeFeedback
//   }
//
//   return (
//     <View style={styles.btnContainer}>
//       <BtnCmp activeOpacity={0.6} onPress={props.onPress}>
//         <View style={styles.button}>
//           <Text style={styles.buttonText}>{props.children}</Text>
//         </View>
//       </BtnCmp>
//     </View>
//   );
// };
//
// const RADIUS = 25
//
// const styles = StyleSheet.create({
//   btnContainer: {
//     borderRadius: RADIUS,
//     overflow: 'hidden'
//   },
//   button: {
//     backgroundColor: Color.primary,
//     borderRadius: RADIUS,
//     paddingVertical: 12,
//     paddingHorizontal: 30
//   },
//   buttonText: {
//     color: 'white',
//     fontFamily: 'open-sans'
//   }
// });
//
// export default AppButton;
