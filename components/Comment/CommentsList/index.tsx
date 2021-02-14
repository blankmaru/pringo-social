import React, {useState} from "react";
import {FlatList} from "react-native";
import Comment from "../index";

const comments = [
    {
        id: 'comment1',
        img: 'https://i.pinimg.com/originals/bb/4c/6b/bb4c6bcdefc80ba4134c13704b62cbcb.jpg',
        content: 'Most popular comment in this system!',
        user: {
            id: '1',
            name: 'Vika',
            image: 'https://i.pinimg.com/originals/bb/4c/6b/bb4c6bcdefc80ba4134c13704b62cbcb.jpg'
        },
        date: 1613309681570
    },
    {
        id: 'comment2',
        img: 'https://ae01.alicdn.com/kf/UTB8dPTNQGrFXKJk43Ovq6ybnpXaC/Women-Punk-Dress-Black-Goth-Dress-Harajuku-Gothic-Girl-Sexy-Hollow-Mesh-Splice-Dresses-Dark-Grunge.jpg',
        content: 'Not popular comment in this system!',
        user: {
            id: '2',
            name: 'Elona',
            image: 'https://i.pinimg.com/originals/bb/4c/6b/bb4c6bcdefc80ba4134c13704b62cbcb.jpg'
        },
        date: 1613309682070
    },
    {
        id: 'comment3',
        img: 'https://ae01.alicdn.com/kf/UTB8dPTNQGrFXKJk43Ovq6ybnpXaC/Women-Punk-Dress-Black-Goth-Dress-Harajuku-Gothic-Girl-Sexy-Hollow-Mesh-Splice-Dresses-Dark-Grunge.jpg',
        content: 'Not popular comment in this system!',
        user: {
            id: '2',
            name: 'Elona',
            image: 'https://i.pinimg.com/originals/bb/4c/6b/bb4c6bcdefc80ba4134c13704b62cbcb.jpg'
        },
        date: 1613309682070
    },
    {
        id: 'comment4',
        img: 'https://ae01.alicdn.com/kf/UTB8dPTNQGrFXKJk43Ovq6ybnpXaC/Women-Punk-Dress-Black-Goth-Dress-Harajuku-Gothic-Girl-Sexy-Hollow-Mesh-Splice-Dresses-Dark-Grunge.jpg',
        content: 'Not popular comment in this system!',
        user: {
            id: '2',
            name: 'Elona',
            image: 'https://i.pinimg.com/originals/bb/4c/6b/bb4c6bcdefc80ba4134c13704b62cbcb.jpg'
        },
        date: 1613309682070
    },
    {
        id: 'comment5',
        img: 'https://ae01.alicdn.com/kf/UTB8dPTNQGrFXKJk43Ovq6ybnpXaC/Women-Punk-Dress-Black-Goth-Dress-Harajuku-Gothic-Girl-Sexy-Hollow-Mesh-Splice-Dresses-Dark-Grunge.jpg',
        content: 'Not popular comment in this system!',
        user: {
            id: '2',
            name: 'Elona',
            image: 'https://i.pinimg.com/originals/bb/4c/6b/bb4c6bcdefc80ba4134c13704b62cbcb.jpg'
        },
        date: 1613309682070
    },
    {
        id: 'comment5',
        img: 'https://ae01.alicdn.com/kf/UTB8dPTNQGrFXKJk43Ovq6ybnpXaC/Women-Punk-Dress-Black-Goth-Dress-Harajuku-Gothic-Girl-Sexy-Hollow-Mesh-Splice-Dresses-Dark-Grunge.jpg',
        content: 'Not popular comment in this system!',
        user: {
            id: '2',
            name: 'Elona',
            image: 'https://i.pinimg.com/originals/bb/4c/6b/bb4c6bcdefc80ba4134c13704b62cbcb.jpg'
        },
        date: 1613309682070
    }
]

const CommentsList = () => {
    const [stories, setStories] = useState<Array<object>>([])

    return (
        <FlatList data={comments}
                  renderItem={({item}) => <Comment key={item.id} img={item.img} content={item.content} user={item.user}
                                                   date={item.date}/>}/>
    )
}

export default CommentsList