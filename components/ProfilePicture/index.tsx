import React from 'react';
import { Image, View } from 'react-native';
import styles from './styles';
import {IProfilePicture} from '../../types/types'

const ProfilePicture = ({ uri, size = 30 }: IProfilePicture) => (
    <View style={[styles.container, { width: size + 6, height: size + 6 }]}>
        <Image
            source={{ uri }}
            style={[styles.image, { width: size, height: size }]}
        />
    </View>
)

export default ProfilePicture;