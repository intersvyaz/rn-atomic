import * as React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import {CircleStyles} from '../styles/Base';
import BalanceCircle from "../01molecules/BalanceCircle";
import DetailCircle from "../01molecules/DetailCircle";
import NetworkCircle from "../01molecules/NetworkCircle";

export default class PairCircles extends React.Component {
  static propTypes = {
    balanceTitle: PropTypes.string,
    detailTitle: PropTypes.string,
    networkTitle: PropTypes.string,
    balanceDisabled: PropTypes.bool,
    detailVisible: PropTypes.bool,
    moneySumm: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    isRefreshingChild: PropTypes.bool.isRequired,
    getNetworkStatus: PropTypes.func,
    serviceStatus: PropTypes.object,
    showDetailScreen: PropTypes.func,
    balanceCirclePress: PropTypes.func,
  };

  render () {
    return (
        <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
            <View style={[CircleStyles.balanceContainer]}>
                <View style={[{flex: 1}]}>
                    <View style={[{alignItems: "flex-end"}]}>
                        <BalanceCircle
                          balanceTitle={this.props.balanceTitle}
                          disabled={this.props.balanceDisabled}
                          moneySumm={this.props.moneySumm}
                          onPress={this.props.balanceCirclePress}
                        />
                    </View>
                    <DetailCircle
                      showDetailScreen={this.props.showDetailScreen}
                      title={this.props.detailTitle}
                      visible={this.props.detailVisible}
                    />
                </View>
                <View style={{flex: 1}}>
                    <NetworkCircle
                      getStatus={this.props.getNetworkStatus}
                      isRefreshingChild={this.props.isRefreshingChild}
                      serviceStatus={this.props.serviceStatus}
                      title={this.props.networkTitle}
                    />
                </View>
            </View>
        </View>
    );
  }
}
