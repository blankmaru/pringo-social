import React from 'react';
import { Image, View, Text } from 'react-native';
import styles from './styles';
import { IStoryPicture } from '../../types/types'

const Story = ({ name, uri, size = 70 }: IStoryPicture) => (
    <View style={[styles.container, { width: size + 6, height: size + 6 }]}>
        <Image
            source={{ uri }}
            style={[styles.image, { width: size, height: size }]}
        />
        <Text style={{color: 'white', textAlign: 'center', fontSize: 12, marginTop: 1}}>{name}</Text>
    </View>
)

export default Story;