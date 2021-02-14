import React, {useState} from 'react'
import {TouchableOpacity, View} from "react-native";
import ProfilePicture from "../../ProfilePicture";
import styles from "./styles";

import { Input } from '@ui-kitten/components';
import {MaterialCommunityIcons} from "@expo/vector-icons";

const CommentInput = () => {
    const [value, setValue] = useState<string>('')

    return (
        <View style={styles.container}>
            <ProfilePicture uri={'https://www.out.com/sites/default/files/2017/03/10/maggie-lindemann.jpg'} />
            <View style={styles.inputContainer}>
                <Input
                    placeholder='Add a comment...'
                    value={value}
                    onChangeText={nextValue => setValue(nextValue)}
                    style={{minWidth: 280}}
                />
            </View>
            <TouchableOpacity>
                <MaterialCommunityIcons name={"send"} size={30} color={"white"} style={{padding: 10}} />
            </TouchableOpacity>
        </View>
    )
}

export default  CommentInput