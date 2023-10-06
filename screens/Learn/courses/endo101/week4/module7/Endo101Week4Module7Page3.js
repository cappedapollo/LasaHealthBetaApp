import React from 'react';
import {ScrollView, Dimensions, View} from 'react-native';
import {Text} from 'react-native-elements';
import {MixpanelInstance} from '../../../../../../shared/UsageAnalyticsUtils';
import {styles, theme, Images} from '../../../../../../constants';
import {Button, Input} from '../../../../../../components';
import {StatusBar} from 'expo-status-bar';
import {connect} from 'react-redux';
import {
  updateEndo101Week4ProgressAction,
  updateEndo101Week4Module7Q8Action,
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
    };
  }

  setCorrectAnswer = correctAnswerP => {
    this.setState({correctAnswer: correctAnswerP});
  };

  setWrongAnswer = wrongAnswerP => {
    this.setState({wrongAnswer: wrongAnswerP});
  };

  render() {
    const {navigation, route} = this.props;

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
                          Processing your diagnosis
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          marginHorizontal: theme.SIZES.BASE * 0.5,
                        }}>
                        <Text style={{fontSize: theme.SIZES.B1}}>
                          People experience many different reactions when they
                          find out that you have endometriosis. Whether you
                          found out today, have known for several months, or
                          have suspected endometriosis, you are probably
                          experiencing several complex emotions. This could
                          include sadness, numbness, fear, anger, anxiety,
                          acceptance, relief, determination, shock, frustration,
                          or many other emotions.
                        </Text>

                        {(this.props.endoCourse.week1.module2Q1HasEndo ==
                          'I have been diagnosed with confirmed endometriosis with a laparoscopic surgery.' ||
                          this.props.endoCourse.week1.module2Q1HasEndo ==
                            'I have been clinically diagnosed with endometriosis, but have not had a laparoscopic surgery to confirm the diagnosis.') && (
                          <View>
                            <Text style={{fontSize: theme.SIZES.B1}}>
                              {'\u000A'}How did you feel when you were diagnosed
                              with endometriosis?
                            </Text>

                            <View
                              style={{
                                paddingHorizontal: theme.SIZES.BASE,
                                marginTop: theme.SIZES.BASE * 1.5,
                              }}>
                              <Input
                                testID="explainInput"
                                // right
                                placeholder="enter here"
                                style={{
                                  // borderColor: theme.COLORS.DEFAULT,
                                  // borderRadius: 4,
                                  // backgroundColor: "#fff",
                                  // height: 120,
                                  fontFamily: theme.FONTS.TEXT,
                                }}
                                multiline={true}
                                iconContent={<View />}
                                onChangeText={value => {
                                  this.setCorrectAnswer(true);
                                  this.props.dispatch(
                                    updateEndo101Week4Module7Q8Action(value),
                                  );
                                }}
                              />
                            </View>
                          </View>
                        )}

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
                              if (
                                this.state.correctAnswer ||
                                (!(
                                  this.props.endoCourse.week1
                                    .module2Q1HasEndo ==
                                  'I have been diagnosed with confirmed endometriosis with a laparoscopic surgery.'
                                ) &&
                                  !(
                                    this.props.endoCourse.week1
                                      .module2Q1HasEndo ==
                                    'I have been clinically diagnosed with endometriosis, but have not had a laparoscopic surgery to confirm the diagnosis.'
                                  ))
                              ) {
                                this.mixpanel.track('endo101_course_progress', {
                                  week_num: 4,
                                  module_num: 7,
                                });
                                Promise.resolve()
                                  .then(() => {
                                    return this.props.dispatch(
                                      updateEndo101Week4ProgressAction(7),
                                    );
                                  })
                                  .then(() =>
                                    navigation.navigate('Endo101Week4Screen'),
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