import { StyleSheet } from 'react-native';
import { COLORS } from './Base';

export const ListviewTextStyles = StyleSheet.create({
  title: {
    color: COLORS.MAIN_GRAY,
    fontSize: 16,
    fontWeight: '700'
  },
  subtitle: {
    color: COLORS.SECOND_GRAY,
    fontSize: 12,
    fontWeight: 'normal'
  },
});

export const ListViewRowStyles = StyleSheet.create({
  base: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16
  },
  oneLineWithCustonIcon: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 16,
    paddingLeft: 16
  },
  largeLeftIcon: {
    ppaddingTop: 8,
    paddingBottom: 8,
    paddingRight: 16,
    paddingLeft: 0
  },
  largeLeftIconThreeLines: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 16,
    paddingLeft: 0
  },
  leftIconViewStyle: {
    marginRight: 16
  }
});