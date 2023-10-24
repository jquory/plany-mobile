import React from 'react';
import {Icon} from "@rneui/themed";
import {Text, TouchableOpacity} from "react-native";

const MainButton = (props) => {

    const {title, navigate, icon} = props

    return (
        <TouchableOpacity onPress={navigate}
                          className='mt-5 bg-black p-4 rounded-full flex-row justify-center items-center'>
            <Icon name={icon} type='octicon' color='white'/>
            <Text className='text-white text-center font-semibold ml-2' style={{fontFamily: 'semiBold'}}>{title}</Text>
        </TouchableOpacity>
    );
};

export default MainButton;