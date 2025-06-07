import { Tabs } from 'expo-router';
import { Icon } from '../../../components';
import { Colors } from '../../../styles';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: Colors.primary }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => (
                        <Icon size={28} name="home" color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Perfil',
                    tabBarIcon: ({ color }) => (
                        <Icon size={28} name="person" color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
