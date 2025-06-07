import { Tabs } from 'expo-router';
import { Icon } from '../../../components';
import { Colors } from '../../../styles';
import { View } from 'react-native';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors.primary,
                tabBarInactiveTintColor: Colors.grey,
                headerShown: false,
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon size={28} name="home" color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon size={28} name="person" color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
