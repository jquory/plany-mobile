import React, {useLayoutEffect} from 'react';
import {Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {Person, Target, Trophy} from "../assets";
import {Icon} from "@rneui/themed";
import {Header, HorizontalCard, MainButton, VerticalCard} from "../components";
import Swiper from 'react-native-swiper';
import {useFonts} from "expo-font";

const Home = ({navigation}) => {

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
        <ScrollView>
            <View className='px-4 bg-white'>
                <SafeAreaView>
                    <Header name='Amanda' image={Person} notificationCount={10}
                            navigateToProfile={() => navigation.navigate('Profile', {
                                name: 'Amanda',
                                age: 20,
                                image: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436180.jpg?w=1380&t=st=1698153128~exp=1698153728~hmac=539f8100caee2b672ded1f4822f21553541f07a69e6a3a8bd234b8500f1cdf3f'
                            })}
                            navigateToNotification={() => navigation.navigate('Notifications')}/>
                </SafeAreaView>


                {/* Jumbotron */}

                <View className='my-2'>
                    <Text className='text-center mt-2 font-semibold text-base' style={{fontFamily: 'semiBold'}}>What a
                        good
                        night, right Amanda?</Text>
                </View>
                <View className='flex-row justify-center items-center gap-2 mt-2'>
                    <View className='py-5 px-12 rounded-3xl border border-gray-200'>
                        <View className='flex-row justify-center items-center gap-2'>
                            <Icon name='zap' type='octicon' size={15} color='red'/>
                            <Text className='font-medium'>8</Text>
                        </View>
                        <View className='text-center mt-2 w-full'>
                            <Text className='text-lg font-medium text-center m-auto'
                                  style={{fontFamily: 'semiBold'}}>Ongoing</Text>
                        </View>
                    </View>
                    <View className='py-5 px-12 rounded-3xl border border-gray-200'>
                        <View className='flex-row gap-2 text-center justify-center items-center'>
                            <Icon name='issue-closed' type='octicon' size={15} color='blue'/>
                            <Text className='font-medium'>2</Text>
                        </View>
                        <View className='text-center mt-2'>
                            <Text className='text-lg font-medium' style={{fontFamily: 'semiBold'}}>Finished</Text>
                        </View>
                    </View>
                </View>
                <MainButton icon='plus-circle' title='Add Goals'/>

                {/* Achievements */}

                <View className='my-7'>
                    <TouchableOpacity className='flex-row items-center gap-2'>
                        <Text className='text-2xl' style={{fontFamily: 'semiBold'}}>Achievements</Text>
                        <Icon name='chevron-right' type='octicon'/>
                    </TouchableOpacity>
                    <View className='rounded-3xl p-5 bg-[#CCF349] mt-3'>
                        <View className='flex-row justify-between items-center'>
                            <Text className='text-4xl' style={{fontFamily: 'bold'}}>Keep it up!</Text>
                            <View className='p-3 bg-black rounded-full'>
                                <Text className='text-white' style={{fontFamily: 'bold'}}>Top 3</Text>
                            </View>
                        </View>
                        <View className='flex-row justify-between'>
                            <View className='flex-1'>
                                <Text className='text-base' style={{fontFamily: 'regular'}}>
                                    2 weeks of non-stop training
                                </Text>
                                <View className='mt-auto'>
                                    <Text className='text-sm' style={{fontFamily: 'bold'}}>This week</Text>
                                    <Text className='text-2xl'>
                                        ••<Icon name='check-circle-fill' type='octicon'/>
                                        <Text className='text-white'>••••</Text>
                                    </Text>

                                </View>
                            </View>
                            <View className='flex-1'>
                                <Image source={Trophy} className='w-32 h-28 mt-5'/>
                            </View>
                        </View>
                    </View>
                </View>


                {/* Tracking */}

                <View className='mb-7'>
                    <TouchableOpacity className='flex-row items-center gap-2'>
                        <Text className='text-2xl' style={{fontFamily: 'semiBold'}}>Tracking</Text>
                        <Icon name='chevron-right' type='octicon'/>
                    </TouchableOpacity>
                    <View className='flex-row mt-2 flex-wrap justify-between items-center'>
                        <VerticalCard icon='log' title='Finance Plan' body='Iphone 15 Pro'/>
                        <VerticalCard icon='zap' title='Diet Plan' body='Loss Weight 10kg'/>
                    </View>
                </View>


                {/* Pro Tips */}

                <View className='mb-7'>
                    <TouchableOpacity className='flex-row items-center gap-2'>
                        <Text className='text-2xl' style={{fontFamily: 'semiBold'}}>Blog</Text>
                        <Icon name='chevron-right' type='octicon'/>
                    </TouchableOpacity>
                    <Swiper className='h-52 gap-2 my-2'>
                        <View className='flex-1 items-center justify-center'>
                            <HorizontalCard header='Pro Tips!' badge='Trending' title='How to be body builder'
                                            image={Trophy}
                                            backgroundColor='bg-black' textColor='text-white' badgeColor='white'
                                            textFooter='text-black' bgFooter='bg-white'/>
                        </View>
                        <View className='flex-1 items-center justify-center'>
                            <HorizontalCard header='Pro Tips!' badge='Trending' title='How to be body builder'
                                            image={Target}
                                            backgroundColor='bg-[#AECCFF]' textColor='text-white' badgeColor='white'
                                            textFooter='text-black' bgFooter='bg-white'/>
                        </View>
                        <View className='flex-1 items-center justify-center'>
                            <HorizontalCard header='Pro Tips!' badge='Trending' title='How to be body builder'
                                            image={Trophy}
                                            backgroundColor='bg-[#CCF349]' textColor='text-black' badgeColor='black'
                                            textFooter='text-white' bgFooter='bg-black'/>
                        </View>
                    </Swiper>
                </View>
            </View>
        </ScrollView>
    );
};

export default Home;