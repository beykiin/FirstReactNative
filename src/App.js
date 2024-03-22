import React from 'react'
import { Button, SafeAreaView, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Card from './components/Card'

function App() {
  // function sayHello(){
  //   console.log("Hi!")
  // }
  // const sayHello2 = () => {
  //   console.log("I am saying hello to you.")
  // }
  // const sayHello3 = label => {
  //   console.log("I am saying hello to you."+label)
  // }
  return (
    <SafeAreaView style={styles.container}>

        <Card title="Eddard Stark" text="Winter is coming..."/>
        <Card title="Albert Einstein" text="Imagination is more important than knowledge..."/>
        <Card title="Marcus Aurelius" text="Appreciate the value of your life..."/>

      {/* <View style={styles.card_container}>
        <View style={styles.card_body}>
          <Text style={styles.card_title}>Eddard Stark</Text>
          <Text style={styles.card_text}>Winter is coming...</Text>
          <TouchableOpacity style={styles.card_button_container}>
            <Text style={styles.card_button_text}>I LIKED</Text>
          </TouchableOpacity>
        </View>
      </View> 
      <View style={styles.card_container}>
        <View style={styles.card_body}>
          <Text style={styles.card_title}>Albert Einstein</Text>
          <Text style={styles.card_text}>Imagination is more important than knowledge...</Text>
          <TouchableOpacity style={styles.card_button_container}>
            <Text style={styles.card_button_text}>I LIKED</Text>
          </TouchableOpacity>
        </View>
      </View> 
      <View style={styles.card_container}>
        <View style={styles.card_body}>
          <Text style={styles.card_title}>Marcus Aurelius</Text>
          <Text style={styles.card_text}>Appreciate the value of your life...</Text>
          <TouchableOpacity style={styles.card_button_container}>
            <Text style={styles.card_button_text}>I LIKED</Text>
          </TouchableOpacity>
          
        </View>
        
      </View>  */}
      
      
      {/* <View style= {styles.box_1}/>
      <View style= {styles.box_2}/>
      <View style= {styles.box_3}/>
      <View style= {styles.box_4}/> */}
      {/* <View style= {styles.upper_view_container}>
        <Text style={styles.upper_text}>Yasin Beken</Text>  
      </View> */}
      {/* <View style= {styles.mid_view_container}>
        <Text style={styles.mid_text}>Hello World</Text>
        
      </View>
      <View style= {styles.bottom_view_container}>
        <Text style={styles.bottom_text}>Life is Good</Text>
        
      </View> */}
      {/* <Text>Hello World2</Text>
      <Button title='Here Press me!' onPress={()=>{console.log("Hello!")}}/>
      <Button title='Here Press me!' onPress={sayHello}/>
      <Button title='Here Press me!' onPress={sayHello2}/>
      <Button title='Here Press me!' onPress={()=>sayHello3(" Yasin :)")}/>
      {/* disabled 
      <Button title='Here Press me!' onPress={()=>sayHello3(" Yasin :)")} disabled= {true} />
      <Button title='Here Press me!' onPress={()=>sayHello3(" Yasin :)")} disabled= {false} />
      <Button title='Here Press me!' onPress={()=>sayHello3(" Yasin :)")} disabled/>
      {/* color 
      <Button title='Here Press me!' onPress={()=>sayHello3(" Yasin :)")} disabled= {false} color="lightcoral"/> */}
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#e0e0e0',
    
  },
  // card_container:{

  //   backgroundColor:'azure',
  //   margin:10,
  //   borderWidth:1,
  //   borderColor: 'grey',
  //   borderRadius:10,
  // },
  // card_body:{
  //   padding:5,
    
  // },
  // card_title:{
  //   fontSize:25,
  //   fontWeight:'bold',
  //   margin:10,
  //   marginBottom:2,
  //   textAlign: "center",
    
  // },
  // card_text:{
  //   fontSize:18,
  //   fontWeight:'bold',
  //   margin:10,
  //   matginTop:2,
  //   textAlign: "center",
  // },
  // card_button_container:{
  //   backgroundColor:'#00C2FF',
  //   padding:10,
  //   alignItems: 'center',
  //   borderRadius:10,
    
  // },
  // card_button_text:{
  //   fontWeight: "bold",
  //   color:"azure",
  //   fontSize:17,
  // }
  
  // container: {flex:1,
  //   flexDirection: 'row', 
  //   backgroundColor: 'yellow',
  //   justifyContent:'space-evenly',
  //   alignItems:'flex-end',
    
  // },
  
  // box_1:{
  //   width:75,
  //   height:75,
  //   backgroundColor:'powderblue',
  //   borderRadius:10,
  
  // },
  // box_2:{
  //   width:75,
  //   height:75,
  //   backgroundColor:'plum',
  //   borderRadius:10,
  // },
  // box_3:{
  //   width:75,
  //   height:75,
  //   backgroundColor:'pink',
  //   borderRadius:10,
  // },
  // box_4:{
  //   width:75,
  //   height:75,
  //   backgroundColor:'papayawhip',
  //   borderRadius:10,
    
  // },
  // upper_view_container:{
  //   flex:1,
  //   backgroundColor:'black',
  //   margin:50,
  //   padding:10,
  //   borderRadius:10,
    
  // },
  // bottom_view_container:{
  //   flex:1,
  //   backgroundColor:'yellow',
  //   margin:50,
  //   padding:10,
  //   borderRadius:10,
    
  // },
  // mid_view_container:{
  //   flex:1,
  //   backgroundColor:'purple',
  //   margin:50,
  //   padding:10,
  //   borderRadius:10,
    
  // },
  // upper_text:{
  //   color:'yellow',
  //   textAlign: 'center',
  //   fontWeight: "bold",
  //   fontSize:20,
  // },
  // mid_text:{
  //   color:'white',
  //   textAlign: 'center',
  //   fontWeight: "bold",
  //   fontSize:20,
  // },
  // bottom_text:{
  //   color:'black',
  //   textAlign: 'center',
  //   fontWeight: "bold",
  //   fontSize:20,
  // }
})

export default App