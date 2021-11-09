import {Dimensions} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
export const SWidth = Dimensions.get('window').width;
export const SHeight = Dimensions.get('window').height;
export const MainColor = '#FC6011';
export const PrimaryFontCOlor = '#4A4B4d';
export const SecondaryFontColor = '#7C7D7E';
export const PlaceholderColor = '#B6B7B7';
export const getToken = AsyncStorage.getItem('token');
