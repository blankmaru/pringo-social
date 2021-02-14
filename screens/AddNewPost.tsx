import * as React from 'react';
import {Dimensions, Platform, SafeAreaView, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker'
import { Text, View, Image } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {Button} from "@ui-kitten/components";
import {useEffect, useState} from "react";

export default function AddNewPost() {
    const [content, setContent] = useState<string>('')
    const [imageUrl, setImageUrl] = useState<string | undefined>(undefined)
    const navigation = useNavigation()

    const getPermissionAsync = async () => {
        if (Platform.OS !== 'web') {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    };

    useEffect(() => {
        getPermissionAsync()
    }, [])

    function onPostPress() {

    }

    const pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.cancelled) {
                setImageUrl(result.uri);
            }

            console.log(result);
        } catch (E) {
            console.log(E);
        }
    }

    function uploadImage() {

    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialCommunityIcons name={"close"} size={30} color={"white"} />
                </TouchableOpacity>
                <TouchableOpacity onPress={onPostPress}>
                    <Button status={"basic"} onPress={onPostPress}>
                        POST
                    </Button>
                </TouchableOpacity>
            </View>
            <View>
                <TextInput
                    value={content}
                    onChangeText={(value): void => setContent(value)}
                    multiline={true}
                    numberOfLines={3}
                    style={styles.descInput}
                    placeholder={"What's happening?"}
                    placeholderTextColor={"gray"}
                />
            </View>
            <View>
                <TouchableOpacity onPress={pickImage} style={{padding: 15}}>
                    <MaterialCommunityIcons name={"image"} size={30} color={"white"} />
                </TouchableOpacity>
                <Image source={{ uri: imageUrl }} style={styles.image} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start'
    },
    headerContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width
    },
    descInput: {
        height: 100,
        maxHeight: 300,
        fontSize: 20,
        padding: 15,
        color: 'white'
    }
});