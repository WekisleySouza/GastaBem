import colors from "@/src/constants/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: colors.color4,
        height: 100,
        width: "100%",
        flexDirection: "row",
    },
    menu_container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingLeft: 20,
        paddingBottom: 0,
    },
    perfil_container: {
        flex: 1,
    }
})