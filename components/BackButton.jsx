import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from "react-native";
import {Icon} from "@rneui/themed";

const BackButton = ({navigate, text}) => {
    return (
        <SafeAreaView>
            <TouchableOpacity onPress={navigate} className='text-left p-2 flex-row items-center'>
                <Icon name='chevron-left' type='octicon'/>
                <Text className='text-center flex-1 text-lg' style={{fontFamily: 'semiBold'}}>{text}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default BackButton;