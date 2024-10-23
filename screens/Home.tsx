import React from 'react';
import { SafeAreaView, View,Text, ScrollView } from 'react-native';
import { PessoaItemList } from '../components/PessoaItemList';
import { styles } from './HomeStyle';

export function BlueBox() {
  return <View style={{
        height:100,
        width:"33%",
        flex:1,
        backgroundColor:'blue',

        alignSelf:'flex-end'
    }}>
    </View>
}
export function GreenBox() {
  return <View style={{
        height:100,

        width:"33%",
        flex:5,
        backgroundColor:'green',
        alignSelf:'center'
    }}>
    </View>
}
export function RedBox() {
  return <View style={{

        height:100,
        width:"33%",
        flex:2,
        backgroundColor:'red',

    }}>
    </View>
}


type Pessoa = {
    id:number;
    nome:string;
    idade:number
}

let listaPessoas: Pessoa[] = [
    {id:1, nome:"Sara", idade:23 },
    {id:2, nome:"Juquinha", idade:33 },
    {id:3, nome:"Mariazinha", idade:26 },
    {id:4, nome:"pedrinho", idade:36 },
] 


export function Home(){
    return(
        <ScrollView style={styles.container}>
            
            
                {listaPessoas.map((Pessoa)=>(
                   <PessoaItemList id={Pessoa.id} nome={Pessoa.nome} idade={Pessoa.idade} />
                ))}
            
        </ScrollView>
    )

}