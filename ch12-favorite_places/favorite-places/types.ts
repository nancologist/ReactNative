import {GestureResponderEvent} from "react-native";
import {Ionicons} from "@expo/vector-icons";

export type PressEventHandler = (event: GestureResponderEvent) => void;
export type Icon = keyof typeof Ionicons.glyphMap;