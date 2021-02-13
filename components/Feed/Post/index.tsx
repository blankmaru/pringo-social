import React from 'react';
import { View } from 'react-native';

import Header from './Header'
import Content from "./Content";
import SocialActionSection from "./SocialActionSection";

import {IPostProps} from '../../../types/propsTypes'

const Post = (props: IPostProps) => {
    const {
        post: {
            user: {
                id,
                image,
                name
            },
            postImg,
            likesCount,
            comments,
            description,
            postedAt
        },
    } = props;

    return (
        <View style={{marginBottom: 10}}>
            <Header imageUri={image} name={name} />
            <Content imageUri={postImg} />
            <SocialActionSection post={props.post} />
        </View>
    )
}

export default Post;