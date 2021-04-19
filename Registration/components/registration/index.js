import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import TextInput from '../../components/atoms/TextInput/index.js';
import Button from '../../components/atoms/Button/index.js';
import Gap from '../../components/atoms/Gap/index.js';
import usersList from '../../components/users_list/index.js';

const Registration = () => {
  const tombolMasuk = () => {
    console.log('Responsive');

    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration</Text>
      <Gap height={40} />
      <TextInput label="Name" placeholder="Masukan nama lengkap anda" />
      <Gap height={20} />
      <TextInput label="Username" placeholder="Masukan username anda" />
      <Gap height={20} />
      <TextInput label="Email" placeholder="Masukan email anda" />
      <Gap height={20} />
      <TextInput label="Address" placeholder="Masukkan alamat anda" />
      <Gap height={20} />
      <TextInput
        label="Phone Number"
        placeholder="Masukkan Nomor Telepon Anda"
      />
      <Gap height={48} />
      <Button label="Sign In" onPress={tombolMasuk}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 25,
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
  },
});

export default Registration;
