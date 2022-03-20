import {Text, View, StyleSheet, Switch, Platform} from 'react-native';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import AppHeaderButton from "../components/AppHeaderButton";
import {useState, useEffect, useCallback} from "react";
import Color from "../constants/Color";
import {StackNavigationProp} from "react-navigation-stack/lib/typescript/src/vendor/types";
import {NavigationStackProp} from "react-navigation-stack";
import {NavigationStackScreenProps} from "react-navigation-stack/lib/typescript/src/types";

const FilterSwitch = (props: {
  label: string;
  active: boolean;
  onChange: (value: boolean) => void
}) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        value={props.active}
        onValueChange={props.onChange}
        trackColor={{
          true: Color.primary
        }}
        thumbColor={ Platform.OS === 'android' ? Color.primary : '' }
      />
    </View>
  )
}

const FiltersScreen = (props: NavigationStackScreenProps) => {
  const {navigation} = props;

  const [isGlutenFree, setIsGlutenFree] = useState(false)
  const [isLactoseFree, setIsLactoseFree] = useState(false)
  const [isVegetarian, setIsVegetarian] = useState(false)
  const [isVegan, setIsVegan] = useState(false)

  const saveFilters = useCallback(() => {
    const appliedFilters = {isGlutenFree, isLactoseFree, isVegetarian, isVegan}
    console.log(appliedFilters)
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian])

  useEffect(() => {
    navigation.setParams({ saveThem: saveFilters })
  }, [saveFilters])

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        label={'Gluten-free'}
        active={isGlutenFree}
        onChange={newVal => { setIsGlutenFree(newVal) }}
      />
      <FilterSwitch
        label={'Lactose-free'}
        active={isLactoseFree}
        onChange={newVal => { setIsLactoseFree(newVal) }}
      />
      <FilterSwitch
        label={'Vegetarian'}
        active={isVegetarian}
        onChange={newVal => { setIsVegetarian(newVal) }}
      />
      <FilterSwitch
        label={'Vegan'}
        active={isVegan}
        onChange={newVal => { setIsVegan(newVal) }}
      />
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
    },

    headerRight: () => {
      const onSave = () => {
        const saveFiltersFn = navData.navigation.getParam('saveThem');
        saveFiltersFn()
      };

      return (
        <HeaderButtons HeaderButtonComponent={AppHeaderButton}>
          <Item
            title={'Save'}
            iconName={'ios-save'}
            onPress={onSave}
          />
        </HeaderButtons>
      )
    }
  }
}

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    flex: 1
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center'
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 15
  }
});

export default FiltersScreen;
