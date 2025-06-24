import { Text, View, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons';
import styles from './style.js';

export default function Cabecalho(){

    return(

            <View style={styles.viewHeader}> 
        
              <Text style={[styles.textHeader, {textShadowOffset: {height: 3, width: 3}, textShadowColor: "rgb(89, 0, 255)"}]}> Brothers Universe </Text>
        
            </View>
    )
}