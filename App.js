import React, {useState} from 'react';
import { WebView } from 'react-native-webview';
import {TextInput, View, Text, Image, Button} from 'react-native'

const Coffee = props => {
    const [isPrepared, setIsPrepared] = useState(true);

        return(
            <View>
            <Text>Coffee</Text>
            <Text>Escolha o café</Text>
                <Image
                    source={{uri: '',}}
                    style={{width: 100, height: 100}}
                />
            <Text>Café Expresso{props.name}, {isPrepared? 'Preparando':'Retire'}!
            </Text>
            <Button
                onPress={() => {
                  setIsPrepared(false),
                  setTimeout(()=> {()=>{5},time});
                  }}
                  disabled={!isPrepared}
                  title={isPrepared ? 'Retire o produto' : 'Obrigado!'}
            />
        </View>
        );
       };


export default function App(){
return(
    <View>
        <TextInput
            style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            }}
        />
        <Coffe />
        <Coffe name='Café Expresso'/>
        <Coffe name='Capuccinno'/>
        <Coffe name='Café coado'/>
    </View>
   );
}