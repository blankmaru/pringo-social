import { StyleSheet } from 'react-native'
import Colors from "../../../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        margin: 5,
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
    },
    socialIconsContainer: {
        flexDirection: 'row',
        width: 80,
        justifyContent: 'space-between'
    },
    bookmark: {

    },
    description: {

    },
    likes: {
        color: Colors.dark.tint,
        fontWeight: "bold",
        margin: 5,
        marginLeft: 5,
        padding: 0
    },
    author: {
        color: Colors.dark.tint,
        fontWeight: "bold",
        marginLeft: 5,
        padding: 0
    },
    postInfo: {
        flexDirection: 'row',
    },
    desc: {
        color: Colors.dark.tint
    }
});

export default styles;