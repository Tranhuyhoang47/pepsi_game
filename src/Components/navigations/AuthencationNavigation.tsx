import React from "react";
import SignIn from '../screens/Sign_in';
import SignUp from '../screens/Sign_up';

import {createStackNavigator} from '@react-navigation/stack';
import App from "../../../App";

const Stack = createStackNavigator();

export const AuthencationNavigator: React.FC = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Sign_up" component={SignUp}/>
            <Stack.Screen name="Sign_in" component={SignIn}/>
        </Stack.Navigator>
    );
};