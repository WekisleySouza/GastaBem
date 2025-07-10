import FloatButton from "@/src/components/FloatButton";
import { View } from "react-native";
import styles from "./styles";
import ItemComponent from "@/src/components/ItemComponent";
import DateLine from "@/src/components/DateLine";


export default function Income(){

    const handleFloatButton = () => {
        console.log("Float Button")
    }

    const handleClickItem = () => {
        console.log("Item Button")
    }
    
    return (
        <View style={styles.container} >
            <DateLine dateString="12 de março" />
            <ItemComponent onPress={handleClickItem} />
            <FloatButton onPress={handleFloatButton} />
        </View>
    );
}