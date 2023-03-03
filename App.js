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
            <Text>Café Expresso{props}, {isPrepared? 'Preparando':'Retire'}!
            </Text>
            <Button
                onPress={() => {
                  setIsPrepared(false),
                  setTimeout(()=> {()=>{5},time});
                  }}
                  disabled={!isPrepared}
                  title={isHungry ? 'Retire o produto' : 'Obrigado!'}
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
        <Cat />
        <Cat name='Café Expresso'/>
        <Cat name='Capuccinno'/>
        <Cat name='Café coado'/>
    </View>
   );
}

