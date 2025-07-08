import { StyleProp, TouchableOpacity, View, ViewStyle } from "react-native"
import styles from "./styles"

import Plus_icon from "@/src/assets/icons/plus_icon.svg"
import colors from "@/src/constants/colors";

type IconProps = {
    iconColor?: string;
    iconHeigh?: Int32Array;
    iconWidth?: Int32Array;
}

type ButtonProps = {
    containerStyle?: StyleProp<ViewStyle>;
    iconProps?: IconProps;
    onPress: () => void;
}

export default function FloatButton({ containerStyle, iconProps, onPress }: ButtonProps) {
    return (
        <TouchableOpacity style={[styles.container, containerStyle]} onPress={onPress} >
            <Plus_icon height={35} width={35} color={colors.color4} { ...iconProps } />
        </TouchableOpacity>
    )
}