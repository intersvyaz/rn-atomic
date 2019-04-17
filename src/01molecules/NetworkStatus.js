import * as React from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';
import {CircleStyles, TextStyles, COLORS} from '../styles/Base';
import {Icon} from "react-native-elements";

const NetworkStatusObject = {
  ok: {
    fontColor: COLORS.WHITE,
    backgroundColor: "#83d542"
  },
  ok_needpay: {
    fontColor: "#365eac",
    backgroundColor: "#ffd519"
  },
  damage: {
    fontColor: COLORS.WHITE,
    backgroundColor: "#e64046"
  },
  block: {
    fontColor: COLORS.WHITE,
    backgroundColor: "#e64046"
  },
  blocked: {
    fontColor: "#365eac",
    backgroundColor: "#ffd519"
  },
  fixorder: {
    fontColor: "#365eac",
    tintColor: "#365eac",
    backgroundColor: "#ffd519"
  },
  svcorder: {
    fontColor: COLORS.WHITE,
    backgroundColor: "#ffd519"
  },
  job_ticket: {
    fontColor: "#365eac",
    backgroundColor: "#ffd519"
  },
  default: {
    fontColor: COLORS.WHITE,
    backgroundColor: "#83d542"
  }
};

export default class NetworkStatus extends React.Component{
  static propTypes = {
    style: PropTypes.object,
    title: PropTypes.string,
    serviceStatus: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      status: null,
      title: "",
    };
  }

  componentDidMount() {
    if (this.props.serviceStatus) {
      this.setState({
        status: this.props.serviceStatus.status,
        title: this.props.serviceStatus.title,
      });
    }
  }

  render () {
    let status = this.state.status;
    let title = this.state.title;
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
    let tintColor = { tintColor: obj.tintColor ? obj.tintColor : null };
    let firstWord = title;
    let otherWords = <View />;
    if (title.length > 11) {
      firstWord = title.split(" ")[0];
      otherWords = (
                <Text
                  allowFontScaling={false}
                  ellipsizeMode={"tail"}
                  numberOfLines={1}
                  style={[TextStyles.networkStatus, {color: obj.fontColor}]}
                >
                    {title.slice(firstWord.length + 1)}
                </Text>
            );
    }
    return (
        <View style={{ alignItems: "flex-start" }}>
            <View
              style={[
                this.props.style,
                CircleStyles.networkCircle,
                {backgroundColor: obj.backgroundColor,
                  alignItems: "center"
                },
              ]}
            >
                <Icon
                  iconStyle={TextStyles.networkIcon}
                  color="white"
                  name="flash-circle"
                  type="material-community"
                />
                <Text
                  allowFontScaling={false}
                  style={TextStyles.networkTitle}
                >
                    {this.props.title.toUpperCase()}
                </Text>
                <View style={{justifyContent: "center",
                  alignItems: "center"}}>
                    <Text
                      allowFontScaling={false}
                      ellipsizeMode={"tail"}
                      numberOfLines={1}
                      style={[TextStyles.networkStatus, {color: obj.fontColor}]}
                    >
                        {firstWord === "" ? " " : firstWord.toUpperCase()}
                    </Text>
                    {otherWords}
                </View>
            </View>
        </View>
    );
  }
}
