import colors from "@/src/constants/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container_shadow: {
        backgroundColor: "rgba(0, 0, 0, 0.05)",
        height: 77,
        width: 352,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15
    },
    container: {
        backgroundColor: colors.color5,
        borderRadius: 10,
        flexDirection: "row",
        height: 75,
        width: 350,
    },
    iconContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    iconCircleContainer: {

    },
    infoContainer: {
        flex: 3,
    },
    nameContainer: {
        height: "55%",
        justifyContent: "flex-end",
    },
    nameText: {
        color: colors.color2,
        textTransform: "uppercase",
        fontSize: 16,
        fontWeight: "500",
    },
    infoCategoryContainer: {
        height: "45%",
        flexDirection: "row",
    },
    infoText: {
        color: colors.color2,
        textTransform: "uppercase",
        fontSize: 12,
        fontWeight: "500",
    },
    categoryContainer: {
        width: "50%",
        justifyContent: "flex-end",
        paddingBottom: 5,
    },
    priceContainer: {
        width: "50%",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 5,
    },
})