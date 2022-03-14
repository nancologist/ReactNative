import {Platform} from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from '@expo/vector-icons'

import Color from "../constants/Color";

const AppHeaderButton = (props: any) => {
  return (
    <HeaderButton
      {...props}
      color={Platform.OS === 'android' ? 'white' : Color.primary}
      IconComponent={Ionicons}
      iconSize={20}
    />
  )
};

export default AppHeaderButton;
