import React from 'react';
import {ScrollView, Dimensions, Image, View} from 'react-native';
import {Text} from 'react-native-elements';
import {styles, theme, Images} from '../../../../../../constants';
import {Button} from '../../../../../../components';
import {StatusBar} from 'expo-status-bar';
import {connect} from 'react-redux';
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
  state = {
    correctAnswer: false,
    wrongAnswer: false,
    selectedIndex: -1,
  };

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
                          Types of Research
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          marginHorizontal: theme.SIZES.BASE * 0.5,
                        }}>
                        <Image
                          style={{
                            ...styles.onboardingHeaderImage,
                            height: 210,
                            // marginHorizontal: theme.SIZES.BASE * 0.5,
                          }}
                          source={Images.learn.endo101Course.endoResearch1}
                        />

                        <Text style={{fontSize: theme.SIZES.B1}}>
                          A good thing to remember is that not all evidence is
                          equal. Let’s go over what types of research are
                          available and how to evaluate if the source is
                          reliable.
                          {'\u000A'}
                        </Text>

                        <View
                          style={{
                            flexDirection: 'row',
                            width: width - theme.SIZES.BASE * 6,
                          }}>
                          <Text
                            style={{
                              fontSize: theme.SIZES.B2,
                              marginLeft: theme.SIZES.BASE,
                              color: theme.COLORS.PRIMARY2,
                            }}>
                            ●
                          </Text>
                          <Text
                            style={{
                              fontSize: theme.SIZES.B1,
                              marginLeft: theme.SIZES.BASE * 0.5,
                            }}>
                            Peer Recommendation. A patient saying they had a
                            good experience with a product could be a sign that
                            the product or method is worth looking into.
                            However, it’s also important to remember that
                            everyone’s bodies are different. So what worked for
                            your friend or family member or someone you see
                            online might not have the same effects on you. This
                            is the least reliable form of evidence.{'\u000A'}
                          </Text>
                        </View>

                        <View
                          style={{
                            flexDirection: 'row',
                            width: width - theme.SIZES.BASE * 6,
                          }}>
                          <Text
                            style={{
                              fontSize: theme.SIZES.B2,
                              marginLeft: theme.SIZES.BASE,
                              color: theme.COLORS.PRIMARY2,
                            }}>
                            ●
                          </Text>
                          <Text
                            style={{
                              fontSize: theme.SIZES.B1,
                              marginLeft: theme.SIZES.BASE * 0.5,
                            }}>
                            Online Search. Searching online for information can
                            be a great way to learn about different approaches.
                            However, it can be difficult to know who to trust.
                            Look to see what kind, if any, sources they are
                            using. Domains ending in “.edu” or “.gov” might be
                            more trustworthy. You can also look at the author
                            who wrote the piece and their education or
                            background.{'\u000A'}
                          </Text>
                        </View>

                        <View
                          style={{
                            flexDirection: 'row',
                            width: width - theme.SIZES.BASE * 6,
                          }}>
                          <Text
                            style={{
                              fontSize: theme.SIZES.B2,
                              marginLeft: theme.SIZES.BASE,
                              color: theme.COLORS.PRIMARY2,
                            }}>
                            ●
                          </Text>
                          <Text
                            style={{
                              fontSize: theme.SIZES.B1,
                              marginLeft: theme.SIZES.BASE * 0.5,
                            }}>
                            Doctor Recommendation. Your doctor should have a
                            good idea of what to recommend. If you want to try
                            something new, consulting your doctor would be
                            beneficial.{'\u000A'}
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            width: width - theme.SIZES.BASE * 6,
                          }}>
                          <Text
                            style={{
                              fontSize: theme.SIZES.B2,
                              marginLeft: theme.SIZES.BASE,
                              color: theme.COLORS.PRIMARY2,
                            }}>
                            ●
                          </Text>
                          <Text
                            style={{
                              fontSize: theme.SIZES.B1,
                              marginLeft: theme.SIZES.BASE * 0.5,
                            }}>
                            Peer-Reviewed Research. Peer-reviewed research is
                            the best kind of research available. This is because
                            after the research is done and the literature is
                            written, it undergoes a process in which other
                            experts in the field will review the paper to ensure
                            that the research is unbiased and follows the
                            scientific method. Peer-reviewed research is the
                            gold standard if you want to find the facts.
                            {'\u000A'}
                          </Text>
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
                              navigation.navigate('Endo101Week9Module2Page4');
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