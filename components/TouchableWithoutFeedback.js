import React from 'react';
import debounce from 'lodash.debounce';
import {StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {theme} from '../constants';
class ArButton extends React.Component {
  componentDidMount() {
    this.allOnPress = () => {
      this.props.onPress && this.props.onPress();
    };
    this.debounceLen = this.props.customDebounceLength
      ? this.props.customDebounceLength
      : 2000;
    this.onPressDebounce = debounce(this.allOnPress, this.debounceLen, {
      leading: true,
      trailing: false,
    });
  }

  render() {
    const {children, testID, onPress, ...props} = this.props;
    return (
      <TouchableWithoutFeedback
        onPress={() => this.onPressDebounce()}
        testID={testID}
        {...props}>
        {children}
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  defaultButton: {
    color: theme.COLORS.DEFAULT,
    fontFamily: theme.FONTS.TEXT,
  },
});

export default ArButton;
