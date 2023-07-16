import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";
import ExerciseList from "./screens/Exercise_List";
import TimerScreen from "./screens/TimerScreen";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function MyTabs(){
    const [selectedTab, setSelectedTab] = useState("exercise");

    return (
        <Tab.Navigator
            tabBarOptions={{
                labelStyle: { display: 'none' }, 
            }}
            initialRouteName="exercise"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === "exercise") {
                        iconName = "fitness-center";
                    } else if (route.name === "exercise") {
                        iconName = "airplanemode-off";
                    }

                    let iconColor = focused ? "orange" : "black";

                    return (
                        <MaterialIcons 
                            name={iconName} 
                            size={size} 
                            color={iconColor} 
                        />
                    );
                },
            })}
        >
            <Tab.Screen 
                name="exercise" 
                component={ExerciseList}
                options={{

                }}
            />
            <Tab.Screen 
                name="exercise2" 
                component={ExerciseList}
                options={{
                }}
            />
        </Tab.Navigator>
    );
}

export default function Navigation(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    );
}
