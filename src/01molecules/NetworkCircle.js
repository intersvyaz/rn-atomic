import * as React from 'react';
import {Text, View, TouchableOpacity, Platform} from 'react-native';
import PropTypes from 'prop-types';
import {CircleStyles, TextStyles, CIRCLE_COLOR} from '../styles/Base';
import {moderateScale, scale, baseRadius, getCircleDiagonal} from "../styles/Scaling";
import NetworkStatusAlert from "./NetworkStatusAlert";
import NetworkStatusIcon from "../00atoms/NetworkStatusIcon";

const NetworkStatusObject = {
  ok: {
    backgroundColor: CIRCLE_COLOR.NETWORK_GREEN
  },
  ok_needpay: {
    backgroundColor: CIRCLE_COLOR.NETWORK_YELLOW
  },
  damage: {
    backgroundColor: CIRCLE_COLOR.NETWORK_RED
  },
  block: {
    backgroundColor: CIRCLE_COLOR.NETWORK_RED
  },
  blocked: {
    backgroundColor: CIRCLE_COLOR.NETWORK_YELLOW
  },
  fixorder: {
    backgroundColor: CIRCLE_COLOR.NETWORK_YELLOW
  },
  svcorder: {
    backgroundColor: CIRCLE_COLOR.NETWORK_YELLOW
  },
  job_ticket: {
    backgroundColor: CIRCLE_COLOR.NETWORK_YELLOW
  },
  default: {
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
      showModal: false,
      statusInfo: null,
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

  getStatusInfo = () => {
    let info = NetworkStatusObject.default;

    if (this.props.serviceStatus !== null) {
      for (let key in NetworkStatusObject) {
        if (key === this.props.serviceStatus.status) {
          info = NetworkStatusObject[key];
          info.description = this.props.serviceStatus.description;
          info.status = this.props.serviceStatus.status;
        }
      }
    }

    return info;
  };

  handleOpenModal = () => {
    this.setState({showModal: true});
  };

  handlePressCancel = () => {
    this.setState({showModal: false});
  };

  /**
   * Размер шрифта в зависимости от максимальной длины слова в предложении иначе не влезет
   * @param title
   * @returns {number}
   */
  getFontSizeStatus = title => {
    let longestWord = title.split(' ').sort((a, b) => {
      return b.length - a.length;
    });
    return longestWord[0].length > 10 ? 9 : 13;
  };

  render() {
    let title = this.state.title;
    if (this.props.serviceStatus !== null) {
      title = this.props.serviceStatus.title;
    }
    let statusInfo = this.getStatusInfo(),
        firstWord = title.split(" ")[0],
        secondWords = title.slice(firstWord.length + 1),
        fontSize = this.getFontSizeStatus(title),
        diagonal = baseRadius * moderateScale(0.3);
    return (
      <View>
        {Platform.OS === 'android' &&
        <View style={CircleStyles.shadowContainer}>
          <View
              style={[getCircleDiagonal(diagonal), CircleStyles.circleShadow, {
                zIndex: -15
              }]}
          />
        </View>
        }
        <TouchableOpacity
          style={[
            getCircleDiagonal(diagonal),
            CircleStyles.networkCircle,
            {
              backgroundColor: statusInfo.backgroundColor,
              zIndex: -10
            },
          ]}
          onPress={this.handleOpenModal}
        >
          {
            this.state.showModal ?
              <NetworkStatusAlert
                  statusInfo={this.getStatusInfo()}
                  onPressCancel={this.handlePressCancel}
              /> : <View/>
          }
          <View style={{alignItems: "center", flex: 1}}>
            <View style={{paddingTop: scale(5), paddingBottom: scale(5), alignItems: "center"}}>
              <NetworkStatusIcon
                size={scale(18)}
              />
              <Text
                allowFontScaling={false}
                style={TextStyles.networkTitle}
              >
                {this.props.title.toUpperCase()}
              </Text>
            </View>
            <View style={{
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              paddingBottom: scale(20)
            }}>
              <Text
                allowFontScaling={false}
                ellipsizeMode={"tail"}
                numberOfLines={1}
                style={[TextStyles.networkStatus, {fontSize: scale(fontSize)}]}
              >
                {firstWord === "" ? " " : firstWord.toUpperCase()}
              </Text>
              <Text
                allowFontScaling={false}
                ellipsizeMode={"tail"}
                numberOfLines={1}
                style={[TextStyles.networkStatus, {fontSize: scale(fontSize)}]}
              >
                {secondWords === "" ? " " : secondWords.toUpperCase()}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
