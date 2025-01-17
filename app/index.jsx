import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Redirect,router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';
export default function App() {
  return(
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{height:'100%'}}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Image
            source = {images.logo}
            className="w-[130px] h-[84px]"
            resizeMode='contain'
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode='contain'
          />
          <View className='relative mt-5'>
            <Text className='text-3xl text-white font-bold text-center'>
              This your gym fees tracker {' '}
              <Text className="text-secondary-200">
                myGym
              </Text>
            </Text>
            <View style={{ alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: -5, left: '50%', transform: [{ translateX: -68 }] }}>
              <Image
                source={images.path}
                className='w-[136px] h-[15px]'
                resizeMode='contain'
              />
            </View>
          </View>
          <Text className='text-sm font-pregular text-gray-100 mt-7 text-center'>
            Our myGym app will help in tracking the fees. This will track a fees regularly
          </Text>
          <CustomButton
            title="Continue with Email"
            handlePress={()=>router.push('/sign-in')}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light'/>
    </SafeAreaView>
  )
}