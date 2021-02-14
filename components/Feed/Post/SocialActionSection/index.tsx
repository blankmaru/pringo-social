import React, {useEffect, useState} from 'react'
import {TouchableWithoutFeedback, View, Text} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import Colors from "../../../../constants/Colors";
import styles from './styles'
import {ISocialActionSectionProps} from "../../../../types/propsTypes";
import {useNavigation} from "@react-navigation/native";

const SocialActionSection = ({post}: ISocialActionSectionProps) => {
    const [isLiked, setIsLiked] = useState<boolean>(false)
    const [likesCount, setLikesCount] = useState<number>(0)

    const onLikePress = () => {
        const choice = isLiked ? -1 : 1
        setLikesCount(likesCount + choice)
        // set user as like in post query

        setIsLiked(!isLiked)
    }
    const navigation = useNavigation()

    const onPress = () => {
        navigation.navigate('Comments');
    }

    useEffect(() => {
        setLikesCount(post.likesCount.length)
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.iconsContainer}>
                <View style={styles.socialIconsContainer}>
                    <TouchableWithoutFeedback onPress={onLikePress}>
                        {isLiked
                            ? <MaterialCommunityIcons name={"heart"} size={30} color={Colors.like.color}/>
                            : <MaterialCommunityIcons name={"heart-outline"} size={30} color={Colors.dark.tint}/>}
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={onPress}>
                        <MaterialCommunityIcons name={"comment-outline"} size={30} color={Colors.dark.tint}/>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.bookmark}>
                    <MaterialCommunityIcons name={"bookmark-outline"} size={30} color={Colors.dark.tint}/>
                </View>
            </View>
            <View style={styles.description}>
                <Text style={styles.likes}>{post.likesCount.length} likes</Text>
                <View style={styles.postInfo}>
                    <Text style={styles.author}>{post.user.name.toLowerCase()+': '}</Text>
                    <Text style={styles.desc}>{post.description}</Text>
                </View>
            </View>
        </View>
    )
}

export default SocialActionSection