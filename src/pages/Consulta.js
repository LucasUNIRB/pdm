import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ScrollView,
  Alert,
  Button,
  Image,
} from 'react-native';
import Constants from 'expo-constants';
function Separator() {
  return <View style={styles.separator} />;
}

const Consulta = ({ navigation }) => (
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
      <Text style={styles.txttopo}>Área de Consulta:</Text>

      <Text style={styles.textos}>Matricula:</Text>
      <TextInput
        style={styles.placeholder2}
        placeholder="   12345678"
        keyboardType={'numeric'}
      />
      <Separator />
      <Text style={styles.textos}>Nome:</Text>
      <TextInput
        style={styles.placeholder}
        placeholder="   Ex. João"
        editable={false}
      />
      <Separator />
      <Text style={styles.textos}>Sala:</Text>
      <TextInput
        style={styles.placeholder}
        placeholder="   Ex. B13"
        editable={false}
      />
      <Separator />
      <Text style={styles.textos}>Curso:</Text>
      <TextInput
        style={styles.placeholder}
        placeholder="   Ex. Violão"
        editable={false}
      />
      <Separator />
      <Text style={styles.textos}>Professor:</Text>
      <TextInput
        style={styles.placeholder}
        placeholder="   Ex. Igor"
        editable={false}
      />
      <Separator />
      <View style={styles.botao}>
        <Button
          title="Consultar"
          color="darkblue"
          onPress={() => Alert.alert('Consultando')}
        />
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

Consulta.navigationOptions = {
  title: 'Consulta',
};

export default Consulta;

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
    fontSize: 15,
    padding: 5,
    fontWeight: 'bold',
    color: 'black',
  },
  placeholder: {
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
