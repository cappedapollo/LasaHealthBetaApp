import React from 'react';
import {ScrollView, Dimensions, View} from 'react-native';
import {Text} from 'react-native-elements';
import {MixpanelInstance} from '../../../../../../shared/UsageAnalyticsUtils';
import {styles, theme, Images} from '../../../../../../constants';
import {Button} from '../../../../../../components';
import {StatusBar} from 'expo-status-bar';
import {connect} from 'react-redux';
import {
  updateEndo101Week3ProgressAction,
  updateEndo101Week3Module3Q1Action,
} from '../../../../../../redux/actions/learnActions';
import {KeyboardAvoidingView} from 'react-native';
import ScreenTemplateWrapper from '../../../../../../shared/ScreenTemplateWrapper';
import {getOS} from '../../../../../../shared/PlatformUtils';

const iosPlatform = () => getOS() == 'ios';
const {width} = Dimensions.get('screen');

//  FIXMETUNA:  this might cause problems ignoring this warning, scrolling or windowing
//  errors possible, watch out
import {LogBox} from 'react-native';
LogBox.ignoreLogs([
  'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.',
]);

class LearnCoursePlaceholderScreen extends React.Component {
  constructor(props) {
    super(props);
    this.mixpanel = MixpanelInstance;

    this.state = {
      correctAnswer: false,
      wrongAnswer: false,
      selectedIndex: -1,
    };
  }

  setCorrectAnswer = correctAnswerP => {
    this.setState({correctAnswer: correctAnswerP});
  };

  setWrongAnswer = wrongAnswerP => {
    this.setState({wrongAnswer: wrongAnswerP});
  };

  setSelectedIndex = selectedIndexP => {
    this.setState({selectedIndex: selectedIndexP});
  };

  render() {
    const {navigation, route, endoCourse} = this.props;

    return (
      <ScreenTemplateWrapper
        headerPadding={true}
        width={0}
        customImageName={Images.ui.BackgroundGradient2}>
        <View style={{flex: 1}}>
          <View
            style={{
              flex: 1,
              alignContent: 'center',
              alignItems: 'center',
              marginHorizontal: theme.SIZES.BASE,
              elevation: 2,
            }}>
            <View
              style={{
                flex: 1,
                alignContent: 'center',
                alignItems: 'center',
              }}>
              <StatusBar
                style={{
                  backgroundColor: theme.COLORS.TRANSPARENT,
                  fontFamily: theme.FONTS.TEXT,
                }}
                backgroundColor={theme.COLORS.TRANSPARENT}
              />

              <KeyboardAvoidingView
                style={{
                  flex: 1,
                }}
                behavior="padding"
                enabled={iosPlatform()}>
                <ScrollView
                  testID="pageScrollview"
                  showsVerticalScrollIndicator={false}
                  style={{}}>
                  <View
                    style={{
                      backgroundColor: theme.COLORS.WHITE,
                      borderRadius: theme.SIZES.HEADERRADIUS,
                      elevation: 2,
                      marginBottom: theme.SIZES.BASE,
                      width: width - theme.SIZES.BASE * 2,
                      marginTop: theme.SIZES.BASE * 0.8,
                    }}>
                    <View
                      style={{
                        paddingHorizontal: theme.SIZES.BASE,
                      }}>
                      <View
                        style={{
                          paddingHorizontal: theme.SIZES.BASE * 2,
                          alignItems: 'center',
                          justifyContent: 'center',
                          paddingVertical: theme.SIZES.BASE * 2,
                        }}>
                        <Text
                          style={{
                            color: theme.COLORS.TEXT1,
                            fontSize: theme.SIZES.H5,
                            fontWeight: '600',
                            textAlign: 'center',
                          }}>
                          REFLECT
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          marginHorizontal: theme.SIZES.BASE * 0.5,
                        }}>
                        <Text style={{fontSize: theme.SIZES.B1}}>
                          What stage of endometriosis do you have?
                          {/* {"\u000A"}● Stage One
                          {"\u000A"}● Stage Two
                          {"\u000A"}● Stage Three
                          {"\u000A"}● Stage Four
                          {"\u000A"}● I’m not sure */}
                        </Text>

                        <View
                          style={{
                            alignContent: 'center',
                            alignItems: 'center',
                            marginVertical: theme.SIZES.BASE,
                            marginBottom: 0,
                          }}>
                          <Button
                            testID="option1Button"
                            style={{
                              ...styles.mutedButton,

                              width: width - theme.SIZES.BASE * 4,
                              height: theme.SIZES.BASE * 4,
                              backgroundColor:
                                this.state.selectedIndex == 0
                                  ? theme.COLORS.TEXT3
                                  : theme.COLORS.BACKGROUND2,
                            }}
                            containerStyle={styles.mutedButton.borderRadius}
                            onPress={() => {
                              this.props.dispatch(
                                updateEndo101Week3Module3Q1Action('Stage One'),
                              );
                              this.setSelectedIndex(0);
                            }}
                            title={'Stage One'}></Button>
                        </View>

