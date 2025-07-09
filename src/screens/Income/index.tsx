import FloatButton from "@/src/components/FloatButton";
import { View } from "react-native";
import styles from "./styles";
import ItemComponent from "@/src/components/ItemComponent";


export default function Income(){

    const handleFloatButton = () => {
        console.log("Float Button")
    }

    const handleClickItem = () => {
        console.log("Item Button")
    }
    
    return (
        <View style={styles.container} >
            <ItemComponent onPress={handleClickItem} />
            <FloatButton onPress={handleFloatButton} />
        </View>
    );
}