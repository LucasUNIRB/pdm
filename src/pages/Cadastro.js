import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Alert,
  SafeAreaView,
  ScrollView,
  Button,
  Image,
} from 'react-native';
import Constants from 'expo-constants';
function Separator() {
  return <View style={styles.separator} />;
}

const Cadastro = ({ navigation }) => (
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
      <Text style={styles.txttopo}>Cadastro de aluno:</Text>
      <Text style={styles.textos}>Nome Completo:</Text>
      <TextInput
        keyboardType={'numeric'}
        style={styles.placeholder}
        placeholder="  João"
      />
      <Separator />
      <Text style={styles.textos}>Telefone:</Text>
      <TextInput
        keyboardType={'numeric'}
        style={styles.placeholder}
        placeholder="  912345678"
      />
      <Separator />
      <Text style={styles.textos}>CPF:</Text>
      <TextInput
        keyboardType={'numeric'}
        style={styles.placeholder}
        placeholder="  123.213.123-51"
      />
      <Separator />
      <Text style={styles.textos}>Endereço:</Text>
      <TextInput
        keyboardType={'numeric'}
        style={styles.placeholder}
        placeholder="  Rua: Tancredo Neves"
      />
      <Separator />
      <Text style={styles.textos}>Curso:</Text>
      <TextInput
        keyboardType={'numeric'}
        style={styles.placeholder}
        placeholder="  Violão"
      />
      <Separator />
      <Text style={styles.textos}>Senha:</Text>
      <TextInput
        keyboardType={'numeric'}
        style={styles.placeholder}
        placeholder="   12345678"
      />
      <Separator />
      <View style={styles.botao}>
        <View>
          <Button
            title="Cadastrar"
            color="darkblue"
            onPress={() =>
              Alert.alert(
                'Alerta',
                'Deseja cadastrar o aluno ?',
                [
                  { text: 'Não', onPress: () => console.log('Voltar') },
                  {
                    text: 'Sim',
                    onPress: () =>
                      Alert.alert(
                        ' ',
                        'Aluno cadastrado com Sucesso.',
                        [
                          {
                            text: 'Voltar',
                            onPress: () => console.log('Voltar'),
                          },
                        ],
                        { cancelable: false }
                      ),
                  },
                ],
                { cancelable: false }
              )
            }
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

Cadastro.navigationOptions = {
  title: 'Cadastro',
};

export default Cadastro;

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
