import * as React from 'react';
import PropTypes from "prop-types";
import { Text, Platform, View, TouchableOpacity, Image } from "react-native";
import  Switch  from "../00atoms/Switch";
import { MenuStyle } from "../styles/MenuItem";
import { COLORS } from "../styles/Base";
import Collapsible from "react-native-collapsible";

export default class MenuItem extends React.Component {
  static propTypes = {
    containerStyle: PropTypes.object, // Стиль всей видимой области
    header: PropTypes.string, // Заголовок элемента (название раздела)
    subheader: PropTypes.string, // Подзаголовок (название настройки)
    description: PropTypes.string, // Короткое описание
    menuIcon: PropTypes.number, // Иконка слева, если указана
    navigationIcon: PropTypes.number, // Иконка справа, если указана
    navigationIconStyle: PropTypes.object, // Стиль иконки справа
    onPress: PropTypes.func, // Функция, вызываемая по нажатию на активную область
    touchableStyle: PropTypes.object, // Стиль активной области
    halveSize: PropTypes.bool, // Отобразить в меньшем размере (description с переключателем, к примеру)
    switch: PropTypes.func, // Функция, вызываемая по нажатию на переключатель
    switchValue: PropTypes.bool, // Текущее значение переключателя
    separator: PropTypes.bool, // Разделитель после элемента
    separatorStyle: PropTypes.object, // Стиль разделителя
    separateChild: PropTypes.bool, // Отображает разделитель между элементом и вложенными View
    sectionEnd: PropTypes.bool, // Отступ после элемента
    adjacent: PropTypes.bool, // Убирает отступы элемента
    children: PropTypes.any, // Вложенные элементы - любые View размещенные внутри
    collapsible: PropTypes.bool, // Свёрнута ли область со вложенными элементами,
    color: PropTypes.string,
    fontFamily: PropTypes.string
  };

  handleSwitch = () => {
    return this.props.switch();
  };

  getFontFamily() {
    return this.props.fontFamily ? {fontFamily: this.props.fontFamily} : {};
  }

  getSubheaderColor = () => {
    const isInteractiveItemDescribed =
      (this.props.onPress || this.props.switch) && this.props.description;
    const isInteractiveContainer =
      this.props.onPress && this.props.children && !this.props.sectionEnd;
    return {
      color:
        isInteractiveItemDescribed || isInteractiveContainer
          ? COLORS.DEFAULT_BLUE_TEXT
          : COLORS.MAIN_GRAY
    };
  };

  renderHeader() {
    let header = !this.props.header ? (
      <View />
    ) : (
      <Text 
        allowFontScaling={false} 
        style={[MenuStyle.header, this.getFontFamily()]}>
        {this.props.header}
      </Text>
    );
    return header;
  }

  renderSubheader() {
    let subheader = !this.props.subheader ? (
      <View />
    ) : (
      <Text
        allowFontScaling={false}
        style={[MenuStyle.subheader, this.getSubheaderColor(), this.getFontFamily()]}
      >
        {this.props.subheader}
      </Text>
    );
    return subheader;
  }

  renderDescription() {
    let description = !this.props.description ? (
      <View />
    ) : (
      <Text 
        allowFontScaling={false} 
        style={[MenuStyle.description, this.getFontFamily()]}>
        {this.props.description}
      </Text>
    );
    return description;
  }

  renderMenuIcon() {
    let menuIcon = this.props.menuIcon ? (
      <View style={{ flex: 2 }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Image 
            source={this.props.menuIcon} 
            style={[MenuStyle.icon]} />
        </View>
      </View>
    ) : (
      <View style={{ paddingLeft: 20 }} />
    );
    return menuIcon;
  }

  getToggle = () => {
    let togglePosition;
    if (Platform.OS === "ios") {
      togglePosition = { paddingBottom: 15 };
    } else {
      togglePosition = { paddingTop: 5, paddingLeft: 5 };
    }

    const toggle = (
      <View style={{ flexDirection: "column" }}>
        <TouchableOpacity
          onPress={this.handleSwitch}
          style={[MenuStyle.switch, togglePosition]}
        >
          <Switch
            onValueChange={this.handleSwitch}
            value={this.props.switchValue}
          />
        </TouchableOpacity>
      </View>
    );
    return toggle;
  };

  renderAction() {
    let action;
    if (this.props.switch) {
      action = this.getToggle();
    } else if (this.props.navigationIcon) {
      action = (
        <Image
          source={this.props.navigationIcon}
          style={[MenuStyle.icon, this.props.navigationIconStyle]}
        />
      );
    }
    return action;
  }

  renderChild = () => {
    let childView;
    if (this.props.children) {
      childView = this.props.children;
    }
    let separate;
    let separatorLine = (
      <View style={[{ flexDirection: "row" }, MenuStyle.separatorStyle]} />
    );
    if (
      this.props.separator &&
      (!this.props.sectionEnd || this.props.children)
    ) {
      separate = separatorLine;
    }
    let sectionEnd;
    if (this.props.sectionEnd) {
      sectionEnd = <View style={MenuStyle.sectionEnd} />;
    }

    const childrenCollapsible = (
      <Collapsible collapsed={this.props.collapsible}>{childView}</Collapsible>
    );
    const childrenViews = (
      <View>
        {childView && this.props.separateChild && !sectionEnd
          ? separatorLine
          : null}
        {childView && separate && sectionEnd ? separate : childView}
        {childView && separate && sectionEnd ? childView : separate}
        {sectionEnd && sectionEnd}
      </View>
    );
    return this.props.collapsible ? childrenCollapsible : childrenViews;
  }

  getHalfSize = () => {
    let halveSize;
    if (this.props.halveSize === true) {
      halveSize = { paddingVertical: 5, marginBottom: 10 };
    } else if (this.props.halveSize === false) {
      halveSize = { paddingVertical: 5, marginBottom: 0 };
    }
    return halveSize;
  }

  render() {
    return (
      <View style={[this.props.containerStyle]}>
        <View
          style={{
            flex: 1,
            backgroundColor: this.props.color ? this.props.color : "white"
          }}
        >
          {this.renderHeader()}
          <TouchableOpacity
            disabled={!this.props.onPress}
            onPress={this.props.onPress}
            style={[
              { paddingVertical: this.props.adjacent ? 0 : 15 },
              this.getHalfSize(),
              this.props.touchableStyle
            ]}
          >
            <View style={[{ flexDirection: "row" }, MenuStyle.listRow]}>
              {this.renderMenuIcon()}
              <View style={{ flex: 10 }}>
                {this.props.subheader && this.renderSubheader()}
                {this.props.description && this.renderDescription()}
              </View>
              {this.renderAction()}
            </View>
          </TouchableOpacity>
        </View>
        {this.renderChild()}
      </View>
    );
  }
}
