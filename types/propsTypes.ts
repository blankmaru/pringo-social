export type IComment = {
    user: IUser,
    text: string
}

export type IUser = {
    id: string,
    image: string,
    name: string
}

export type IPost = {
    user: IUser,
    postImg: string,
    likesCount: Array<IUser>,
    comments: Array<IComment>,
    description: string,
    postedAt: any
}

export type ISocialActionSectionProps = {
    post: IPost
}

export type IPostProps = {
    post: IPost
}