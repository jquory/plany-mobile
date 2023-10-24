import React from 'react';
import {Text, View} from "react-native";
import {Icon} from "@rneui/themed";

const VerticalCard = (props) => {

    const {icon, title, body} = props

    return (
        <View className='p-3 m-1 w-1/2 h-40 flex-1 rounded-3xl border border-gray-200'>
            <View className='rounded-full w-1/3 p-3 bg-[#CCF349]'>
                <Icon name={icon} type='octicon' size={15}/>
            </View>
            <View className='mt-4 flex-col'>
                <Text className='text-sm mb-1' style={{fontFamily: 'regular'}}>
                    {title}
                </Text>
                <Text className='text-xl' style={{fontFamily: 'bold'}}>{body}</Text>
            </View>
        </View>
    )
}

export default VerticalCard;