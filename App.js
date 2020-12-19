import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import ActualPuzzle from './components/ActualPuzzle';
import { Platform, StyleSheet, Text, View, FlatList, Button } from 'react-native';

export default class App extends React.Component {
   constructor(){
    super();
    this.state={
      countval: "X",
      computerstate: "Your turn",
      winGame: "",
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
    this.state.winGame = ""
    let boxeslist = this.state.boxes;       
    
    if(this.state.boxes[val].value == ""){
      
      this.setState({countval: valtext});
      
      boxeslist[val].value = valtext;
      boxeslist[val].clickable = false;
    }
    
    if(boxeslist[0].value=="X" && boxeslist[1].value=="X"  && boxeslist[2].value=="X" || boxeslist[0].value=="O" && boxeslist[1].value=="O" && boxeslist[2].value=="O"){
      
      if(valtext === "X"){
        this.state.scorecountuser++;
        this.state.winGame = "You win";
        boxeslist[0].boxcolor = "green";
        boxeslist[1].boxcolor = "green";
        boxeslist[2].boxcolor = "green";
      }else{
        this.state.scorecountcomputer++;
        this.state.winGame = "Computer wins";
        boxeslist[0].boxcolor = "red";
        boxeslist[1].boxcolor = "red";
        boxeslist[2].boxcolor = "red";
      }
      this.state.computerstate="";

      setTimeout(
        function() {
          this.setState({computerstate: "",
          winGame: "", boxes: [{id:0, value: "", boxcolor: "#d9dfe0", clickable: true}, {id:1, value: "", boxcolor: "#d9dfe0", clickable: true},{id:2, value: "", boxcolor: "#d9dfe0", clickable: true},
          {id:3, value: "", boxcolor: "#d9dfe0", clickable: true}, {id:4, value: "", boxcolor: "#d9dfe0", clickable: true},{id:5, value: "", boxcolor: "#d9dfe0", clickable: true},
          {id:6, value: "", boxcolor: "#d9dfe0", clickable: true}, {id:7, value: "", boxcolor: "#d9dfe0", clickable: true},{id:8, value: "", boxcolor: "#d9dfe0", clickable: true},
          ]});
          return;
        }
        .bind(this),
        2000
      );
      
    }
    else if((boxeslist[3].value=="X" && boxeslist[4].value=="X"  && boxeslist[5].value=="X") || (boxeslist[3].value=="O" && boxeslist[4].value=="O" && boxeslist[5].value=="O")){
      

      if(valtext == "X"){
        this.state.scorecountuser++;
        this.state.winGame = "You win";
        boxeslist[3].boxcolor = "green";
        boxeslist[4].boxcolor = "green";
        boxeslist[5].boxcolor = "green";
      }else{
        this.state.computerstate++;
        this.state.winGame = "Computer wins";
        boxeslist[3].boxcolor = "red";
        boxeslist[4].boxcolor = "red";
        boxeslist[5].boxcolor = "red";
      }
      this.state.computerstate="";
      setTimeout(
        function() {
          this.setState({computerstate: "",
          winGame: "",boxes: [{id:0, value: "", boxcolor: "#d9dfe0", clickable: true}, {id:1, value: "", boxcolor: "#d9dfe0", clickable: true},{id:2, value: "", boxcolor: "#d9dfe0", clickable: true},
          {id:3, value: "", boxcolor: "#d9dfe0", clickable: true}, {id:4, value: "", boxcolor: "#d9dfe0", clickable: true},{id:5, value: "", boxcolor: "#d9dfe0", clickable: true},
          {id:6, value: "", boxcolor: "#d9dfe0", clickable: true}, {id:7, value: "", boxcolor: "#d9dfe0", clickable: true},{id:8, value: "", boxcolor: "#d9dfe0", clickable: true},
          ]});
          return;
        }
        .bind(this),
        2000
      );
  
    }
    else if((boxeslist[6].value=="X" && boxeslist[7].value=="X"  && boxeslist[8].value=="X") || (boxeslist[6].value=="O" && boxeslist[7].value=="O" && boxeslist[8].value=="O")){

      if(valtext == "X"){
        this.state.scorecountuser++;
        this.state.winGame = "You win";
        boxeslist[6].boxcolor = "green";
        boxeslist[7].boxcolor = "green";
        boxeslist[8].boxcolor = "green";
      }else{
        this.state.scorecountcomputer++;
        this.state.winGame = "Computer wins";
        boxeslist[6].boxcolor = "red";
        boxeslist[7].boxcolor = "red";
        boxeslist[8].boxcolor = "red";
      }
      this.state.computerstate="";
      setTimeout(
        function() {
          this.setState({boxes: [{computerstate: "",
          winGame: "",id:0, value: "", boxcolor: "#d9dfe0", clickable: true}, {id:1, value: "", boxcolor: "#d9dfe0", clickable: true},{id:2, value: "", boxcolor: "#d9dfe0", clickable: true},
          {id:3, value: "", boxcolor: "#d9dfe0", clickable: true}, {id:4, value: "", boxcolor: "#d9dfe0", clickable: true},{id:5, value: "", boxcolor: "#d9dfe0", clickable: true},
          {id:6, value: "", boxcolor: "#d9dfe0", clickable: true}, {id:7, value: "", boxcolor: "#d9dfe0", clickable: true},{id:8, value: "", boxcolor: "#d9dfe0", clickable: true},
          ]});
          return;
        }
        .bind(this),
        2000
      );
    }
    else if((boxeslist[0].value=="X" && boxeslist[3].value=="X"  && boxeslist[6].value=="X") || (boxeslist[0].value=="O" && boxeslist[3].value=="O" && boxeslist[6].value=="O")){

      if(valtext == "X"){
        this.state.scorecountuser++;
        this.state.winGame = "You win";
        boxeslist[0].boxcolor = "green";
        boxeslist[3].boxcolor = "green";
        boxeslist[6].boxcolor = "green";
      }else{
        this.state.scorecountcomputer++;
        this.state.winGame = "Computer wins";
        boxeslist[0].boxcolor = "red";
        boxeslist[3].boxcolor = "red";
        boxeslist[6].boxcolor = "red";
      }
      this.state.computerstate="";
      setTimeout(
        function() {
          this.setState({boxes: [{computerstate: "",
          winGame: "",id:0, value: "", boxcolor: "#d9dfe0", clickable: true}, {id:1, value: "", boxcolor: "#d9dfe0", clickable: true},{id:2, value: "", boxcolor: "#d9dfe0", clickable: true},
          {id:3, value: "", boxcolor: "#d9dfe0", clickable: true}, {id:4, value: "", boxcolor: "#d9dfe0", clickable: true},{id:5, value: "", boxcolor: "#d9dfe0", clickable: true},
          {id:6, value: "", boxcolor: "#d9dfe0", clickable: true}, {id:7, value: "", boxcolor: "#d9dfe0", clickable: true},{id:8, value: "", boxcolor: "#d9dfe0", clickable: true},
          ]});
          return;
        }
        .bind(this),
        2000
      );
    }
    else if((boxeslist[1].value=="X" && boxeslist[4].value=="X"  && boxeslist[7].value=="X") || (boxeslist[1].value=="O" && boxeslist[4].value=="O" && boxeslist[7].value=="O")){

      if(valtext == "X"){
        this.state.scorecountuser++;
        this.state.winGame = "You win";
        boxeslist[1].boxcolor = "green";
        boxeslist[4].boxcolor = "green";
        boxeslist[7].boxcolor = "green";
      }else{
        this.state.scorecountcomputer++;
        this.state.winGame = "Computer wins";
        boxeslist[1].boxcolor = "red";
        boxeslist[4].boxcolor = "red";
        boxeslist[7].boxcolor = "red";
      }
      this.state.computerstate="";
      setTimeout(
        function() {
          this.setState({boxes: [{computerstate: "",
          winGame: "",id:0, value: "", boxcolor: "#d9dfe0", clickable: true}, {id:1, value: "", boxcolor: "#d9dfe0", clickable: true},{id:2, value: "", boxcolor: "#d9dfe0", clickable: true},
          {id:3, value: "", boxcolor: "#d9dfe0", clickable: true}, {id:4, value: "", boxcolor: "#d9dfe0", clickable: true},{id:5, value: "", boxcolor: "#d9dfe0", clickable: true},
          {id:6, value: "", boxcolor: "#d9dfe0", clickable: true}, {id:7, value: "", boxcolor: "#d9dfe0", clickable: true},{id:8, value: "", boxcolor: "#d9dfe0", clickable: true},
          ]});
          return;
        }
        .bind(this),
        2000
      );
    }
    else if((boxeslist[2].value=="X" && boxeslist[5].value=="X"  && boxeslist[8].value=="X") || (boxeslist[2].value=="O" && boxeslist[5].value=="O" && boxeslist[8].value=="O")){

      if(valtext == "X"){
        this.state.scorecountuser++;
        this.state.winGame = "You win";
        boxeslist[2].boxcolor = "green";
        boxeslist[5].boxcolor = "green";
        boxeslist[8].boxcolor = "green";
      }else{
        this.state.scorecountcomputer++;
        this.state.winGame = "Computer wins";
        boxeslist[2].boxcolor = "red";
        boxeslist[5].boxcolor = "red";
        boxeslist[8].boxcolor = "red";
      }
      this.state.computerstate="";
      setTimeout(
        function() {
          this.setState({boxes: [{computerstate: "",
          winGame: "",id:0, value: "", boxcolor: "#d9dfe0", clickable: true}, {id:1, value: "", boxcolor: "#d9dfe0", clickable: true},{id:2, value: "", boxcolor: "#d9dfe0", clickable: true},
          {id:3, value: "", boxcolor: "#d9dfe0", clickable: true}, {id:4, value: "", boxcolor: "#d9dfe0", clickable: true},{id:5, value: "", boxcolor: "#d9dfe0", clickable: true},
          {id:6, value: "", boxcolor: "#d9dfe0", clickable: true}, {id:7, value: "", boxcolor: "#d9dfe0", clickable: true},{id:8, value: "", boxcolor: "#d9dfe0", clickable: true},
          ]});
          return;
        }
        .bind(this),
        2000
      );
    }
    else if((boxeslist[0].value=="X" && boxeslist[4].value=="X"  && boxeslist[8].value=="X") || (boxeslist[0].value=="O" && boxeslist[4].value=="O" && boxeslist[8].value=="O")){
      if(valtext == "X"){
        this.state.scorecountuser++;
        this.state.winGame = "You win";
        boxeslist[0].boxcolor = "green";
        boxeslist[4].boxcolor = "green";
        boxeslist[8].boxcolor = "green";
      }else{
        this.state.scorecountcomputer++;
        this.state.winGame = "Computer wins";
        boxeslist[0].boxcolor = "red";
        boxeslist[4].boxcolor = "red";
        boxeslist[8].boxcolor = "red";
      }
      this.state.computerstate="";
      setTimeout(
        function() {
          this.setState({computerstate: "",
          winGame: "",boxes: [{id:0, value: "", boxcolor: "#d9dfe0", clickable: true}, {id:1, value: "", boxcolor: "#d9dfe0", clickable: true},{id:2, value: "", boxcolor: "#d9dfe0", clickable: true},
          {id:3, value: "", boxcolor: "#d9dfe0", clickable: true}, {id:4, value: "", boxcolor: "#d9dfe0", clickable: true},{id:5, value: "", boxcolor: "#d9dfe0", clickable: true},
          {id:6, value: "", boxcolor: "#d9dfe0", clickable: true}, {id:7, value: "", boxcolor: "#d9dfe0", clickable: true},{id:8, value: "", boxcolor: "#d9dfe0", clickable: true},
          ]});
          return;
        }
        .bind(this),
        2000
      );
    }
    else if((boxeslist[2].value=="X" && boxeslist[4].value=="X"  && boxeslist[6].value=="X") || (boxeslist[2].value=="O" && boxeslist[4].value=="O" && boxeslist[6].value=="O")){

      if(valtext == "X"){
        this.state.scorecountuser++;
        this.state.winGame = "You win";
        boxeslist[2].boxcolor = "green";
        boxeslist[4].boxcolor = "green";
        boxeslist[6].boxcolor = "green";
      }else{
        this.state.scorecountcomputer++;
        this.state.winGame = "Computer wins";
        boxeslist[2].boxcolor = "red";
        boxeslist[4].boxcolor = "red";
        boxeslist[6].boxcolor = "red";
      }
      this.state.computerstate="";
      setTimeout(
        function() {
          this.setState({boxes: [{computerstate: "",
          winGame: "",id:0, value: "", boxcolor: "#d9dfe0", clickable: true}, {id:1, value: "", boxcolor: "#d9dfe0", clickable: true},{id:2, value: "", boxcolor: "#d9dfe0", clickable: true},
          {id:3, value: "", boxcolor: "#d9dfe0", clickable: true}, {id:4, value: "", boxcolor: "#d9dfe0", clickable: true},{id:5, value: "", boxcolor: "#d9dfe0", clickable: true},
          {id:6, value: "", boxcolor: "#d9dfe0", clickable: true}, {id:7, value: "", boxcolor: "#d9dfe0", clickable: true},{id:8, value: "", boxcolor: "#d9dfe0", clickable: true},
          ]});
          return;
        }
        .bind(this),
        2000
      );
    }
    
    console.log("You play   -> " + this.state.scorecountuser);
    console.log("computer play  -> " + this.state.scorecountcomputer);

    let preventinfinityloop = 0;

    if(this.state.timearound == 0){
        do{
        val = Math.floor(Math.random() * (9 - 0) + 0);
        preventinfinityloop++;
        if(preventinfinityloop > 10){
          this.state.computerstate=""
          this.state.winGame = "Tie"
          return;
        }
      }while(boxeslist[val].clickable == false);
      
      setTimeout(
        function() {
          this.changevalState(val, "O");
        }
        .bind(this),
        3000
      );
      this.state.timearound = 1;
      this.state.computerstate = "Computer is Thinking..."
    }else{
      this.state.timearound = 0;
      this.state.computerstate = "Your turn..."
    }
    
    this.setState({boxes: boxeslist}); 
  }

  render(){  
    return (
      <View style={styles.container}>
        <Text style={styles.firstinfo}>{this.state.computerstate}</Text>
        <ActualPuzzle stateChange={stateInput => this.setState({ boxes: stateInput})} arrayBoxes={this.state.boxes} changevalState={(val, valtext)=>{this.changevalState(val, valtext)}}/>
        <Text style={styles.info}>You Computer</Text>
        <Text style={styles.info}> {this.state.scorecountuser} {this.state.scorecountcomputer}</Text>
        <Text style={styles.info}>{this.state.winGame}</Text>
        
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
  firstinfo: {
    top: "-5%",
    fontSize: 20,
  },
  info: {
    fontSize: 20,
  }
  
});
