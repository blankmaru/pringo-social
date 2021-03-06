import * as React from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';

import {Text, View} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

import CommentInput from "../../components/Comment/CommentInput";
import CommentsList from "../../components/Comment/CommentsList";

type ICommentsProps = {}

export default function CommentsScreen() {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialCommunityIcons style={styles.goBack} name={"arrow-left"} size={30} color={"white"}/>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <CommentsList/>
            </ScrollView>
            <View style={styles.inputContainer}>
                <CommentInput/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start'
    },
    goBack: {
        marginTop: 30,
        padding: 10
    },
    inputContainer: {
        width: '100%',
        minHeight: 100
    }
});