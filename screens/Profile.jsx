import React, {useLayoutEffect} from 'react';
import {Image, ScrollView, Text, View} from "react-native";
import {useFonts} from "expo-font";
import {BackButton, MainButton} from "../components";
import {Icon} from "@rneui/themed";

const Profile = ({route, navigation}) => {

    const {name, age, image} = route.params

    const [fontLoaded] = useFonts({
        'regular': require('../assets/fonts/customFont.otf'),
        'semiBold': require('../assets/fonts/customSemiBold.otf'),
        'bold': require('../assets/fonts/customFontBold.otf')
    })

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, []);

    if (!fontLoaded) return null

    return (
        <ScrollView className='px-4 bg-white'>
            <BackButton navigate={() => navigation.goBack()} text='Profile'/>
            <View className='mt-7'>
                <Image source={{uri: image}} className='w-28 h-28 rounded-full m-auto'/>
                <Text className='text-center text-2xl' style={{fontFamily: 'semiBold'}}>{name}</Text>
                <Text className='text-center text-xs' style={{fontFamily: 'regular'}}>{age} years old</Text>
            </View>
            <View className='flex-row justify-center items-center gap-2 mt-2'>
                <View className='py-5 px-12 rounded-3xl border border-gray-200'>
                    <View className='flex-row justify-center items-center gap-2'>
                        <Icon name='people' type='octicon' size={15} color='red'/>
                        <Text className='font-medium'>8</Text>
                    </View>
                    <View className='text-center mt-2 w-full'>
                        <Text className='text-lg font-medium text-center m-auto'
                              style={{fontFamily: 'semiBold'}}>Friends</Text>
                    </View>
                </View>
                <View className='py-5 px-12 rounded-3xl border border-gray-200'>
                    <View className='flex-row gap-2 text-center justify-center items-center'>
                        <Icon name='issue-closed' type='octicon' size={15} color='blue'/>
                        <Text className='font-medium'>2</Text>
                    </View>
                    <View className='text-center mt-2'>
                        <Text className='text-lg font-medium' style={{fontFamily: 'semiBold'}}>Goals</Text>
                    </View>
                </View>
            </View>
            <MainButton icon='plus-circle' title='Add Friends'/>
            <MainButton icon='plus-circle' title='Add Goals'/>
        </ScrollView>
    );
};

export default Profile;