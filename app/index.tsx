import {View, Text, TouchableOpacity, Alert, Pressable} from 'react-native';
import {Link} from 'expo-router';

import "../global.css"

export default function index() {
    return (
        <View className="bg-red-100 w-full h-full">
            <Link href="/second" asChild>
                <Pressable className="bg-white m-auto mt-50 p-30 rounded-lg">
                    <Text className="not-italic font-light text-center text-slate-500 p-20  ">Iniciar</Text>
                </Pressable>
            </Link>
        </View>  
    )
}