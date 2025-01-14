import {View, Pressable, Text} from 'react-native';
import {Link} from 'expo-router';

export default function SecondPage() {
    return (
        <View className="bg-blue-100 w-full h-full">
            <Link href="/" asChild>
                <Pressable className="bg-white m-auto mt-50 p-30 rounded-lg">
                    <Text className="not-italic font-light text-center text-slate-500 p-20  ">Voltar</Text>
                </Pressable>
            </Link>
        </View>    
    )
}