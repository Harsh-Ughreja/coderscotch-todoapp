import{ Dimensions, Platform } from "react-native";

const {width, height} = Dimensions.get("window")
const guideLineBaseWidth = 375;
const guideLineBaseHeight = 812;

const horizontalScale = (size: number): number => (width / guideLineBaseWidth) * size;
const verticalScale = (size: number): number => (height / guideLineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5): number => (size + (horizontalScale(size) - size) + factor);

const globalMetrics = {
    isAndroid: Platform.OS === 'android',
    isIos: Platform.OS === 'ios',
    isPad: Platform.OS === 'ios' && Platform.isPad,
    isTV: Platform.isTV,  
};

const screenWidth = width, screenHeight = height;

export { globalMetrics, horizontalScale, verticalScale, moderateScale, screenWidth, screenHeight };
