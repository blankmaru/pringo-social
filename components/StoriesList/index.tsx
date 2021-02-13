import React from 'react'
import Story from "../Story";
import {FlatList, View} from "react-native";

const storiesData = [
    {
        id: '1',
        imgURI: 'https://assets.puzzlefactory.pl/puzzle/272/786/original.jpg',
        name: 'Alisa'
    },
    {
        id: '2',
        imgURI: 'https://s.yimg.com/ny/api/res/1.2/10rjG93HJQYV25vu.og4_Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTY1NC4wOA--/https://s.yimg.com/uu/api/res/1.2/qeTXXumQ..M3mKlYZ_yQxg--~B/aD0xMDIyO3c9MTAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/mmail.com.my/4b70c324bfc3b1edd2ce2bd1f8cc4ad4',
        name: 'Monica'
    },
    {
        id: '3',
        imgURI: 'https://i.pinimg.com/originals/bb/4c/6b/bb4c6bcdefc80ba4134c13704b62cbcb.jpg',
        name: 'Anna'
    },
    {
        id: '4',
        imgURI: 'https://bradleyrentals.net/wp-content/uploads/sites/5/2018/03/5685885-pretty-girl-images.jpg',
        name: 'Veronika'
    },
    {
        id: '5',
        imgURI: 'https://pbs.twimg.com/media/DwaEgqcWwAAvv0H.jpg',
        name: 'Anastasiya'
    },
]

const StoriesList = () => (
    <FlatList showsHorizontalScrollIndicator={false} data={storiesData} horizontal renderItem={({item}) => <Story uri={item.imgURI} name={item.name} key={item.id}/>}/>
)

export default StoriesList