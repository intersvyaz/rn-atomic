import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const baseWidth = width < height ? width : height;

const baseRadius = baseWidth > 500 ? 500 : baseWidth;

const getCircleDiagonal = diagonal => {
  return {
    borderRadius: diagonal / 2,
    width: diagonal,
    height: diagonal,
    marginRight: -diagonal / 4,
    marginLeft: diagonal / 4
  };
};

const scale = size => baseWidth / guidelineBaseWidth * size;
const verticalScale = size => baseWidth / guidelineBaseHeight * size;
const moderateScale = (size, factor = 0.5) => size + ( scale(size) - size ) * factor;

export {scale, verticalScale, moderateScale, baseRadius, getCircleDiagonal};