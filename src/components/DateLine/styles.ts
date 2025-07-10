import colors from "@/src/constants/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        height: 40,
        width: "90%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    lineContainer: {
        height: "100%",
        width: "32.5%",
        justifyContent: "center",
        alignItems: "center",
    },
    line: {
        backgroundColor: colors.color2,
        height: 1,
        width: "70%",
    },
    dateContainer: {
        height: "100%",
        width: "35%",
        justifyContent: "center",
        alignItems: "center",
    },
    dateText: {
        color: colors.color2,
        textTransform: "uppercase",
        fontSize: 13,
        fontWeight: "400",
    },
})