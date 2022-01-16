import React from "react";
import SignIn from '../screens/Sign_in';
import SignUp from '../screens/Sign_up';
import commit from "../screens/commit";
import OtpNotification from "./OTP/OtpNotification";

import {createStackNavigator} from '@react-navigation/stack';
import App from "../../../App";

const Stack = createStackNavigator();

export const AuthencationNavigator: React.FC = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Sign_up" component={SignUp} options={{title: 'Sign Up'}}/>
            <Stack.Screen name="Sign_in" component={SignIn} options={{title: 'Sign In'}}/>
            <Stack.Screen name="Commit" component={commit} options={{title: 'Thể lệ chương trình'}}/>
            <Stack.Screen name="OtpNotification" component={OtpNotification}/>
        </Stack.Navigator>
    );
};