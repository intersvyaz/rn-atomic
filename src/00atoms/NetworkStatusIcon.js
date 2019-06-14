import React from 'react';
import PropTypes from "prop-types";
import {Image} from 'react-native';

const STATUS_ICON = {
  ok: {
    icon: require('./NetworkIcon/ok.png')
  },
  ok_needpay: {
    icon: require('./NetworkIcon/warning.png')
  },
  damage: {
    icon: require('./NetworkIcon/damage.png')
  },
  block: {
    icon: require('./NetworkIcon/damage.png')
  },
  blocked: {
    icon: require('./NetworkIcon/warning.png')
  },
  fixorder: {
    icon: require('./NetworkIcon/warning.png')
  },
  svcorder: {
    icon: require('./NetworkIcon/warning.png')
  },
  job_ticket: {
    icon: require('./NetworkIcon/warning.png')
  },
  default: {
    icon: require('./NetworkIcon/default.png')
  }
};

export default class NetworkStatusIcon extends React.Component {
  static propTypes = {
    status: PropTypes.string,
    size: PropTypes.number
  };

  getNetworkIcon = () => {
    let icon = STATUS_ICON.default;

    if (this.props.status !== null) {
      for (let key in STATUS_ICON) {
        if (key === this.props.status) {
          icon = STATUS_ICON[key];
        }
      }
    }

    return icon;
  };

  render() {
    let iconSource = this.getNetworkIcon();
    return (
      <Image
        source={iconSource.icon}
        resizeMode={"contain"}
        style={{width: this.props.size, height: this.props.size + 10}}
      />
    );
  }
}