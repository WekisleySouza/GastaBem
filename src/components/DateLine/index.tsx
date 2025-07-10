import { Text, View } from "react-native";
import styles from "./styles";

type DateLineProps = {
    dateString: String
}

export default function DateLine({ dateString } : DateLineProps){
    return (
        <View style={styles.container}>
            <View style={styles.lineContainer}>
                <View style={styles.line} />
            </View>
            <View style={styles.dateContainer}>
                <Text style={styles.dateText}>
                    {dateString}
                </Text>
            </View>
            <View style={styles.lineContainer}>
                <View style={styles.line} />
            </View>
        </View>
    )
}