import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button, Alert} from 'react-native';
import SignUp from './Sign_up';
import CheckBox from '@react-native-community/checkbox';

 const SignIn = () => {
  const [text, onChangeText] = React.useState('');
  const [check1, setCheck1] = useState(false);
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.tx1}>Hey, mừng bạn đến với thể lệ chương trình</Text>
        <Text style={styles.tx2}> Pepsi Tet</Text>
      </View>

      <Text style={styles.tx3}>Đăng nhập</Text>
      <Text style={styles.tx4}>Số điện thoại</Text>

      <TextInput
        style={styles.txIp}
        onChangeText={onChangeText}
        value={text}
        placeholder="Nhập số điện thoại"
      />
      
          <CheckBox 
            style={styles.ck}
            disabled={false}
            value={check1}
            onValueChange={(newValue) => setCheck1(newValue)}
          />
          <View style={styles.tx6}>
            <Text>Tôi đã đọc và đồng ý với Pepsi tết</Text>

            <Text></Text>
          </View>
      <Text style={styles.tx5}>Hoặc</Text>
      <View style={styles.Btn1}>
        <Button
          title="Lấy mã OTP"
          color="#B7B9C0"
          onPress={() => Alert.alert('Cannot press this one')}
        />
      </View>
      <View style={styles.Btn2}>
        <Button title="Đăng ký"></Button>
      </View>
    </View>
  );
};
export default SignIn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  tx1: {
    position: 'absolute',
    width: 179,
    height: 24,
    left: 110,
    top: 112,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: '#C2C9D1',
  },
  tx2: {
    color: '#000000',
    position: 'absolute',
    width: 163,
    height: 48,
    left: 106,
    top: 136,
    fontSize: 36,
    lineHeight: 48,
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
  tx3: {
    top: 214,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 22,
    lineHeight: 26,
    textAlign: 'center',
    color: '#414141',
  },
  tx4: {
    position: 'absolute',
    width: 90,
    height: 16,
    left: 17,
    top: 280,
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 16,
    letterSpacing: -0.3,
    color: '#414141',
  },
  tx5: {
    position: 'absolute',
    width: 24,
    height: 14,
    left: 175,
    top: 550,
    fontSize: 10,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 14,
  },
  tx6: {
    width: 288,
    height: 18,
    left: 60,
    top: 340,
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 14,
  },
  txIp: {
    position: 'absolute',
    width: 340,
    height: 44,
    left: 17,
    top: 304,
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  Btn1: {
    position: 'absolute',
    width: 264,
    height: 44,
    left: 55,
    top: 500,
    borderRadius: 10,
  },
  Btn2: {
    borderRadius: 10,
    position: 'absolute',
    width: 264,
    height: 44,
    left: 55,
    top: 580,
  },
  ck: {
    position:'absolute',
    left:22.6,
    right:'28.12%',
    top:360,
  }
});
