import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ScrollView,
  Button,
  Image,
  Linking,
  ImageBackground,
} from 'react-native';
import Constants from 'expo-constants';

const Login = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <ScrollView style={styles.container}>
      <View style={styles.img}>
        <Image
          style={{ width: 50, height: 100 }}
          source={{
            uri:
              'https://cdn.pixabay.com/photo/2016/03/26/01/17/treble-clef-1279909_960_720.png',
          }}
        />
      </View>
      <Text style={styles.txttopo}>
        Escola de Inicialização Musical Ancilas do Menino Jesus
      </Text>
      <View style={styles.botao}>
        <View>
          <Button
            title="    Professor    "
            color="darkblue"
            onPress={() => navigation.navigate('LoginP')}
          />
        </View>
      </View>
      <View style={styles.botao}>
        <Button
          title="        Aluno        "
          color="darkblue"
          onPress={() => navigation.navigate('LoginA')}
        />
      </View>

      <View style={styles.botao}>
        <Button
          title="Onde Estamos?"
          color="darkblue"
          onPress={() => navigation.navigate('Mapa')}
        />
      </View>
    </ScrollView>
  </SafeAreaView>
);

Login.navigationOptions = {
  title: 'Login',
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    padding: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  txttopo: {
    fontSize: 25,
    padding: 5,
    textAlign: 'center',
    flex: 1,
    color: 'black',
  },
  botao: {
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 10,
    marginTop: 15,
    fontWeight: 'bold',
    justifyContent: 'center',
    position: 'relative',
    borderRadius: 25,
    backgroundColor: 'darkblue',
  },
  img: {
    fontSize: 15,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