                        <View
                          style={{
                            alignContent: 'center',
                            alignItems: 'center',
                            marginVertical: theme.SIZES.BASE,
                            marginBottom: 0,
                          }}>
                          <Button
                            testID="option2Button"
                            style={{
                              ...styles.mutedButton,
                              width: width - theme.SIZES.BASE * 4,
                              height: theme.SIZES.BASE * 4,
                              backgroundColor:
                                this.state.selectedIndex == 1
                                  ? theme.COLORS.TEXT3
                                  : theme.COLORS.BACKGROUND2,
                            }}
                            containerStyle={styles.mutedButton.borderRadius}
                            onPress={() => {
                              this.props.dispatch(
                                updateEndo101Week3Module3Q1Action('Stage Two'),
                              );
                              this.setSelectedIndex(1);
                            }}
                            title={'Stage Two'}></Button>
                        </View>

                        <View
                          style={{
                            alignContent: 'center',
                            alignItems: 'center',
                            marginVertical: theme.SIZES.BASE,
                            marginBottom: 0,
                          }}>
                          <Button
                            testID="option3Button"
                            style={{
                              ...styles.mutedButton,
                              width: width - theme.SIZES.BASE * 4,
                              height: theme.SIZES.BASE * 4,
                              backgroundColor:
                                this.state.selectedIndex == 2
                                  ? theme.COLORS.TEXT3
                                  : theme.COLORS.BACKGROUND2,
                            }}
                            containerStyle={styles.mutedButton.borderRadius}
                            onPress={() => {
                              this.props.dispatch(
                                updateEndo101Week3Module3Q1Action(
                                  'Stage Three',
                                ),
                              );
                              this.setSelectedIndex(2);
                            }}
                            title={'Stage Three'}></Button>
                        </View>

                        <View
                          style={{
                            alignContent: 'center',
                            alignItems: 'center',
                            marginVertical: theme.SIZES.BASE,
                            marginBottom: 0,
                          }}>
                          <Button
                            testID="option4Button"
                            style={{
                              ...styles.mutedButton,
                              width: width - theme.SIZES.BASE * 4,
                              height: theme.SIZES.BASE * 4,
                              backgroundColor:
                                this.state.selectedIndex == 3
                                  ? theme.COLORS.TEXT3
                                  : theme.COLORS.BACKGROUND2,
                            }}
                            containerStyle={styles.mutedButton.borderRadius}
                            onPress={() => {
                              this.props.dispatch(
                                updateEndo101Week3Module3Q1Action('Stage Four'),
                              );
                              this.setSelectedIndex(3);
                            }}
                            title={'Stage Four'}></Button>
                        </View>

                        <View
                          style={{
                            alignContent: 'center',
                            alignItems: 'center',
                            marginVertical: theme.SIZES.BASE,
                            marginBottom: 0,
                          }}>
                          <Button
                            testID="option4Button"
                            style={{
                              ...styles.mutedButton,
                              width: width - theme.SIZES.BASE * 4,
                              height: theme.SIZES.BASE * 4,
                              backgroundColor:
                                this.state.selectedIndex == 4
                                  ? theme.COLORS.TEXT3
                                  : theme.COLORS.BACKGROUND2,
                            }}
                            containerStyle={styles.mutedButton.borderRadius}
                            onPress={() => {
                              this.props.dispatch(
                                updateEndo101Week3Module3Q1Action('Not sure'),
                              );
                              this.setSelectedIndex(4);
                            }}
                            title={'Not sure'}></Button>
                        </View>

                        <View
                          style={{
                            alignContent: 'center',
                            alignItems: 'center',
                            marginVertical: theme.SIZES.BASE,
                            marginBottom: 0,
                          }}>
                          <Button
                            testID="option4Button"
                            style={{
                              ...styles.mutedButton,
                              width: width - theme.SIZES.BASE * 4,
                              height: theme.SIZES.BASE * 4,
                              backgroundColor:
                                this.state.selectedIndex == 5
                                  ? theme.COLORS.TEXT3
                                  : theme.COLORS.BACKGROUND2,
                            }}
                            containerStyle={styles.mutedButton.borderRadius}
                            onPress={() => {
                              this.props.dispatch(
                                updateEndo101Week3Module3Q1Action(
                                  "I don't have endometriosis",
                                ),
                              );
                              this.setSelectedIndex(5);
                            }}
                            title={"I don't have endometriosis"}></Button>
                        </View>

                        <View
                          style={{
                            paddingHorizontal: theme.SIZES.BASE * 2,
                            alignItems: 'center',
                            paddingVertical: theme.SIZES.BASE * 2,
                          }}>
                          <Button
                            testID="nextButton"
                            style={{
                              ...styles.button,
                              width: width - theme.SIZES.BASE * 4,
                            }}
                            titleStyle={{
                              color: theme.COLORS.WHITE,
                              fontFamily: theme.FONTS.TEXT,
                            }}
                            title="Next"
                            onPress={() => {
                              if (this.state.selectedIndex >= 0) {
                                this.mixpanel.track('endo101_course_progress', {
                                  week_num: 3,
                                  module_num: 3,
                                });
                                Promise.resolve()
                                  .then(() => {
                                    return this.props.dispatch(
                                      updateEndo101Week3ProgressAction(3),
                                    );
                                  })
                                  .then(() =>
                                    navigation.navigate('Endo101Week3Screen'),
                                  );
                              }
                            }}></Button>
                        </View>
                      </View>
                    </View>
                  </View>
                </ScrollView>
              </KeyboardAvoidingView>
            </View>
          </View>
        </View>
      </ScreenTemplateWrapper>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    endoCourse: state.learn.endo101Course,
  };
};
export default connect(mapStateToProps)(LearnCoursePlaceholderScreen);