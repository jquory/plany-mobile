import React from 'react';
import {View} from "react-native";
import {Icon} from "@rneui/themed";

function CustomIcon(props) {

    const {name, size, color, background, type} = props;

    return (
        <View className={`items-center text-center p-2.5 rounded-full ${background} text-white`}>
            <Icon name={name} size={size} color={color} type={type}/>
        </View>
    );
}

export default CustomIcon;