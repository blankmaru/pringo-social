export type TComment = {
    user: TUser,
    text: string
}

export type TUser = {
    id: string,
    image: string,
    name: string
}

export type TPost = {
    user: TUser,
    postImg: string,
    likesCount: Array<TUser>,
    comments: Array<TComment>,
    description: string,
    postedAt: any
}

export type ISocialActionSectionProps = {
    post: TPost
}

export type IPostProps = {
    post: TPost
}