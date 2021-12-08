import React from 'react';
import {StyleSheet, FlatList, ActivityIndicator, Text, View, Image , TouchableOpacity } from 'react-native';

export default class Forum extends React.Component {

  constructor(props){
    super(props);
    this.state ={ 
      isLoading: true,

      akttema:1,

      dataSource:[],
      dataSource2:[]

    }
	
	setInterval(()=> {
        this.kivalaszt(this.state.akttema)
     }, 2000);
  }

  


  componentDidMount(){
    return fetch('http://172.16.0.198:3000/kerdes')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });
        this.kivalaszt(1)


      })
      .catch((error) =>{
        console.error(error);
      });
  }

  kivalaszt=async (szam)=>{
    //alert(szam)
    this.setState({akttema:szam})

    let bemenet={
      bevitel1:szam
    }
    return fetch('http://172.16.0.198/kerdes',{
      method: "POST",
      body: JSON.stringify(bemenet),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    }
       
    )
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        dataSource2: responseJson,
      }, function(){

        //alert(JSON.stringify(this.state.dataSource2))
      });

    })
    .catch((error) =>{
      console.error(error);
    });

  }


  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20,backgroundColor:'black'}}>
      
<View style={{alignItems:"center"}}>
       <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 

 
         <TouchableOpacity
        style={{backgroundColor:"grey",width:150,margin:10,borderRadius:10}}
        onPress={async ()=>this.kivalaszt(item.komment_id)}
      >
        <Text style={{color:"white",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}>{item.komment_nev} </Text>
         
      </TouchableOpacity>
   
       
        
        }
        
        
          keyExtractor={({komment_id}, index) => komment_id}
        />
           </View>









      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  kekgomb: {
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    width:300,
    marginLeft:"auto",
    marginRight:"auto",
  }
});