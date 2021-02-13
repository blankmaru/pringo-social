import React from 'react';
import { Image, View } from 'react-native';
import styles from './styles';
import {ICirclePicture} from '../../types'

const Story = ({ uri, size = 70 }: ICirclePicture) => (
    <View style={[styles.container, { width: size + 6, height: size + 6 }]}>
        <Image
            source={{ uri }}
            style={[styles.image, { width: size, height: size }]}
        />
    </View>
)

export default Story;