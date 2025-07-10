import { FlatList } from "react-native";
import ItemComponent from '@/src/components/ItemComponent';

type Item = {
  name: string;
  category: string;
  price: number;
  date: string;
};

type PrincipalItemsListProps = {
  itemList: Item[]; // Corrigido: array de itens
  onPress: (item: Item) => void; // Passa o item clicado
};



export default function PrincipalItemsList({ itemList, onPress }: PrincipalItemsListProps) {
  return (

    // <DateLine dateString="12 de março" />

    <FlatList
      data={itemList}
      keyExtractor={( _ , index) => index.toString()}
      renderItem={({ item }) => (
        <ItemComponent
          name={item.name}
          category={item.category}
          price={item.price}
          onPress={() => onPress(item)}
        />
      )}
    />
  )
}
