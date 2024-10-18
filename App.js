import React, { Component } from 'react';
import {
  View, 
  Text,
  StyleSheet,
  TouchableOpacity,
  Image 
} from 'react-native';

class App extends Component{
constructor(props){
  super(props);
  this.state={
  textoFrase:'',
  img: require('./src/biscoito.png')
  };
this.quebraBiscoito = this.quebraBiscoito.bind(this);

this.frases = [
    "A sorte sorrirá para você em breve.",
    "Seu esforço será recompensado com sucesso.",
    "Uma nova amizade está a caminho.",
    "Prepare-se para uma surpresa agradável.",
    "Você encontrará felicidade nas pequenas coisas.",
    "Um novo desafio trará grandes oportunidades.",
    "A paz interior será seu maior tesouro.",
    "Um velho sonho pode se tornar realidade.",
    "A criatividade será sua aliada nos próximos dias.",
    "Aja com coragem e o sucesso virá.",
    "Você está prestes a fazer uma grande descoberta.",
    "O amor está no ar; esteja aberto para recebê-lo.",
    "A gratidão trará mais bênçãos à sua vida.",
    "A paciência é o caminho para a felicidade.",
    "Alguém especial está pensando em você.",
    "A sorte é uma questão de estar preparado.",
    "Um conselho sábio está a caminho.",
    "Você tem o poder de mudar sua realidade.",
    "Um momento de silêncio revelará a verdade.",
    "Seu coração sabe o caminho a seguir; ouça-o."
  ];

}
quebraBiscoito(){
 //declarando variavel que funciona como um contador aleatorio para as frases aparecerem.
  let numeroAleatorio = Math.floor(Math.random() * this.frases.length)

  this.setState({
  textoFrase: '"' + this.frases[numeroAleatorio] + '"',
  img: require('./src/biscoitoAberto.png')  
})


}

  render(){
    
    return(
    <View style={styles.container} >
      <Image  
      source={this.state.img}
      style={styles.img}
      />
      <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>
        <TouchableOpacity style={styles.botao}  onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#fad7f2'
  },
   img:{
    width:120,
    height:300
   },
   textoFrase:{
    fontSize:20,
    color:'#dd7b22',
    margin:'30',
    textAlign:'center',
    fontStyle:'italic'
   },
   botao:{
    width:230,
    borderWidth:2,
    borderRadius:25,
    borderColor: '#dd7b22',
    height:50
   },
   btnArea:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
   },
   btnTexto:{
    fontWeight:'bold',
    color: '#dd7b22',
    fontSize:18 
   }
});
export default App;

