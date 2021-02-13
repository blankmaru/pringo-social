import React from 'react';
import { Image, View } from 'react-native';
import styles from './styles';
import {ICirclePicture} from '../../types'

const ProfilePicture = ({ uri, size = 30 }: ICirclePicture) => (
    <View style={[styles.container, { width: size + 6, height: size + 6 }]}>
        <Image
            source={{ uri }}
            style={[styles.image, { width: size, height: size }]}
        />
    </View>
)

export default ProfilePicture;