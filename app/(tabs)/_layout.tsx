import { Tabs } from 'expo-router';
import Header from '@/src/components/Header'
import colors from '@/src/constants/colors';

import Home_icon from "@/src/assets/icons/home_icon.svg"
import Income_icon from "@/src/assets/icons/income_icon.svg"
import Outcome_icon from "@/src/assets/icons/outcome_icon.svg"

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        header: () => <Header />,
        tabBarStyle: {
          backgroundColor: colors.color4,
          width: "90%",
          height: 80,
          marginBottom: 40,
          marginHorizontal: 20,
          borderRadius: 20,
          paddingTop: 10,
        }
      }}
    >
        <Tabs.Screen name='income' 
          options={{ 
            tabBarIcon: ({ focused }) => <Income_icon height={36} width={36} color={focused ? colors.color6 : colors.color1}/>
          }}
        />
        <Tabs.Screen name='home'
          options={{
            tabBarIcon: ({ focused }) => <Home_icon height={30} width={30} color={focused ? colors.color6 : colors.color1}/>,
            tabBarStyle: {
              gap: 2
            }
          }}
        />
        <Tabs.Screen name='outcome'
          options={{ 
            tabBarIcon: ({ focused }) => <Outcome_icon height={36} width={36} color={focused ? colors.color6 : colors.color1}/> 
          }}
        />
    </Tabs>
  );
}