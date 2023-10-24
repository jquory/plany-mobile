import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Home, Notifications, Profile} from "./screens";
import CustomIcon from "./components/CustomIcon";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const MyTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({focused}) => (
                    <CustomIcon
                        name="home"
                        type="octicon"
                        color={focused ? 'white' : 'black'}
                        size={20}
                        background={focused ? 'bg-black' : 'bg-transparent'}
                    />
                ),
                tabBarStyle: {
                    borderTopWidth: 0,
                },
                tabBarShowLabel: false,
                tabBarActiveTintColor: "white",
            }}/>
            <Tab.Screen name="Plan" component={Home} options={{
                tabBarIcon: ({focused}) => (
                    <CustomIcon
                        name="rocket"
                        type="octicon"
                        color={focused ? 'white' : 'black'}
                        size={20}
                        background={focused ? 'bg-black' : 'bg-transparent'}
                    />
                ),
                tabBarStyle: {
                    borderTopWidth: 0,
                },
                tabBarShowLabel: false,
                tabBarActiveTintColor: "white",
            }}/>
            <Tab.Screen name="Blog" component={Home} options={{
                tabBarIcon: ({focused}) => (
                    <CustomIcon
                        name="book"
                        type="octicon"
                        color={focused ? 'white' : 'black'}
                        size={20}
                        background={focused ? 'bg-black' : 'bg-transparent'}
                    />
                ),
                tabBarStyle: {
                    borderTopWidth: 0,
                },
                tabBarShowLabel: false,
                tabBarActiveTintColor: "white",
            }}/>
            <Tab.Screen name="Achivements" component={Home} options={{
                tabBarIcon: ({focused}) => (
                    <CustomIcon
                        name="flame"
                        type="octicon"
                        color={focused ? 'white' : 'black'}
                        size={20}
                        background={focused ? 'bg-black' : 'bg-transparent'}
                    />
                ),
                tabBarStyle: {
                    borderTopWidth: 0,
                },
                tabBarShowLabel: false,
                tabBarActiveTintColor: "white",
            }}/>
        </Tab.Navigator>
    )
}


export default function App() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Stacks' component={MyTabs} options={{headerShown: false}}/>
                <Stack.Screen name='Profile' component={Profile}/>
                <Stack.Screen name='Notifications' component={Notifications}/>
            </Stack.Navigator>
            {/*<MyTabs/>*/}
        </NavigationContainer>
    );
}
