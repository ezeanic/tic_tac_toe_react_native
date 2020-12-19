import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import ActualPuzzle from './components/ActualPuzzle';
import { Platform, StyleSheet, Text, View, FlatList, Button } from 'react-native';

export default class App extends React.Component {
   constructor(){
    super();
    this.state={
      countval: "X",
      timearound: 0,
      scorecountuser: 0,
      scorecountcomputer: 0,
      boxes: [{id:0, value: "", boxcolor: "#d9dfe0", clickable: true}, {id:1, value: "", boxcolor: "#d9dfe0", clickable: true},{id:2, value: "", boxcolor: "#d9dfe0", clickable: true},
              {id:3, value: "", boxcolor: "#d9dfe0", clickable: true}, {id:4, value: "", boxcolor: "#d9dfe0", clickable: true},{id:5, value: "", boxcolor: "#d9dfe0", clickable: true},
              {id:6, value: "", boxcolor: "#d9dfe0", clickable: true}, {id:7, value: "", boxcolor: "#d9dfe0", clickable: true},{id:8, value: "", boxcolor: "#d9dfe0", clickable: true},
      ]
    }
  }

  changevalState(val, valtext){
    //clear
    if(val == 100){
        this.setState({boxes: [{id:0, value: "", boxcolor: "#d9dfe0", clickable: true}, {id:1, value: "", boxcolor: "#d9dfe0", clickable: true},{id:2, value: "", boxcolor: "#d9dfe0", clickable: true},
        {id:3, value: "", boxcolor: "#d9dfe0", clickable: true}, {id:4, value: "", boxcolor: "#d9dfe0", clickable: true},{id:5, value: "", boxcolor: "#d9dfe0", clickable: true},
        {id:6, value: "", boxcolor: "#d9dfe0", clickable: true}, {id:7, value: "", boxcolor: "#d9dfe0", clickable: true},{id:8, value: "", boxcolor: "#d9dfe0", clickable: true},
        ]});
      return;
    }
    
    let boxeslist = this.state.boxes;       
    
    if(this.state.boxes[val].value == ""){
      // if(this.state.countval == "X"){
      //   this.setState({countval: "O"});
      // }else{
      //   this.setState({countval: "X"});
      // }
      this.setState({countval: valtext});
      // if(valtext == "O"){
      //   do{
      //       val = Math.floor(Math.random() * (9 - 0) + 0);
      //     }while(boxeslist[val].clickable == false);
      // }
      boxeslist[val].value = valtext;
      boxeslist[val].clickable = false;
    }
    
    if(boxeslist[0].value=="X" && boxeslist[1].value=="X"  && boxeslist[2].value=="X" || boxeslist[0].value=="O" && boxeslist[1].value=="O" && boxeslist[2].value=="O"){
      boxeslist[0].boxcolor = "green";
      boxeslist[1].boxcolor = "green";
      boxeslist[2].boxcolor = "green";

      if(valtext == "X"){
        let vald = this.state.scorecountuser++;
        this.setState({scorecountuser: vald})
      }else{
        this.setState({scorecountcomputer: this.state.scorecountcomputer++})
      }
    }
    else if((boxeslist[3].value=="X" && boxeslist[4].value=="X"  && boxeslist[5].value=="X") || (boxeslist[3].value=="O" && boxeslist[4].value=="O" && boxeslist[5].value=="O")){
      boxeslist[3].boxcolor = "green";
      boxeslist[4].boxcolor = "green";
      boxeslist[5].boxcolor = "green";

      if(valtext == "X"){
        this.setState({scorecountuser: this.state.scorecountuser++})
      }else{
        this.setState({scorecountcomputer: this.state.scorecountcomputer++})
      }
    }
    else if((boxeslist[6].value=="X" && boxeslist[7].value=="X"  && boxeslist[8].value=="X") || (boxeslist[6].value=="O" && boxeslist[7].value=="O" && boxeslist[8].value=="O")){
      boxeslist[6].boxcolor = "green";
      boxeslist[7].boxcolor = "green";
      boxeslist[8].boxcolor = "green";

      if(valtext == "X"){
        this.setState({scorecountuser: this.state.scorecountuser++})
      }else{
        this.setState({scorecountcomputer: this.state.scorecountcomputer++})
      }
    }
    else if((boxeslist[0].value=="X" && boxeslist[3].value=="X"  && boxeslist[6].value=="X") || (boxeslist[0].value=="O" && boxeslist[3].value=="O" && boxeslist[6].value=="O")){
      boxeslist[0].boxcolor = "green";
      boxeslist[3].boxcolor = "green";
      boxeslist[6].boxcolor = "green";

      if(valtext == "X"){
        this.setState({scorecountuser: this.state.scorecountuser++})
      }else{
        this.setState({scorecountcomputer: this.state.scorecountcomputer++})
      }
    }
    else if((boxeslist[1].value=="X" && boxeslist[4].value=="X"  && boxeslist[7].value=="X") || (boxeslist[1].value=="O" && boxeslist[4].value=="O" && boxeslist[7].value=="O")){
      boxeslist[1].boxcolor = "green";
      boxeslist[4].boxcolor = "green";
      boxeslist[7].boxcolor = "green";

      if(valtext == "X"){
        this.setState({scorecountuser: this.state.scorecountuser++})
      }else{
        this.setState({scorecountcomputer: this.state.scorecountcomputer++})
      }
    }
    else if((boxeslist[2].value=="X" && boxeslist[5].value=="X"  && boxeslist[8].value=="X") || (boxeslist[2].value=="O" && boxeslist[5].value=="O" && boxeslist[8].value=="O")){
      boxeslist[2].boxcolor = "green";
      boxeslist[5].boxcolor = "green";
      boxeslist[8].boxcolor = "green";

      if(valtext == "X"){
        this.setState({scorecountuser: this.state.scorecountuser++})
      }else{
        this.setState({scorecountcomputer: this.state.scorecountcomputer++})
      }
    }
    else if((boxeslist[0].value=="X" && boxeslist[4].value=="X"  && boxeslist[8].value=="X") || (boxeslist[0].value=="O" && boxeslist[4].value=="O" && boxeslist[8].value=="O")){
      boxeslist[0].boxcolor = "green";
      boxeslist[4].boxcolor = "green";
      boxeslist[8].boxcolor = "green";

      if(valtext == "X"){
        this.setState({scorecountuser: this.state.scorecountuser++})
      }else{
        this.setState({scorecountcomputer: this.state.scorecountcomputer++})
      }
    }
    else if((boxeslist[2].value=="X" && boxeslist[4].value=="X"  && boxeslist[6].value=="X") || (boxeslist[2].value=="O" && boxeslist[4].value=="O" && boxeslist[6].value=="O")){
      boxeslist[2].boxcolor = "green";
      boxeslist[4].boxcolor = "green";
      boxeslist[6].boxcolor = "green";

      if(valtext == "X"){
        this.setState({scorecountuser: this.state.scorecountuser++})
      }else{
        this.setState({scorecountcomputer: this.state.scorecountcomputer++})
      }
    }
    
    console.log("You play   -> " + this.state.scorecountuser);
    console.log("computer play  -> " + this.state.scorecountcomputer);

    if(this.state.timearound == 0){
        do{
        val = Math.floor(Math.random() * (9 - 0) + 0);
      }while(boxeslist[val].clickable == false);
      
      setTimeout(
        function() {
          this.changevalState(val, "O");
        }
        .bind(this),
        1000
      );
      this.state.timearound = 1;
    }else{
      this.state.timearound = 0;
    }
    
    this.setState({boxes: boxeslist}); 
  }

  render(){  
    return (
      <View style={styles.container}>
        <ActualPuzzle stateChange={stateInput => this.setState({ boxes: stateInput})} arrayBoxes={this.state.boxes} changevalState={(val, valtext)=>{this.changevalState(val, valtext)}}/>
        <Text>{this.state.scorecountuser} {this.state.scorecountcomputer}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#a8a9a8"
  },
  
});
