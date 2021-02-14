import React, {FC, useEffect, useState} from 'react'
import {FlatList} from "react-native";
import {posts} from "../../data";
import Post from "./Post";
import {TPost} from "../../types/propsTypes";

const Feed = () => {
    const [postsData, setPostsData] = useState<Array<TPost>>([])

    useEffect(() => {

    }, [])

    return (
        <FlatList data={posts} renderItem={({item}) => <Post post={item} key={item.id} />} />
    )
}

export default Feed