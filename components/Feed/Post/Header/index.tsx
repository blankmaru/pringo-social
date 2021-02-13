import React from 'react';
import { View, Text } from 'react-native';
import ProfilePicture from '../../../ProfilePicture';
import styles from './styles';
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface IHeaderPostProps {
    imageUri: string,
    name: string
}

const Header = ({imageUri, name}: IHeaderPostProps) => (
    <View style={styles.container}>
        <View style={styles.left}>
            <ProfilePicture uri={imageUri} size={40} />
            <Text style={styles.name}>{name}</Text>
        </View>

        <View style={styles.right}>
            <MaterialCommunityIcons style={{color: 'white'}} name={"dots-vertical"} size={20} />
        </View>
    </View>
)

export default Header;