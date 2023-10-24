import React, {useLayoutEffect} from 'react';
import {ScrollView} from "react-native";
import {useFonts} from "expo-font";
import {BackButton} from "../components";

const Profile = ({route, navigation}) => {

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
        </ScrollView>
    );
};

export default Profile;