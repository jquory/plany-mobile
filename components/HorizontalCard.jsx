import React from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import {Icon} from "@rneui/themed";

const HorizontalCard = (props) => {

    const {header, badge, title, image, backgroundColor, textColor, badgeColor, footer, textFooter, bgFooter} = props

    return (
        <View className={`w-full rounded-3xl ${backgroundColor} p-3`}>
            <View className='flex-row justify-between items-center'>
                <Text className={`text-4xl ${textColor}`} style={{fontFamily: 'bold'}}>{header}</Text>
                {badgeColor === 'black' ? <View className='p-3 bg-black rounded-full'>
                    <Text className='text-white' style={{fontFamily: 'bold'}}>{badge}</Text>
                </View> : <View className='p-3 bg-white rounded-full'>
                    <Text className='text-black' style={{fontFamily: 'bold'}}>{badge}</Text>
                </View>}
            </View>
            <View className='flex-row justify-between'>
                <View className='flex-1'>
                    <Text className={`text-base ${textColor}`} style={{fontFamily: 'regular'}}>
                        {title}
                    </Text>
                    {footer === true ? <View className='mt-auto'>
                        <Text className={`text-sm ${textColor}`} style={{fontFamily: 'bold'}}>This week</Text>
                        <Text className='text-2xl'>
                            ••<Icon name='check-circle-fill' type='octicon'/>
                            <Text className='text-white'>••••</Text>
                        </Text>
                    </View> : <View className='mt-auto'>
                        <TouchableOpacity className={`${bgFooter} rounded-3xl p-2 w-3/4`}>
                            <Text className={`${textFooter} text-center`} style={{fontFamily: 'semiBold'}}>Click for
                                more</Text>
                        </TouchableOpacity>
                    </View>}
                </View>
                <View className='flex-1 w-28 h-28 m-auto'>
                    <Image source={image} className='mt-5 m-auto resize w-3/4 max-h-full'/>
                </View>
            </View>
        </View>
    );
};

export default HorizontalCard;