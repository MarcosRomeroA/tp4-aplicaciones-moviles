import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { HomeScreen } from "../screens/HomeScreen";
import { FilmsScreen } from "../screens/FilmsScreen";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {  
    return (
        <>
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} initial={true} />
            <Drawer.Screen name="Films" component={FilmsScreen} /> 
        </Drawer.Navigator>
        </>
    );
};