import React from 'react';
import { View, Text} from 'react-native';

import { styles } from './PessoaItemListStyle';

type Props={
    id:number,
    nome:string,
    idade:number,
    
}

export function PessoaItemList(props:Props) {
  return (
    <View style={styles.container}>
        <Text> {props.id} {props.nome} {props.idade} </Text> 
    </View>
  );
}