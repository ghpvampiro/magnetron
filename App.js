import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {Logotron, Viewtron, Conteinertron, Textron, Buttontron, TextronButton} from './src/components/stylesheet/globalstyle';
import {Accelerometer} from 'expo-sensors';
import * as Speech from 'expo-speech'

export default function App() {

const [data, setData] = useState({});
useEffect(() => {
_ativarAcelerometro();
}, []);


const _ativarAcelerometro = () => {
Accelerometer.addListener(accelerometerData => {
setData(accelerometerData);
});
};

const { x, y, z } = data;

//Função responsável pela fala

function falar(){

  let _x, _y, _z;

  _x = x;
  _y = y;
  _z = z;

  let frase = 'Valor do Eixo X é igual à' + round(_x) 
  + ', Valor do Eixo Y é igual à' + round(_y)
  + 'e Valor do Eixo Z é igual à' + round(_z);

  
  
  Speech.speak(frase);
  
  }

return (
<Conteinertron>
<Textron>Seja Bem Vindo ao SENSORTRON</Textron>
<Viewtron>
<Logotron source={require('./assets/sensor.png')} />
<Textron>Aperte o botão para ouvir o valor dos eixos</Textron>

<Textron>
x: {round(x)} y: {round(y)} z: {round(z)}
</Textron>

<Buttontron onPress={falar}><TextronButton>Falar</TextronButton></Buttontron>


</Viewtron>
<Textron>Criado por Gustavo Patricio</Textron>
</Conteinertron>
);
}

function round(n) {
if (!n) {
return 0;
}

return Math.floor(n * 100) / 100;
}

//<Logotron source={require('./assets/magneton.jpg')} />
