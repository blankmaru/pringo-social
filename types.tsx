export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export interface ICirclePicture {
  uri: string,
  size?: number
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