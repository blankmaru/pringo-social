import React, {FC, useEffect, useState} from 'react'
import {FlatList} from "react-native";
import {posts} from "../../data";
import Post from "./Post";
import {IPost} from "../../types/propsTypes";

const Feed = () => {
    const [postsData, setPostsData] = useState<Array<IPost>>([])

    useEffect(() => {

    }, [])

    return (
        <FlatList data={posts} renderItem={({item}) => <Post post={item} key={item.id} />} />
    )
}

export default Feed