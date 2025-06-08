import { Redirect, Tabs } from 'expo-router';
import { useGlobalStore } from '../../store/useSharedGlobalState';
import { useEffect, useState } from 'react';
import { Colors } from '../../styles';
import { Icon } from '../../components';
import { getGenres } from '../../services';

export default function AppLayout() {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const { user, token, setGlobalGenres } = useGlobalStore();

    useEffect(() => {
        setIsUserLoggedIn(Boolean(user) && Boolean(token));
    }, [user, token]);

    useEffect(() => {
        (async () => {
            try {
                const resGetGenres = await getGenres();

                if (resGetGenres.genres) {
                    setGlobalGenres(resGetGenres.genres);
                }
            } catch (error) {}
        })();
    }, []);

    if (!isUserLoggedIn) {
        return <Redirect href="/authStack/signin" />;
    }

    //= =================================================================================
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors.primary,
                tabBarInactiveTintColor: Colors.grey,
                sceneStyle: {
                    backgroundColor: Colors.background,
                    flex: 1,
                },
                tabBarStyle: {
                    backgroundColor: Colors.background,
                    borderTopWidth: 0,
                    paddingBottom: 0,
                },
                headerShown: false,
            }}>
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        <Icon
                            size={28}
                            name={focused ? 'home-sharp' : 'home-outline'}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    title: 'Procurar',
                    tabBarIcon: ({ color, focused }) => (
                        <Icon
                            size={28}
                            name={focused ? 'search-sharp' : 'search-outline'}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color, focused }) => (
                        <Icon
                            size={28}
                            name={focused ? 'person-sharp' : 'person-outline'}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
