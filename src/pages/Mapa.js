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
  ImageBackground,
} from 'react-native';
import MapView from 'react-native-maps';
import Constants from 'expo-constants';

const Mapa = ({ navigation }) => (
  <SafeAreaView style={styles.map}>
    <MapView style={styles.map}
                initialRegion = {{            
                    latitude: -12.876054,
                    longitude: -38.436156,
                    latitudeDelta: 0.0042,
                    longitudeDelta: 0.0031
                }}
                rotateEnabled={false}
                showsPointsOfInterest={false}
                showsBuildings={false}
            > 
                <MapView.Marker
                    coordinate={{
                        latitude: -12.876054,
                        longitude: -38.436156,
                        latitudeDelta: 0.0042,
                        longitudeDelta: 0.0031
                    }}
                    title={'Escola de Iniciação Musical'}
                />
            </MapView>
            <View style={styles.botao}>
              <Button
              title="Voltar"
              color="darkblue"
              onPress={() => navigation.navigate('Login')}
              />
            </View>
  </ SafeAreaView>
            
);
Mapa.navigationOptions = {
  title: 'Mapa',
};

export default Mapa;

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  botao: {
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 10,
    marginTop: 523,
    fontWeight: 'bold',
    justifyContent: 'center',
    position: 'relative',
    borderRadius: 25,
    backgroundColor: 'darkblue',
  },
});
