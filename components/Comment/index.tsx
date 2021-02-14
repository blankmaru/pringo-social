import React from 'react'
import {View, Text, Dimensions} from "react-native";
import ProfilePicture from "../ProfilePicture";
import {TUser} from "../../types/propsTypes";
import {Divider} from "@ui-kitten/components";
import styles from "./styles";
import moment from 'moment'

type TCommentProps = {
    img: string,
    user: TUser,
    content: string,
    date: any
}

const Comment = (props : TCommentProps) => {
    const width = Dimensions.get('window').width

    return (
        <View style={{width: width, marginVertical: 10}}>
            <View style={{flexDirection: 'row'}}>
                <ProfilePicture uri={props.img} size={40} />
                <View style={styles.textContainer}>
                    <Text style={{fontWeight: 'bold', color: 'white'}}>{props.user.name+': '}</Text>
                    <Text style={{color: 'white'}}>{props.content}</Text>
                </View>

            </View>
            <View style={{ width: '100%', flexDirection: 'row'}}>
                <Text style={{color: 'gray', padding: 10}}>{moment(props.date).fromNow()}</Text>
                <Text style={{color: 'gray', padding: 10}}>likes</Text>
                <Text style={{color: 'gray', padding: 10}}>Reply</Text>
            </View>
            <Divider style={{backgroundColor: '#454545'}} />
        </View>
    )
}

export default Comment