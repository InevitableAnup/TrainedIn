import React from "react";
import { StyleSheet, Text, View, ListView } from "react-native";

import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Left,
  Right,
  Body,
  Icon,
  H1,
  Input,
  Item,
  Form,
  Toast,
  Button,
  Root,
  List,
  ListItem
} from "native-base";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import * as firebase from "firebase";
// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC1ikrKiKxmKJUFpAp3aiFOtJ46rSbA0Pw",
  authDomain: "trainedin-c2c10.firebaseapp.com",
  databaseURL: "https://trainedin-c2c10.firebaseio.com",
  projectId: "trainedin-c2c10",
  storageBucket: "trainedin-c2c10.appspot.com"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);


export default class TrainingView extends React.Component {

  constructor(props){
    super(props);
    let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.ds = new ListView.DataSource({ rowHasChanged: (r1,r2) => r1 !== r2 });
    this.state ={
      basic: true,
      itemDataSource: ds,
      
    }
    this.itemsRef = this.getRef().child('trainings').child('wqecTJUTZXbOZRJd9hW1eETE9gK2');
  }

  getRef(){
    return firebaseApp.database().ref();
  }

  componentDidMount() {
    this.getItems(this.itemsRef);
  }

  componentWillMount() {
    this.getItems(this.itemsRef);
  }

  getItems(itemsRef) {
    itemsRef.on('value',(snap) => {
      let items=[];
      snap.forEach((child) => {
        
        console.log(child.val().trainingName);
        items.push(child.val().trainingName);
      });
      this.setState({
        itemDataSource: items
      });
    });


  }

  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.itemDataSource];
    newData.splice(rowId, 1);
    this.setState({ itemDataSource: newData });
  }
  
  render() {
    
    return (
      <Container>
        <Header style={{ marginTop: "5%" }}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Training</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          
        <List
        dataSource={this.ds.cloneWithRows(this.state.itemDataSource)}
        renderRow={data =>
          <ListItem>
            <Text> {data} </Text>
          </ListItem>}
        renderLeftHiddenRow={data =>
          <Button full onPress={() => alert(data)}>
            <Icon active name="information-circle" />
          </Button>}
        renderRightHiddenRow={(data, secId, rowId, rowMap) =>
          <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
            <Icon active name="trash" />
          </Button>}
        leftOpenValue={75}
        rightOpenValue={-75}
      />

          
        </Content>
      </Container>
    );
  }
}
