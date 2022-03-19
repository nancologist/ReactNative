import { Text, View, StyleSheet } from 'react-native';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import AppHeaderButton from "../components/AppHeaderButton";

const FiltersScreen = (props: {}) => {
  return (
    <View style={styles.screen}>
      <Text>The Favorites Screen</Text>
    </View>
  );
};

FiltersScreen.navigationOptions = (navData: any) => {
  return {
    headerTitle: 'Filter Meals',

    headerLeft: () => {
      const openDrawer = () => {
        navData.navigation.toggleDrawer()
      };

      return (
        <HeaderButtons HeaderButtonComponent={AppHeaderButton}>
          <Item
            title={'Menu'}
            iconName={'ios-menu'}
            onPress={openDrawer}
          />
        </HeaderButtons>
      )
    }
  }
}

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
});

export default FiltersScreen;
