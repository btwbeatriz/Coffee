import React, {useState} from 'react';
import { View, Text, Image, Button} from 'react-native'

const Coffee = props => {
    const [isPrepared, setIsPrepared] = useState(true);

        return(
            <View>
            <Text>Coffee</Text>
            <Text>Escolha o café</Text>
                <Image
                    source={{uri: 'https://media.istockphoto.com/id/1286808993/pt/foto/black-coffee-isolated-on-a-white-background.jpg?s=1024x1024&w=is&k=20&c=R4rvKR2vtT7eJuIGmLF1w2pyXLZrH078VSHAXzhJgHE=',}}
                    style={{width: 100, height: 100}}
                />
            <Text>Café Expresso{props.name}, {isPrepared? 'Preparando':'Retire'}!
            </Text>
            <Button
                  disabled={!isPrepared}
                  title={isPrepared ? 'Retire o produto' : 'Obrigado!'}
            />
        </View>
        )
                }
    <View>
    <Text>Escolha o cappucciono</Text>
        <Image
            source={{uri: 'https://media.istockphoto.com/id/505168330/pt/foto/copo-de-caf%C3%A9-latte-cafecom-gr%C3%A3os-de-caf%C3%A9-e-paus-de-canela.jpg?s=1024x1024&w=is&k=20&c=9gssV4ZKB1JPU7WezUGqYJLVXH0g00i3aXJX41uRa7k=',}}
            style={{width: 100, height: 100}}
        />
    <Text>Cappuccino {props.name}, {isPrepared? 'Preparando':'Retire'}!
    </Text>
    <Button
        disabled={!isPrepared}
        title={isPrepared ? 'Retire o produto' : 'Obrigado!'}
    />
    </View>
    
    
    <View>
    <Text>Escolha o cafe Coado</Text>
        <Image
            source={{uri: '',}}
            style={{width: 100, height: 100}}
        />
    <Text>Cafe Coado {props.name}, {isPrepared? 'Preparando':'Retire'}!
    </Text>
    <Button
        disabled={!isPrepared}
        title={isPrepared ? 'Retire o produto' : 'Obrigado!'}
    />
    </View>


export default function App(){
return(
    <View>
        <Coffe />
        <Coffe name='Café Expresso'/>
        <Coffe name='Capuccinno'/>
        <Coffe name='Café coado'/>
    </View>
   );
}