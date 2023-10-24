import React from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import CustomIcon from "./CustomIcon";

const Header = (props) => {

    const {name, image, notificationCount, navigateToProfile, navigateToNotification} = props

    return (
        <View className='flex-row justify-between items-center'>
            <TouchableOpacity onPress={navigateToProfile}>
                <Image className='w-12 h-12 rounded-full' source={image}/>
            </TouchableOpacity>
            <Text className='font-bold text-black text-lg' style={{fontFamily: 'semiBold'}}>{name}</Text>
            <TouchableOpacity onPress={navigateToNotification}>
                <View>
                    <CustomIcon name="bell" type="octicon"/>
                    <View
                        className={`${notificationCount === 0 ? 'hidden' : 'absolute right-1 p-1 object-contain m-auto bg-red-500 rounded-full'}`}>
                        <Text className='text-[10px] text-white'>
                            {notificationCount}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default Header;