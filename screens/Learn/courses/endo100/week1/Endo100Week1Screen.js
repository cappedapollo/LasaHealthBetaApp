import React from 'react';
import {Dimensions, ScrollView, View, DeviceEventEmitter} from 'react-native';
import {Text, LinearProgress} from 'react-native-elements';
import {StatusBar} from 'expo-status-bar';
import {theme, styles, Images} from '../../../../../constants';
import {
  Button,
  CheckBox,
  Footer,
  Icon,
  TouchableOpacity,
  RoundedTopContainer,
} from '../../../../../components';
import {connect} from 'react-redux';
import {KeyboardAvoidingView} from 'react-native';
import ScreenTemplateWrapper from '../../../../../shared/ScreenTemplateWrapper';
import Checkmark1 from '../../../../../assets/ui/general/Checkmark1.svg';
import DisabledCheckmark1 from '../../../../../assets/ui/general/DisabledCheckmark1.svg';
import InProgress1 from '../../../../../assets/ui/general/InProgress1.svg';
import {getWeeklyDueDate} from '../../../../../shared/CourseUtils';
import {getOS} from '../../../../../shared/PlatformUtils';

const iosPlatform = () => getOS() == 'ios';

const {width} = Dimensions.get('screen');

class LearnScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    if (!this.props.userProfile.appIntroTutorialComplete.includes(2)) {
      setTimeout(() => {
        //  giving session controller 1.5 seconds to load before sending trigger
        console.log('Showing tutorial for home screen');
        DeviceEventEmitter.emit('event.showtutorialPage', {
          pageNumber: 2,
        });
      }, 1000);
    }
  }

  getModuleProgressIcon = moduleNum => {
    if (this.props.endoCourse.week1.weekProgress > moduleNum) {
      return <Checkmark1 />;
    } else if (this.props.endoCourse.week1.weekProgress == moduleNum) {
      return <InProgress1 />;
    } else {
      return <DisabledCheckmark1 />;
    }
  };

  render() {
    const {navigation} = this.props;
    let indexCount = 0;

    return (
      <ScreenTemplateWrapper
        headerPadding={true}
        width={width}
        customHeaderPaddingHeight={iosPlatform() ? 145 : 140}
        customImageName={Images.ui.BackgroundGradient1}>
        <View
          style={{
            flex: 1,
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              ...styles.home,
              flex: 1,
              alignContent: 'center',
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
                contentContainerStyle={{
                  ...styles.articles,
                  marginTop: 0,
                  paddingTop: 0,
                }}>
                <View
                  style={{
                    paddingHorizontal: theme.SIZES.BASE * 2,
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingBottom: theme.SIZES.BASE * 2,
                  }}>
                  <Text
                    style={{
                      color: theme.COLORS.ERROR1,
                      fontSize: theme.SIZES.B1,
                      fontWeight: '700',
                      textAlign: 'center',
                    }}>
                    WEEK 1
                  </Text>
                  <Text
                    style={{
                      color: theme.COLORS.TEXT1,
                      fontSize: theme.SIZES.H4,
                      fontWeight: '600',
                      textAlign: 'center',
                    }}>
                    Getting Started
                  </Text>

                  <Text
                    style={{
                      color: theme.COLORS.TEXT2,
                      fontSize: theme.SIZES.C2,
                      textAlign: 'center',
                      marginTop: theme.SIZES.BASE * 0.5,
                    }}>
                    Learn about the course, set goals, and answer your most
                    pressing questions
                  </Text>
                </View>
                <RoundedTopContainer
                  style={{
                    paddingHorizontal: theme.SIZES.BASE,
                    marginTop: theme.SIZES.BASE * 0.8,
                  }}>
                  <View
                    style={{
                      ...styles.centerHeader,
                      marginTop: 0,
                      paddingTop: 0,
                      alignItems: 'center',
                      marginTop: theme.SIZES.BASE,
                      marginHorizontal: theme.SIZES.BASE,
                    }}>
                    <LinearProgress
                      style={{
                        marginTop: theme.SIZES.BASE,
                        height: 50,
                        borderRadius: 16,
                      }}
                      color={theme.COLORS.SECONDARY2}
                      trackColor={theme.COLORS.BACKGROUND3}
                      value={
                        this.props.endoCourse.week1.weekProgress /
                        this.props.endoCourse.week1.numModules
                      }
                      variant="determinate"
                    />
                    <View
                      style={{
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                      }}>
                      <Text
                        style={{
                          textAlign: 'left',
                          top: -36,
                          color: theme.COLORS.TEXT1,
                          fontWeight: 'bold',
                        }}>
                        Your progress
                      </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginVertical: theme.SIZES.BASE,
                      marginHorizontal: theme.SIZES.BASE,
                    }}>
                    <View
                      style={{
                        ...styles.button,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: theme.COLORS.TERTIARY2,
                        width: width * 0.5 - theme.SIZES.BASE * 2.5,
                      }}>
                      <TouchableOpacity
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                        onPress={() => {}}>
                        <Icon
                          type="ionicon"
                          name="time-outline"
                          fill={theme.COLORS.TERTIARY1}
                          color={theme.COLORS.TERTIARY1}
                        />
                        <Text
                          style={{
                            color: theme.COLORS.TERTIARY1,
                            marginLeft: theme.SIZES.BASE * 0.5,
                          }}>
                          15 min
                        </Text>
                      </TouchableOpacity>
                    </View>

                    <View
                      style={{
                        ...styles.button,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: theme.COLORS.PRIMARY2,
                        width: width * 0.5 - theme.SIZES.BASE * 2.5,
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Icon
                          type="ionicon"
                          name="calendar-outline"
                          fill={theme.COLORS.PRIMARY1}
                          color={theme.COLORS.PRIMARY1}
                        />
                        <Text
                          style={{
                            color: theme.COLORS.PRIMARY1,
                            marginLeft: theme.SIZES.BASE * 0.5,
                          }}>
                          Due{' '}
                          {getWeeklyDueDate(
                            this.props.endoCourse.courseStartTimestamp,
                            1,
                          )}
                        </Text>
                      </View>
                    </View>
                  </View>

                  <View
                    style={{
                      marginTop: theme.SIZES.BASE,
                      marginHorizontal: theme.SIZES.BASE,
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('Endo101Week1Module1Page1');
                      }}>
                      <CheckBox
                        checkedColor={theme.COLORS.PRIMARY2}
                        uncheckedColor={theme.COLORS.BACKGROUND3}
                        title="Course Introduction"
                        checked={true}
                        containerStyle={{
                          marginVertical: theme.SIZES.BASE * 0.2,
                          marginBottom: 0,
                          left: -10,
                        }}
                        textStyle={{
                          color: theme.COLORS.DARK_SECONDARY,
                          fontFamily: theme.FONTS.TEXT,
                          fontWeight: '100',
                        }}
                        rightIcon={false}
                        rightText="3 min"
                        checkedIcon={this.getModuleProgressIcon(0)}
                      />
                    </TouchableOpacity>

                    <Icon
                      name="ellipsis-vertical-outline"
                      type="ionicon"
                      color={theme.COLORS.TEXT3}
                      style={{
                        marginVertical: 0,
                        paddingVertical: 0,
                        marginLeft: theme.SIZES.BASE + 4,
                        top: -2,
                      }}
                      width={10}
                      height={14}
                    />

                    <TouchableOpacity
                      onPress={() => {
                        if (this.props.endoCourse.week1.weekProgress >= 1) {
                          navigation.navigate('Endo101Week1Module2Page1');
                        }
                      }}>
                      <CheckBox
                        checkedColor={theme.COLORS.PRIMARY2}
                        uncheckedColor={theme.COLORS.BACKGROUND3}
                        title="Learning about you"
                        checked={true}
                        containerStyle={{
                          marginVertical: 0,
                          left: -10,
                        }}
                        textStyle={{
                          color: theme.COLORS.DARK_SECONDARY,
                          fontFamily: theme.FONTS.TEXT,
                          fontWeight: '100',
                        }}
                        rightIcon={false}
                        rightText="2 min"
                        checkedIcon={this.getModuleProgressIcon(1)}
                      />
                    </TouchableOpacity>

                    <Icon
                      name="ellipsis-vertical-outline"
                      type="ionicon"
                      color={theme.COLORS.TEXT3}
                      style={{
                        marginVertical: 0,
                        paddingVertical: 0,
                        marginLeft: theme.SIZES.BASE + 4,
                        top: -2,
                      }}
                      width={10}
                      height={14}
                    />

                    <TouchableOpacity
                      onPress={() => {
                        if (this.props.endoCourse.week1.weekProgress >= 2) {
                          navigation.navigate('Endo101Week1Module3Page1');
                        }
                      }}>
                      <CheckBox
                        checkedColor={theme.COLORS.PRIMARY2}
                        uncheckedColor={theme.COLORS.BACKGROUND3}
                        title="Finding your why"
                        checked={true}
                        containerStyle={{
                          marginVertical: 0,
                          paddingVertical: 0,
                          left: -10,
                        }}
                        textStyle={{
                          color: theme.COLORS.DARK_SECONDARY,
                          fontFamily: theme.FONTS.TEXT,
                          fontWeight: '100',
                        }}
                        rightIcon={false}
                        rightText="2 min"
                        checkedIcon={this.getModuleProgressIcon(2)}
                      />
                    </TouchableOpacity>

                    <Icon
                      name="ellipsis-vertical-outline"
                      type="ionicon"
                      color={theme.COLORS.TEXT3}
                      style={{
                        marginVertical: 0,
                        paddingVertical: 0,
                        marginLeft: theme.SIZES.BASE + 4,
                        top: -2,
                      }}
                      width={10}
                      height={14}
                    />

                    <TouchableOpacity
                      onPress={() => {
                        if (this.props.endoCourse.week1.weekProgress >= 3) {
                          navigation.navigate('Endo101Week1Module4Page1');
                        }
                      }}>
                      <CheckBox
                        checkedColor={theme.COLORS.PRIMARY2}
                        uncheckedColor={theme.COLORS.BACKGROUND3}
                        title="What is Endometriosis?"
                        checked={true}
                        containerStyle={{
                          marginVertical: theme.SIZES.BASE * 0.2,
                          marginTop: 0,
                          left: -10,
                        }}
                        textStyle={{
                          color: theme.COLORS.DARK_SECONDARY,
                          fontFamily: theme.FONTS.TEXT,
                          fontWeight: '100',
                        }}
                        rightIcon={false}
                        rightText="3 min"
                        checkedIcon={this.getModuleProgressIcon(3)}
                      />
                    </TouchableOpacity>

                    <Icon
                      name="ellipsis-vertical-outline"
                      type="ionicon"
                      color={theme.COLORS.TEXT3}
                      style={{
                        marginVertical: 0,
                        paddingVertical: 0,
                        marginLeft: theme.SIZES.BASE + 4,
                        top: -2,
                      }}
                      width={10}
                      height={14}
                    />

                    <TouchableOpacity
                      onPress={() => {
                        if (this.props.endoCourse.week1.weekProgress >= 4) {
                          navigation.navigate('Endo101Week1Module5Page1');
                        }
                      }}>
                      <CheckBox
                        checkedColor={theme.COLORS.PRIMARY2}
                        uncheckedColor={theme.COLORS.BACKGROUND3}
                        title="You are not alone"
                        checked={true}
                        containerStyle={{
                          marginVertical: theme.SIZES.BASE * 0.2,
                          marginTop: 0,
                          left: -10,
                        }}
                        textStyle={{
                          color: theme.COLORS.DARK_SECONDARY,
                          fontFamily: theme.FONTS.TEXT,
                          fontWeight: '100',
                        }}
                        rightIcon={false}
                        rightText="2 min"
                        checkedIcon={this.getModuleProgressIcon(4)}
                      />
                    </TouchableOpacity>

                    <Icon
                      name="ellipsis-vertical-outline"
                      type="ionicon"
                      color={theme.COLORS.TEXT3}
                      style={{
                        marginVertical: 0,
                        paddingVertical: 0,
                        marginLeft: theme.SIZES.BASE + 4,
                        top: -2,
                      }}
                      width={10}
                      height={14}
                    />

                    <TouchableOpacity
                      onPress={() => {
                        if (this.props.endoCourse.week1.weekProgress >= 5) {
                          navigation.navigate('Endo101Week1Module6Page1');
                        }
                      }}>
                      <CheckBox
                        checkedColor={theme.COLORS.PRIMARY2}
                        uncheckedColor={theme.COLORS.BACKGROUND3}
                        title="Wrap up quiz"
                        checked={true}
                        containerStyle={{
                          marginVertical: theme.SIZES.BASE * 0.2,
                          marginTop: 0,
                          left: -10,
                        }}
                        textStyle={{
                          color: theme.COLORS.DARK_SECONDARY,
                          fontFamily: theme.FONTS.TEXT,
                          fontWeight: '100',
                        }}
                        rightIcon={false}
                        rightText="3 min"
                        checkedIcon={this.getModuleProgressIcon(5)}
                      />
                    </TouchableOpacity>

                    <View
                      style={{
                        paddingHorizontal: theme.SIZES.BASE * 2,
                        alignItems: 'center',
                        paddingTop: theme.SIZES.BASE,
                        paddingBottom: 0,
                      }}>
                      <Button
                        testID="citationsButton"
                        style={{
                          ...styles.outlinedButton,
                          width: width / 2.0 - theme.SIZES.BASE * 5.0,
                          fontSize: 16,
                          fontWeight: '700',
                          textAlign: 'center',
                          borderColor: theme.COLORS.PRIMARY2,
                          marginBottom: 0,
                        }}
                        titleStyle={{
                          color: theme.COLORS.PRIMARY2,
                          fontFamily: theme.FONTS.TEXT,
                        }}
                        title="citations"
                        onPress={() => {
                          navigation.navigate('Endo101Week1CitationsScreen');
                        }}></Button>
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
                        title="Continue"
                        onPress={() => {
                          navigation.navigate('Endo100Week1Module1');
                        }}></Button>
                    </View>
                  </View>
                </RoundedTopContainer>
              </ScrollView>
            </KeyboardAvoidingView>
          </View>
          <Footer navigation={navigation} tabName="Learn" />
        </View>
      </ScreenTemplateWrapper>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    endoCourse: state.learn.endo101Course,
    userProfile: state.userProfile,
  };
};
export default connect(mapStateToProps)(LearnScreen);