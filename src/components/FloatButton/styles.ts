import colors from "@/src/constants/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: colors.color5,
        borderWidth: 1,
        borderRadius: 50,
        borderColor: colors.color4,
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 20,
        right: 20,
    }
})