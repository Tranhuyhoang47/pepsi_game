import React,{useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    Alert,
    Dimensions,
} from 'react-native';

import CheckBox from '@react-native-community/checkbox';
import TextButton from '../navigations/Button/TxButton';

import {Formik} from 'formik';
import * as Yup from 'yup';
import { SafeAreaView } from 'react-native-safe-area-context';
import TxButton from '../navigations/Button/TxButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import TextInputt from '../navigations/Inputt/inputt';
import ClickButton from '../navigations/Button/clickbutton';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const signInSchema = Yup.object({
    phoneNumber: Yup.string()
      .required('Enter your phone number!')
      .min(6, 'enter at least 6 numbers')
      .max(12, 'enter up to 12 numbers')
      .matches(phoneRegExp, 'ERROR'),
    userName: Yup.string()
      .min(2, 'Enter at least 2 characters')
      .max(100, 'Enter up to 100 characters')
      .required('Enter your name!'),
  });

const SignUp: React.FC = (props: any) => {
    const [termRead, setTermRead] = useState(false);
    const isAllTrue = (isTermRead: boolean, formikValid: boolean) => {
        if (isTermRead === true || formikValid === true) {
          return true;
        }
        return false;
      };
    const {navigation} = props;

    return (
        <SafeAreaView style={styles.fullcontainer}>
            <View style={styles.topContainer}>
            <Text style={styles.tx1}>Hey, mừng bạn đến với</Text>
            <Text style={styles.tx2}> Pepsi Tet</Text>
            </View>
            <View style={styles.secondContainer}>
            <Text style={styles.tx3}>Đăng Ký</Text>   
            
            <Formik
                initialValues={{phoneNumber: '', userName: ''}}
                validationSchema={signInSchema}
                onSubmit={values => {navigation.navigate('OtpNotification');
            }}>
          {formik => (
            <KeyboardAwareScrollView>
              <TextInputt
                containerStyle={styles.txIp1}
                errorLabel={formik.errors.phoneNumber}
                placeholder="Nhập số điện thoại"
                errorStyle={styles.er}
                numKeyboard={true}
                inputProps={{
                  value: formik.values.phoneNumber,
                  onChangeText: (value: string) => {
                    formik.setFieldValue('phoneNumber', value, true);
                  },
                }}
              />
              <TextInputt
                containerStyle={styles.txIp2}
                errorLabel={formik.errors.userName}
                errorStyle={styles.er}
                placeholder="Nhập họ tên"
                inputProps={{
                  value: formik.values.userName,
                  onChangeText: (value: string) => {
                    formik.setFieldValue('userName', value, true);
                  },
                }}
              />
              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={termRead}
                  onValueChange={() => setTermRead(!termRead)}
                  boxType={'square'}
                  onFillColor={'white'}
                />
                <Text style={styles.checkboxText}>
                  {'Tôi đã đọc và đồng ý với'}
                </Text>
                <TxButton
                  title=" thể lệ chương trình "
                  onPress={() => navigation.navigate('Commit')}
                />
                <Text style={styles.checkboxText}>{'Pepsi Tết'}</Text>
              </View>
              <View style={styles.botContainer}>
              <ClickButton
                activeStyle={styles.Btn1}
                onPress={formik.submitForm}
                title="Lấy mã OTP"
                disabled={isAllTrue(!termRead, !formik.isValid)}
                
              />
              <Text style={styles.tx5}>{'Hoặc'}</Text>
              <ClickButton
                title="Đăng nhập"
                activeStyle={styles.Btn2}
                onPress={() => navigation.navigate('Sign_in')}
              />
              </View>
            </KeyboardAwareScrollView>
          )}
        </Formik>
            </View>
        </SafeAreaView>
      );
};
export default SignUp;

const styles = StyleSheet.create({
    fullcontainer: {
        flex: 1,
    // backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'column',
    },
    topContainer: {
        flex: 25,
        backgroundColor: '#fff',
        paddingTop: windowHeight * 0.1,
        alignItems: 'center',
    },
    secondContainer: {
        flex: 75,
        backgroundColor: '#fff',
        paddingHorizontal: windowWidth * 0.05,
    },
    tx1: {
        fontSize: 20,
        fontWeight: '400',
        color: "#000",
    },
    tx2: {
        fontSize: 40,
        color: "#000",
        fontWeight:'bold',
        fontStyle:'normal',
    },
    tx3: {
        fontSize: 20,
        fontWeight: '400',
        color: 'white',
        alignSelf: 'center',
    },
    tx4: {
        position:'absolute',
        width:90,
        height:16,
        fontSize:14,
        fontWeight: 'normal',
        fontStyle:'normal',
        lineHeight:16,
        letterSpacing:-0.3,
        color:"#000",
    },
    tx5: {
        position:'absolute',
        width:24,
        height:20,
        left:175,
        top:210,
        fontSize:10,
        fontWeight: 'normal',
        fontStyle:'normal',
        lineHeight:14,
        marginVertical: windowHeight * 0.05,
    },
    tx6: {
        fontSize: 12,
        color: 'black',
      },
    txIp1: {
        top:10,
        borderRadius:5,
        backgroundColor:"#fff",
    },
    txIp2: {
        top:30,
        borderRadius:5,
        backgroundColor:"#fff",
    },
    Btn1: {
        width: '70%',
        height: windowHeight * 0.055,
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: windowHeight * 0.0001,
    },
    Btn2: {
        width: '70%',
        height: windowHeight * 0.055,
        backgroundColor: 'blue',
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'center',
        top: -40,
        marginVertical: windowHeight * 0.1,
    },
    ck: {
        flexDirection: 'row',
        width:264,
        height:44,
        color:"#45b",
        borderTopColor:"#000",
        top:150,
        left:30,
      },
      checkboxContainer: {
        flexDirection: 'row',
        top:40,
      },
      checkboxText: {
        fontSize: 12,
        color: "#000",
      },
      botContainer: {
        top:60,
      },
      er: {
        top:1,
        color:'red',
      },
});

