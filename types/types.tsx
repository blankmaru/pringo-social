export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export interface IProfilePicture {
  uri: string,
  size?: number
}

export interface IStoryPicture {
  uri: string,
  size?: number,
  name: string
}

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  AddPicture: undefined;
  Likes: undefined;
  Profile: undefined;
};

export type HomeNavigatorParamList = {
  HomeScreen: undefined;
};

export type SearchNavigatorParamList = {
  SearchScreen: undefined;
};

export type AddPictureStackNavigatorParamList = {
  AddPictureScreen: undefined;
};

export type LikesStackNavigatorParamList = {
  LikesScreen: undefined;
};

export type ProfileStackNavigatorParamList = {
  ProfileScreen: undefined;
};