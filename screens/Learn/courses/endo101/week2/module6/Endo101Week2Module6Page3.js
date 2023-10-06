import React from 'react';
import {ScrollView, Dimensions, Image, View} from 'react-native';
import {Text} from 'react-native-elements';
import {styles, theme, Images} from '../../../../../../constants';
import {Button, Select} from '../../../../../../components';
import {StatusBar} from 'expo-status-bar';
import {connect} from 'react-redux';
import {updateEndo101Week2Module6Q3Action} from '../../../../../../redux/actions/learnActions';
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
    firstAnswer: true,

    singleOptionPickerList: [
      {title: 'A'},
      {title: 'B'},
      {title: 'C'},
      {title: 'D'},
      {title: 'E'},
      {title: 'F'},
    ],
    singleSelectedOption1: -1,
    singleSelectedOption2: -1,
    singleSelectedOption3: -1,
    singleSelectedOption4: -1,
    singleSelectedOption5: -1,
    singleSelectedOption6: -1,
  };

  setCorrectAnswer = correctAnswerP => {
    this.setState({correctAnswer: correctAnswerP});
  };

  setWrongAnswer = wrongAnswerP => {
    this.setState({wrongAnswer: wrongAnswerP});
  };

  setFirstAnswer = firstAnswerP => {
    this.setState({firstAnswer: firstAnswerP});
  };

  setSingleOptionPickerVisible = async singleOptionPickerVisibleP => {
    Promise.resolve()
      .then(() =>
        this.setState({singleOptionPickerVisible: singleOptionPickerVisibleP}),
      )
      .catch(error => {
        console.log(error);
        // An error happened.
      });
    // .then(() => this.syncUserResponseContainerHeight());
    // this.setState({ singleOptionPickerVisible: singleOptionPickerVisibleP });
  };

  setSingleOptionPickerList = async singleOptionPickerListP => {
    this.setState({singleOptionPickerList: singleOptionPickerListP});
  };

  setSingleSelectedOption1 = async singleSelectedOption1P => {
    this.setState({singleSelectedOption1: singleSelectedOption1P});
  };

  setSingleSelectedOption2 = async singleSelectedOption2P => {
    this.setState({singleSelectedOption2: singleSelectedOption2P});
  };

  setSingleSelectedOption3 = async singleSelectedOption3P => {
    this.setState({singleSelectedOption3: singleSelectedOption3P});
  };

  setSingleSelectedOption4 = async singleSelectedOption4P => {
    this.setState({singleSelectedOption4: singleSelectedOption4P});
  };

  setSingleSelectedOption5 = async singleSelectedOption5P => {
    this.setState({singleSelectedOption5: singleSelectedOption5P});
  };

  setSingleSelectedOption6 = async singleSelectedOption6P => {
    this.setState({singleSelectedOption6: singleSelectedOption6P});
  };

  setSelectedIndex = selectedIndexP => {
    this.setState({selectedIndex: selectedIndexP});
  };

  // componentWillUnmount() {
  //   this.unsubscribe();
  // }

  // componentDidUpdate(prevProp, prevState) {
  //   const { navigation } = this.props;
  //   this.unsubscribe = auth.onAuthStateChanged(function (user) {
  //     if (user) {
  //     } else {
  //       // No user is signed in.
  //       navigation.reset({
  //         index: 0,
  //         routes: [
  //           {
  //             name: "Login",
  //             state: {
  //               routes: [{ name: "Login" }],
  //             },
  //           },
  //         ],
  //       });
  //       // navigation.canGoBack() && navigation.popToTop();
  //     }
  //   });
  //   return this.unsubscribe;
  // }

  allAnswersCorrect = () => {
    // console.log(
    //   "Selected Options: ",
    //   this.state.singleSelectedOption1,
    //   this.state.singleSelectedOption2,
    //   this.state.singleSelectedOption3,
    //   this.state.singleSelectedOption4,
    //   this.state.singleSelectedOption5,
    //   this.state.singleSelectedOption6
    // );
    return (
      this.state.singleSelectedOption1 == 'E' &&
      this.state.singleSelectedOption2 == 'D' &&
      this.state.singleSelectedOption3 == 'C' &&
      this.state.singleSelectedOption4 == 'A' &&
      this.state.singleSelectedOption5 == 'F' &&
      this.state.singleSelectedOption6 == 'B'
    );
  };

  // strToHTML = (s) => {
  //   let e = document.createElement("div");
  //   let r = document.createRange();
  //   r.selectNodeContents(e);
  //   let f = r.createContextualFragment(s);
  //   e.appendChild(f);
  //   return e.firstElementChild;
  // };

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
                        paddingHorizontal: theme.SIZES.BASE * 2,
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingVertical: theme.SIZES.BASE * 2,
                      }}>
                      <Text
                        style={{
                          // ...styles.boldTitle,
                          color: theme.COLORS.TEXT1,
                          fontSize: theme.SIZES.H5,
                          fontWeight: '600',
                          // textShadowColor: theme.COLORS.DARK_BLACK,
                          // textShadowRadius: 20,
                          textAlign: 'center',
                        }}>
                        Match each letter to the correct body part
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
                          height: 250,
                          marginBottom: theme.SIZES.BASE,
                          // marginHorizontal: theme.SIZES.BASE * 0.5,
                        }}
                        source={Images.learn.endo101Course.labeledUterus1}
                      />
                      <View
                        style={{
                          // flex: 1,
                          flexDirection: 'row',
                          // flexWrap: "wrap",
                          // alignContent: "flex-end",
                          alignItems: 'center',
                          justifyContent: 'flex-start',
                          marginTop: 0,
                          paddingTop: 0,
                          // backgroundColor: theme.COLORS.MELBLUE,
                          // height: this.activeItemHeight,
                          marginBottom: theme.SIZES.BASE,
                        }}>
                        <Select
                          customPrompt=" "
                          defaultIndex={1}
                          options={this.state.singleOptionPickerList}
                          // customContainerStyle={{
                          //   marginTop: height - 300,
                          // }}
                          // customListItemStyle={{
                          //   height: 30,
                          //   paddingVertical: 0,
                          // }}
                          // customTitleStyle={{
                          //   alignItems: "center",
                          // }}
                          // style={{ ...styles.dropdown, width: 100 }}
                          customButtonStyle={{
                            // width: theme.SIZES.BASE * 9,
                            height: theme.SIZES.BASE * 3,
                            borderRadius: theme.SIZES.BASE,
                            shadowRadius: 0,
                            shadowOpacity: 0,
                            backgroundColor: theme.COLORS.PRIMARY2,
                            fontFamily: theme.FONTS.TEXT,
                            paddingHorizontal: 0,
                          }}
                          customTextStyle={{
                            fontSize: 16,
                            // fontWeight: "300",
                          }}
                          onSelect={(ind, value) => {
                            this.setSingleSelectedOption1(value);
                          }}
                        />
                        <Text
                          style={{
                            color: theme.COLORS.TEXT1,
                            fontSize: theme.SIZES.H5,
                            fontWeight: 'bold',
                            textAlign: 'center',
                            marginLeft: theme.SIZES.BASE,
                          }}>
                          Uterus
                        </Text>
                      </View>

                      <View
                        style={{
                          // flex: 1,
                          flexDirection: 'row',
                          // flexWrap: "wrap",
                          // alignContent: "flex-end",
                          alignItems: 'center',
                          justifyContent: 'flex-start',
                          marginTop: 0,
                          paddingTop: 0,
                          // backgroundColor: theme.COLORS.MELBLUE,
                          // height: this.activeItemHeight,
                          marginBottom: theme.SIZES.BASE,
                        }}>
                        <Select
                          customPrompt=" "
                          defaultIndex={1}
                          options={this.state.singleOptionPickerList}
                          // customContainerStyle={{
                          //   marginTop: height - 300,
                          // }}
                          // customListItemStyle={{
                          //   height: 30,
                          //   paddingVertical: 0,
                          // }}
                          // customTitleStyle={{
                          //   alignItems: "center",
                          // }}
                          // style={{ ...styles.dropdown, width: 100 }}
                          customButtonStyle={{
                            // width: theme.SIZES.BASE * 9,
                            height: theme.SIZES.BASE * 3,
                            borderRadius: theme.SIZES.BASE,
                            shadowRadius: 0,
                            shadowOpacity: 0,
                            backgroundColor: theme.COLORS.PRIMARY2,
                            fontFamily: theme.FONTS.TEXT,
                            paddingHorizontal: 0,
                          }}
                          customTextStyle={{
                            fontSize: 16,
                            // fontWeight: "300",
                          }}
                          onSelect={(ind, value) => {
                            this.setSingleSelectedOption2(value);
                          }}
                        />
                        <Text
                          style={{
                            color: theme.COLORS.TEXT1,
                            fontSize: theme.SIZES.H5,
                            fontWeight: 'bold',
                            textAlign: 'center',
                            marginLeft: theme.SIZES.BASE,
                          }}>
                          Fallopian Tube
                        </Text>
                      </View>

                      <View
                        style={{
                          // flex: 1,
                          flexDirection: 'row',
                          // flexWrap: "wrap",
                          // alignContent: "flex-end",
                          alignItems: 'center',
                          justifyContent: 'flex-start',
                          marginTop: 0,
                          paddingTop: 0,
                          // backgroundColor: theme.COLORS.MELBLUE,
                          // height: this.activeItemHeight,
                          marginBottom: theme.SIZES.BASE,
                        }}>
                        <Select
                          customPrompt=" "
                          defaultIndex={1}
                          options={this.state.singleOptionPickerList}
                          // customContainerStyle={{
                          //   marginTop: height - 300,
                          // }}
                          // customListItemStyle={{
                          //   height: 30,
                          //   paddingVertical: 0,
                          // }}
                          // customTitleStyle={{
                          //   alignItems: "center",
                          // }}
                          // style={{ ...styles.dropdown, width: 100 }}
                          customButtonStyle={{
                            // width: theme.SIZES.BASE * 9,
                            height: theme.SIZES.BASE * 3,
                            borderRadius: theme.SIZES.BASE,
                            shadowRadius: 0,
                            shadowOpacity: 0,
                            backgroundColor: theme.COLORS.PRIMARY2,
                            fontFamily: theme.FONTS.TEXT,
                            paddingHorizontal: 0,
                          }}
                          customTextStyle={{
                            fontSize: 16,
                            // fontWeight: "300",
                          }}
                          onSelect={(ind, value) => {
                            this.setSingleSelectedOption3(value);
                          }}
                        />
                        <Text
                          style={{
                            color: theme.COLORS.TEXT1,
                            fontSize: theme.SIZES.H5,
                            fontWeight: 'bold',
                            textAlign: 'center',
                            marginLeft: theme.SIZES.BASE,
                          }}>
                          Ovary
                        </Text>
                      </View>

                      <View
                        style={{
                          // flex: 1,
                          flexDirection: 'row',
                          // flexWrap: "wrap",
                          // alignContent: "flex-end",
                          alignItems: 'center',
                          justifyContent: 'flex-start',
                          marginTop: 0,
                          paddingTop: 0,
                          // backgroundColor: theme.COLORS.MELBLUE,
                          // height: this.activeItemHeight,
                          marginBottom: theme.SIZES.BASE,
                        }}>
                        <Select
                          customPrompt=" "
                          defaultIndex={1}
                          options={this.state.singleOptionPickerList}
                          // customContainerStyle={{
                          //   marginTop: height - 300,
                          // }}
                          // customListItemStyle={{
                          //   height: 30,
                          //   paddingVertical: 0,
                          // }}
                          // customTitleStyle={{
                          //   alignItems: "center",
                          // }}
                          // style={{ ...styles.dropdown, width: 100 }}
                          customButtonStyle={{
                            // width: theme.SIZES.BASE * 9,
                            height: theme.SIZES.BASE * 3,
                            borderRadius: theme.SIZES.BASE,
                            shadowRadius: 0,
                            shadowOpacity: 0,
                            backgroundColor: theme.COLORS.PRIMARY2,
                            fontFamily: theme.FONTS.TEXT,
                            paddingHorizontal: 0,
                          }}
                          customTextStyle={{
                            fontSize: 16,
                            // fontWeight: "300",
                          }}
                          onSelect={(ind, value) => {
                            this.setSingleSelectedOption4(value);
                          }}
                        />
                        <Text
                          style={{
                            color: theme.COLORS.TEXT1,
                            fontSize: theme.SIZES.H5,
                            fontWeight: 'bold',
                            textAlign: 'center',
                            marginLeft: theme.SIZES.BASE,
                          }}>
                          Vagina
                        </Text>
                      </View>

                      <View
                        style={{
                          // flex: 1,
                          flexDirection: 'row',
                          // flexWrap: "wrap",
                          // alignContent: "flex-end",
                          alignItems: 'center',
                          justifyContent: 'flex-start',
                          marginTop: 0,
                          paddingTop: 0,
                          // backgroundColor: theme.COLORS.MELBLUE,
                          // height: this.activeItemHeight,
                          marginBottom: theme.SIZES.BASE,
                        }}>
                        <Select
                          customPrompt=" "
                          defaultIndex={1}
                          options={this.state.singleOptionPickerList}
                          // customContainerStyle={{
                          //   marginTop: height - 300,
                          // }}
                          // customListItemStyle={{
                          //   height: 30,
                          //   paddingVertical: 0,
                          // }}
                          // customTitleStyle={{
                          //   alignItems: "center",
                          // }}
                          // style={{ ...styles.dropdown, width: 100 }}
                          customButtonStyle={{
                            // width: theme.SIZES.BASE * 9,
                            height: theme.SIZES.BASE * 3,
                            borderRadius: theme.SIZES.BASE,
                            shadowRadius: 0,
                            shadowOpacity: 0,
                            backgroundColor: theme.COLORS.PRIMARY2,
                            fontFamily: theme.FONTS.TEXT,
                            paddingHorizontal: 0,
                          }}
                          customTextStyle={{
                            fontSize: 16,
                            // fontWeight: "300",
                          }}
                          onSelect={(ind, value) => {
                            this.setSingleSelectedOption5(value);
                          }}
                        />
                        <Text
                          style={{
                            color: theme.COLORS.TEXT1,
                            fontSize: theme.SIZES.H5,
                            fontWeight: 'bold',
                            textAlign: 'center',
                            marginLeft: theme.SIZES.BASE,
                          }}>
                          Endometrium
                        </Text>
                      </View>

                      <View
                        style={{
                          // flex: 1,
                          flexDirection: 'row',
                          // flexWrap: "wrap",
                          // alignContent: "flex-end",
                          alignItems: 'center',
                          justifyContent: 'flex-start',
                          marginTop: 0,
                          paddingTop: 0,
                          // backgroundColor: theme.COLORS.MELBLUE,
                          // height: this.activeItemHeight,
                          marginBottom: theme.SIZES.BASE,
                        }}>
                        <Select
                          customPrompt=" "
                          defaultIndex={1}
                          options={this.state.singleOptionPickerList}
                          // customContainerStyle={{
                          //   marginTop: height - 300,
                          // }}
                          // customListItemStyle={{
                          //   height: 30,
                          //   paddingVertical: 0,
                          // }}
                          // customTitleStyle={{
                          //   alignItems: "center",
                          // }}
                          // style={{ ...styles.dropdown, width: 100 }}
                          customButtonStyle={{
                            // width: theme.SIZES.BASE * 9,
                            height: theme.SIZES.BASE * 3,
                            borderRadius: theme.SIZES.BASE,
                            shadowRadius: 0,
                            shadowOpacity: 0,
                            backgroundColor: theme.COLORS.PRIMARY2,
                            fontFamily: theme.FONTS.TEXT,
                            paddingHorizontal: 0,
                          }}
                          customTextStyle={{
                            fontSize: 16,
                            // fontWeight: "300",
                          }}
                          onSelect={(ind, value) => {
                            this.setSingleSelectedOption6(value);
                          }}
                        />
                        <Text
                          style={{
                            color: theme.COLORS.TEXT1,
                            fontSize: theme.SIZES.H5,
                            fontWeight: 'bold',
                            textAlign: 'center',
                            marginLeft: theme.SIZES.BASE,
                          }}>
                          Cervix
                        </Text>
                      </View>

                      {/* {!this.allAnswersCorrect() && (
                        <View
                          style={{
                            flex: 1,
                            alignContent: "center",
                            alignItems: "center",
                            // marginVertical: theme.SIZES.BASE,
                          }}
                        >
                          <Text
                            style={{
                              color: theme.COLORS.ERROR1,
                            }}
                          >
                            Incorrect
                          </Text>
                        </View>
                      )} */}

                      {this.allAnswersCorrect() && (
                        <View
                          style={{
                            flex: 1,
                            alignContent: 'center',
                            alignItems: 'center',
                            // marginTop: theme.SIZES.BASE,
                          }}>
                          <Text
                            style={{
                              color: theme.COLORS.PRIMARY1,
                            }}>
                            Correct!
                          </Text>
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
                            if (this.state.firstAnswer) {
                              this.setFirstAnswer(false);
                              this.props.dispatch(
                                updateEndo101Week2Module6Q3Action({
                                  Uterus: this.state.singleSelectedOption1,
                                  'Fallopian Tube':
                                    this.state.singleSelectedOption2,
                                  Ovary: this.state.singleSelectedOption3,
                                  Vagina: this.state.singleSelectedOption4,
                                  Endometrium: this.state.singleSelectedOption5,
                                  Cervix: this.state.singleSelectedOption6,
                                }),
                              );
                            }

                            if (this.allAnswersCorrect()) {
                              navigation.navigate('Endo101Week2Module6Page4');
                            }
                          }}></Button>
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
