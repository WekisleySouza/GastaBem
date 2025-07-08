import FloatButton from "@/src/components/FloatButton";
import { View } from "react-native";
import styles from "./styles";


export default function Income(){

    const handleFloatButton = () => {
        console.log("Teste")
    }
    
    return (
        <View style={styles.container} >
            <FloatButton onPress={handleFloatButton} />
        </View>
    );
}