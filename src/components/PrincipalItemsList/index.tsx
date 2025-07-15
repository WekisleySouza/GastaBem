import { FlatList } from "react-native";
import ItemComponent from '@/src/components/ItemComponent';
import DateLine from "../DateLine";

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

  const itemListRefactor = (): Item[] => {
    const addedDates = new Set<string>();

    return itemList.reduce((acc: Item[], item: Item) => {
      if (!addedDates.has(item.date)) {
        acc.push({
          date: item.date,
          name: "",
          price: 0,
          category: ""
        });
        addedDates.add(item.date);
      }

      acc.push(item);
      return acc;
    }, []);
  };


  return (
    <FlatList
      data={itemListRefactor()}
      keyExtractor={( _ , index) => index.toString()}
      renderItem={({ item }) => {
        return item.name !== '' ? (
          <ItemComponent
            name={item.name}
            category={item.category}
            price={item.price}
            onPress={() => onPress(item)}
          />
        ) : (
          <DateLine dateString={item.date} />
        )
      }}
    />
  )
}
