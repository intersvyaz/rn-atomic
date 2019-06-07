import React from 'react';
import {Modal, Platform, StyleSheet, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import SimpleText from '../00atoms/SimpleText';
import NetworkStatusIcon from '../00atoms/NetworkStatusIcon';
import {COLORS, TextStyles} from '../styles/Base';
import {scale} from "../styles/Scaling";

export default class NetworkStatusAlert extends React.Component {
  static propTypes = {
    statusInfo: PropTypes.object,
    onPressCancel: PropTypes.func,
  };

  handlePressModalCancel = event => {
    this.props.onPressCancel(event);
  };

  render() {
    let closeButton = (
      <TouchableOpacity
        onPress={this.handlePressModalCancel}
      >
        <SimpleText style={[styles.buttonStyle]}>{"СКРЫТЬ"}</SimpleText>
      </TouchableOpacity>
    );

    return (
      <Modal
        animationType={"fade"}
        onRequestClose={() => {
        }}
        transparent={true}
        visible={true}
      >
        <View style={[styles.wrapper]}>
          <View style={[styles.innerContainer, styles.containerShadow]}>
            <View style={{flexDirection: 'row', justifyContent: "center"}}>
              <NetworkStatusIcon
                status={this.props.statusInfo.status}
                size={scale(30)}
              />
              <SimpleText style={[TextStyles.networkStatus,
                {
                  textAlign: 'left', fontSize: scale(14), marginHorizontal: scale(10)
                }
              ]}
              >
                {this.props.statusInfo.description}
              </SimpleText>
            </View>
            <View style={{flex: 1, paddingTop: scale(20)}}>
              {closeButton}
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  innerContainer: {
    position: 'absolute',
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: scale(20),
    marginHorizontal: 20
  },
  containerShadow: {
    ...Platform.select({
      ios: {
        shadowColor: COLORS.BLACK,
        shadowOffset: {width: 0, height: 8},
        shadowOpacity: 0.42,
        shadowRadius: 5,
      },
      android: {},
    }),
  },
  buttonStyle: {
    textAlign: 'right',
    color: "red",
    fontSize: scale(14)
  },
});