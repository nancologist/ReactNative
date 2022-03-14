import {StyleSheet, Text, TouchableOpacity, View, TouchableNativeFeedback, Platform} from "react-native";

type Props = {
  color: string
  onSelect: () => void;
  title: string;
};

const CategoryGridTile = (props: Props) => {

  let TouchableCmp: any = TouchableOpacity
  if (
    Platform.OS === 'android' &&
    Platform.Version >= 21 // REMEMBER: TouchableNativeFeedback is supported by Android Version >= 21
  ) {
    // Using another cmp for Android, so we don't have the weird Borders on pressing the tile!
    TouchableCmp = TouchableNativeFeedback
  }

  return (
    <View style={styles.gridItem}>
      <TouchableCmp onPress={props.onSelect} style={{ flex: 1 }}>
        <View
          style={{
              ...styles.container,
              backgroundColor: props.color
          }}
        >
          <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
        </View>
      </TouchableCmp>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // fill the whole space it gets
    borderRadius: 10,
    padding: 15,

    alignItems: 'flex-end',
    justifyContent: 'flex-end',

    // iOS
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
  },

  gridItem: {
    flex: 1,
    height: 150,
    margin: 15,

    // Fixing the Ripple Effect on Android by Pressing the Tile:
    borderRadius: 10,
    overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible',

    // Android
    elevation: 5
  },

  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 19,
    textAlign: 'right' // for Android
  }
})

export default CategoryGridTile
