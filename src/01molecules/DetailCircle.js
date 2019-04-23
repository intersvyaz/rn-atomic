import * as React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import {CircleStyles, TextStyles, CIRCLE_COLOR} from '../styles/Base';
import {moderateScale, scale, baseWidth, getCircleDiagonal} from "../styles/Scaling";
import {Icon} from "react-native-elements";

export default class DetailCircle extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    showDetailScreen: PropTypes.func,
    visible: PropTypes.bool,
  };

  showHistory = () => {
    this.props.showDetailScreen();
  };

  render() {
    let diagonal = baseWidth * moderateScale(0.4);
    let detalizationDiagonal = diagonal / 3;
    if (this.props.visible) {
      return (
        <View
          style={[CircleStyles.detailStyle, {right: diagonal * 0.5}]}
        >
            <TouchableOpacity
              onPress={() => this.showHistory()}
            >
                <View style={{alignItems: "center"}}>
                    <View
                      style={[
                        getCircleDiagonal(detalizationDiagonal),
                        CircleStyles.detailCircle
                      ]}
                    >
                        <Icon
                          color={CIRCLE_COLOR.DETAIL_BLUE}
                          iconStyle={{marginTop: scale(2)}}
                          name={"format-list-bulleted"}
                          size={detalizationDiagonal * 3 / 4}
                          type={"material-community"}
                        />
                    </View>
                    <Text
                      allowFontScaling={false}
                      style={[TextStyles.defaultText, TextStyles.detailTitle]}
                    >
                        {this.props.title.toUpperCase()}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
      );
    } else {
      return <View/>;
    }
  }
}
