import FloatButton from "@/src/components/FloatButton";
import PrincipalItemsList from "@/src/components/PrincipalItemsList";
import { expenses } from "@/src/mock/expenses";
import { View } from "react-native";
import styles from "./styles";

export default function Outcome(){

    const handleFloatButton = () => {
        console.log("Float Button")
    }

    const handleClickItem = () => {
        console.log("Item Button")
    }
    
    return (
        <View style={styles.container} >
            <PrincipalItemsList
                itemList={expenses}
                onPress={handleClickItem}
            />
            <FloatButton onPress={handleFloatButton} />
        </View>
    );
}