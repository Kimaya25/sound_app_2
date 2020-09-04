import * as React from 'react';
import { Button, View, Text, Alert } from 'react-native';
import{Audio} from 'expo-av';



  

export default class App extends React.Component {
  playSound = async() => {
    await Audio.Sound.createAsync(
      {uri : 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3'},
      {shouldPlay : true}
    )
  }
  render() {
    return (
      <View>
     <View style = {{width : 200 , height:100}}>
     <Button title = "sound1" color = "red" onPress = {this.playSound}/>
       
      </View>

      <View style = {{width : 200 , height: 100}}>
      <Button title = "sound2" color = "blue" onPress = {this.playSound}/>
      </View>

      <View style = {{width : 200 , height: 100}}>
      <Button title = "sound3" color = "yellow" onPress = {this.playSound}/>
      </View>

      <View style = {{width : 200 , height : 100}}>
      <Button title = "sound4" color = "green" onPress = {this.playSound}/>
      </View>
      
      </View>

      
    );
  }
}
