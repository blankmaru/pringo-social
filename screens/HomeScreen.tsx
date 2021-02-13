import * as React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import {Text, View} from '../components/Themed';
import Story from "../components/Story";
import StoriesList from "../components/StoriesList";
import Post from "../components/Feed/Post";
import {post} from "../data";
import Feed from "../components/Feed";

export default function HomeScreen() {
    return (
        <ScrollView style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
            <View style={{height: 100}}>
                <StoriesList/>
            </View>
            <View
                style={{
                    borderBottomColor: '#6e6e6e',
                    borderBottomWidth: 0.5,
                    marginTop: 5
                }}
            />
            <View style={{flex: 1}}>
                <Feed/>
            </View>
        </ScrollView>
    );
}
