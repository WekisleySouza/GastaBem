import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

import Pork_icon from "@/src/assets/icons/pork_icon.svg"
import colors from "@/src/constants/colors";

type ItemProps = {
    onPress: () => void
}

export default function ItemComponent({ onPress } : ItemProps){
    return (
        <TouchableOpacity style={styles.container_shadow} onPress={onPress} >
            <View style={styles.container} >
                <View style={styles.iconContainer} >
                    <View style={styles.iconCircleContainer}>
                        <Pork_icon height={50} width={50} color={colors.color2} />
                    </View>
                </View>
                <View style={styles.infoContainer} >
                    <View style={styles.nameContainer} >
                        <Text style={styles.nameText} >
                            Aspirina
                        </Text>
                    </View>
                    <View style={styles.infoCategoryContainer} >
                        <View style={styles.categoryContainer} >
                            <Text style={styles.infoText} >
                                Saúde
                            </Text>
                        </View>
                        <View style={styles.priceContainer} >
                            <Text style={styles.infoText} >
                                Total: 255.25
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}