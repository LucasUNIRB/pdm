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
  Alert,
} from 'react-native';
import Constants from 'react';
function Separator() {
  return <View style={styles.separator} />;
}
const Esqueceu = ({ navigation }) => (
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
      <Text style={styles.txttopo}>Esqueci a Senha:</Text>
      <Text style={styles.textos}>Matricula:</Text>
      <TextInput
        keyboardType={'numeric'}
        style={styles.placeholder}
        placeholder="201814574"
      />
      <Separator />
      <Text style={styles.textos}>E-mail:</Text>
      <TextInput style={styles.placeholder} placeholder="joao@email.com" />
      <Separator />
      <View style={styles.botao}>
        <View>
          <Button
            title="Enviar"
            color="darkblue"
            onPress={() => Alert.alert('E-mail enviado com sucesso!')}
          />
        </View>
      </View>
      <View style={styles.botao}>
        <Button
          title="Voltar"
          color="darkblue"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </ScrollView>
  </SafeAreaView>
);

Esqueceu.navigationOptions = {
  title: 'Esqueceu',
};

export default Esqueceu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    padding: 25,
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },
  txttopo: {
    fontSize: 25,
    padding: 5,
    textAlign: 'center',
    flex: 1,
    color: 'black',
  },
  textos: {
    padding: 5,
    fontWeight: 'bold',
    color: 'black',
  },
  placeholder: {
    fontSize: 20,
    color: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
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
  separator: {
    marginVertical: 8,
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
