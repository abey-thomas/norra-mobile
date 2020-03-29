import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
} from 'react-native';
import {
  DateTimePicker,
  KeyboardShift,
  ImageInput,
  FloatingLabelInput,
  FloatingLabelView,
  CustomHeader,
  ImageData,
} from '@components';
import {
  RootStackParamList,
  GlobalStyles,
  validateEmail,
  UserStackParamList,
} from '@modules';
import {COLORS} from '@modules/colors';
import {StackNavigationProp} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native-gesture-handler';
import DownArrow from '@assets/down_arrow_grey.svg';

type NewPostScreenNavigationProp = StackNavigationProp<
  UserStackParamList,
  'NewPost'
>;
interface Props {
  navigation: NewPostScreenNavigationProp;
}

export class NewPost extends React.Component<Props> {
  state = {};

  render() {
    return (
      <View style={GlobalStyles.container}>
        <SafeAreaView />
        <CustomHeader
          type={'SIMPLE'}
          title={'Create'}
          onLeftButtonPress={this.props.navigation.goBack}
          rightButton={
            <TouchableOpacity style={Styles.publishButton}>
              <Text style={Styles.publishButtonText}>Publish</Text>
            </TouchableOpacity>
          }
        />
        <KeyboardShift extraStyles={GlobalStyles.viewPaddingWithHeader}>
          <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
            <View style={GlobalStyles.container}>
              <View style={Styles.metaDataView}>
                <View style={[GlobalStyles.rowDirection]}>
                  <Image
                    style={GlobalStyles.userAvatar50x50}
                    source={{
                      uri:
                        'http://icon-library.com/images/iron-man-icon/iron-man-icon-11.jpg',
                    }}
                  />
                  <View style={GlobalStyles.ph12}>
                    <Text style={Styles.userName}>Abey Thomas</Text>
                    <View style={Styles.optionContainer}>
                      <Text style={Styles.connectionText}>in</Text>
                      <TouchableOpacity style={Styles.dropDownButton}>
                        <Text style={Styles.dropDownButtonText}>
                          Healthy Diet
                        </Text>
                        <DownArrow height={6} width={11} />
                      </TouchableOpacity>
                      <Text style={Styles.connectionText}>as</Text>
                      <TouchableOpacity style={Styles.dropDownButton}>
                        <Text style={Styles.dropDownButtonText}>Question</Text>
                        <DownArrow height={6} width={11} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <Text style={Styles.headerText}>Well what's it about...</Text>
              </View>
            </View>
          </ScrollView>
        </KeyboardShift>
        {/* <ImageInput
          open={imageOptions}
          onClose={() => this.toggleImageOptions(false)}
          handleImage={(imageData: ImageData) =>
            this.handleImageChange(imageData)
          }
        /> */}
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  publishButton: {
    width: 73,
    height: 29,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.PRIMARY,
    borderRadius: 30,
  },
  publishButtonText: {
    color: COLORS.PRIMARY,
    fontSize: 14,
    fontWeight: 'bold',
  },
  metaDataView: {
    borderBottomEndRadius: 8,
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0.5 * 4},
    shadowOpacity: 0.1,
    shadowRadius: 0.8 * 4,
    paddingTop: 20,
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  userName: {
    fontSize: 14,
    color: COLORS.BLACK,
  },
  connectionText: {
    fontSize: 12,
    color: COLORS.VERYDARKGRAY,
  },
  optionContainer: {
    flexDirection: 'row',
    paddingTop: 6,
    alignItems: 'center',
  },
  dropDownButton: {
    height: 21,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 6,
    backgroundColor: COLORS.VERYLIGHTGRAY,
    paddingHorizontal: 12,
    borderRadius: 20,
    minWidth: 79,
  },
  dropDownButtonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: COLORS.VERYDARKGRAY,
    letterSpacing: 0.3,
    paddingRight: 6,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.PRIMARY,
    paddingTop: 18,
  },
});
