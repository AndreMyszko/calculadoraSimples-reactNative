// NOME:   ANDRE LUIZ BRANCO BELEM MYSZKO
// RA:     2019102420

import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function App() {
  const [numAtual, setNumAtual] = useState('');
  const [numFinal, setNumFinal] = useState('');

  const calcBtns = ['C', 'DEL', '.', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '-', '+', '*', '/', '=']

  function calcular() {
    let ultimoArr = numAtual[numAtual.length-1];
    
    if(ultimoArr === '/' || ultimoArr === '*' || ultimoArr === '-' || ultimoArr === '+' || ultimoArr === '.') {
      setNumAtual(numAtual)
      return
    }
    else {
      let result = eval(numAtual).toString();
      setNumAtual(result)
      return
    }
  }

  function handle(buttonPressed) {
    if(buttonPressed  === '+' || buttonPressed === '-' || buttonPressed === '*' || buttonPressed === '/') {
      setNumAtual(numAtual + buttonPressed)
      return
    }
    else if (
      buttonPressed === 1 || 
      buttonPressed === 2 || 
      buttonPressed === 3 || 
      buttonPressed === 4 || 
      buttonPressed === 5 ||
      buttonPressed === 6 || 
      buttonPressed === 7 || 
      buttonPressed === 8 || 
      buttonPressed === 9 ||
      buttonPressed === 0 || 
      buttonPressed === '.' 
      ) {/*aguarda.. pois pode concatenar mais números / ".", ou escolher operação*/}
    switch(buttonPressed) {
      case 'DEL':
        setNumAtual(numAtual.substring(0, (numAtual.length - 1)))
        return
      case 'C':
        setNumFinal('')
        setNumAtual('')
        return
      case '=':
        setNumFinal(numAtual + '=')
        calcular()
        return
    }
    setNumAtual(numAtual + buttonPressed)
  }

  const styles = StyleSheet.create({
    resultado: {
      backgroundColor: '#f5f5f5',
      maxWidth: '100%',
      minHeight: '35%',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    },
    txtResultado: {
      maxHeight: 45,
      margin: 15,
      fontSize: 35,
    },
    txtHistorico: {
      color: '#7c7c7c',
      fontSize: 20,
      marginRight: 10,
      alignSelf: 'flex-end',
    },
    calcBtns: {
      width: '100%',
      height: '35%',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    btn: {
      borderColor: '#e5e5e5',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: '24%',
      minHeight: '54%',
      flex: 2,
    },
    txtBtn: {
      color: '#7c7c7c',
      fontSize: 26,
    }
  })

  return(
    <View>
      <View style={styles.resultado}>
        <Text style={styles.txtHistorico}>{numFinal}</Text>
        {numAtual == '' ? 
          <Text style={styles.txtResultado}> 0 </Text> : 
          <Text style={styles.txtResultado}>{numAtual}</Text>
        }
      </View>
      <View style={styles.calcBtns}>
        {calcBtns.map((btn) =>
          <TouchableOpacity key={btn} style={[styles.btn]} onPress={() => handle(btn)}>
            <Text style={[styles.txtBtn]}>{btn}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}