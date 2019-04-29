import * as React from 'react';
import {Text, View, TouchableOpacity, Alert} from 'react-native';
import PropTypes from 'prop-types';
import {CircleStyles, TextStyles, COLORS, CIRCLE_COLOR} from '../styles/Base';
import {Icon} from "react-native-elements";
import {moderateScale, scale, baseRadius, getCircleDiagonal} from "../styles/Scaling";

const NetworkStatusObject = {
  ok: {
    fontColor: COLORS.WHITE,
    backgroundColor: CIRCLE_COLOR.NETWORK_GREEN
  },
  ok_needpay: {
    fontColor: CIRCLE_COLOR.NETWORK_TEXT_BLUE,
    backgroundColor: CIRCLE_COLOR.NETWORK_YELLOW
  },
  damage: {
    fontColor: COLORS.WHITE,
    backgroundColor: CIRCLE_COLOR.NETWORK_RED
  },
  block: {
    fontColor: COLORS.WHITE,
    backgroundColor: CIRCLE_COLOR.NETWORK_RED
  },
  blocked: {
    fontColor: CIRCLE_COLOR.NETWORK_TEXT_BLUE,
    backgroundColor: CIRCLE_COLOR.NETWORK_YELLOW
  },
  fixorder: {
    fontColor: CIRCLE_COLOR.NETWORK_TEXT_BLUE,
    backgroundColor: CIRCLE_COLOR.NETWORK_YELLOW
  },
  svcorder: {
    fontColor: COLORS.WHITE,
    backgroundColor: CIRCLE_COLOR.NETWORK_YELLOW
  },
  job_ticket: {
    fontColor: CIRCLE_COLOR.NETWORK_TEXT_BLUE,
    backgroundColor: CIRCLE_COLOR.NETWORK_YELLOW
  },
  default: {
    fontColor: COLORS.WHITE,
    backgroundColor: CIRCLE_COLOR.NETWORK_GREEN
  }
};

export default class NetworkCircle extends React.Component {
  static propTypes = {
    isRefreshingChild: PropTypes.bool.isRequired,
    title: PropTypes.string,
    serviceStatus: PropTypes.object,
    getStatus: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      status: null,
      title: "",
    };
  }

  static getDerivedStateFromProps = (props, state) => {
    if (props.isRefreshingChild !== state.isRefreshingChild) {
      return {isRefreshingChild: props.isRefreshingChild};
    }
    return null;
  };

  componentDidMount() {
    this.props.getStatus();
  }

  setNativeProps = (nativeProps) => {
    this._root.setNativeProps(nativeProps);
  };

  componentDidUpdate(prevProps) {
    if (this.state.isRefreshingChild && !prevProps.isRefreshingChild) {
      this.props.getStatus();
    }
  }

  handleOpenModal = () => {
    if (this.props.serviceStatus && this.props.serviceStatus.description != null) {
      Alert.alert(
        this.props.serviceStatus.title ? this.props.serviceStatus.title : "Статус сети",
        this.props.serviceStatus.description
      );
    }
  };

  getFontSizeStatus = word => {
    if (word.length > 10) {
      return 9;
    } else {
      return 13;
    }
  };

  render() {
    let status = this.state.status,
      title = this.state.title;
    if (this.props.serviceStatus !== null) {
      status = this.props.serviceStatus.status;
      title = this.props.serviceStatus.title;
    }

    let obj = NetworkStatusObject.default;

    for (let key in NetworkStatusObject) {
      if (key === status) {
        obj = NetworkStatusObject[key];
      }
    }

    let firstWord = title;
    let otherWords = <View/>;
    if (title.length > 11) {
      firstWord = title.split(" ")[0];
      let secondWords = title.slice(firstWord.length + 1);
      otherWords = (
        <Text
          allowFontScaling={false}
          ellipsizeMode={"tail"}
          numberOfLines={1}
          style={[TextStyles.networkStatus,
            {
              color: obj.fontColor,
              fontSize: scale(this.getFontSizeStatus(secondWords))
            }
          ]}
        >
            {secondWords}
        </Text>
        );
    }

    let diagonal = baseRadius * moderateScale(0.3);
    return (
      <TouchableOpacity onPress={this.handleOpenModal}>
        <View style={{alignItems: "flex-start"}}>
          <View
            style={[
              getCircleDiagonal(diagonal),
              CircleStyles.networkCircle,
              {
                backgroundColor: obj.backgroundColor,
                alignItems: "center"
              },
            ]}
          >
            <Icon
              iconStyle={TextStyles.networkIcon}
              color="white"
              name="flash-circle"
              size={scale(20)}
              type="material-community"
            />
            <Text
              allowFontScaling={false}
              style={TextStyles.networkTitle}
            >
                {this.props.title.toUpperCase()}
            </Text>
            <View style={{
              justifyContent: "center",
              alignItems: "center"
            }}>
              <Text
                allowFontScaling={false}
                ellipsizeMode={"tail"}
                numberOfLines={1}
                style={[TextStyles.networkStatus,
                  {
                    color: obj.fontColor,
                    fontSize: scale(this.getFontSizeStatus(firstWord))
                  }
                ]}
              >
                  {firstWord === "" ? " " : firstWord.toUpperCase()}
              </Text>
              {otherWords}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
