import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

interface IContentPostProps {
    imageUri: string,
}

const Content = ({imageUri}: IContentPostProps) => (<Image source={{uri: imageUri}} style={styles.image} />)

export default Content;