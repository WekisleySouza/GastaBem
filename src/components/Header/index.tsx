import { View } from "react-native";
import styles from "./styles";

import Menu_icon from "@/src/assets/icons/menu_icon.svg"
import colors from "@/src/constants/colors";

export default function Header(){
    return (
        <View style={styles.container} >
            <View style={styles.menu_container}>
                <Menu_icon width={35} height={70} color={colors.color5} />
            </View>
            <View style={styles.perfil_container} >

            </View>
        </View>
    );
}