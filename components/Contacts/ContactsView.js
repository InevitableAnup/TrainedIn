import React from "react";
import { StyleSheet, View, ListView } from "react-native";
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
  Text,
  Root,
  List,
  ListItem,
  Fab
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import { Card, Avatar, FormLabel, FormInput } from "react-native-elements";
import { SearchBar } from "react-native-elements";
import { DialogComponent, DialogTitle } from "react-native-dialog-component";

const datas = [
  'Simon Mignolet',
  'Nathaniel Clyne',
  'Dejan Lovren',
  'Mama Sakho',
  'Alberto Moreno',
  'Emre Can',
  'Joe Allen',
  'Phil Coutinho',
];

export default class ContactsView extends React.Component {

  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: datas,
    };
  }

  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }


  render() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (
      
      <Container>
        <Header searchBar rounded style={{ marginTop: "5%" }}>
          <Button
            transparent
            onPress={() => this.props.navigation.navigate("DrawerOpen")}
          >
            <Icon name="menu" />
          </Button>

          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
          <Icon name="search" />
        </Button>
        </Header>

        <DialogComponent
        ref={dialogComponent => {
          this.dialogComponent = dialogComponent;
        }}
      >
      
        <Container style={{marginBottom:"5%"}}>
          <Header>
            <Left>
              <Button transparent>
                <Icon name="close" onPress={()=>this.dialogComponent.close()} />
              </Button>
            </Left>
            <Body>
              <Title>Add Contact</Title>
            </Body>
            <Right />
          </Header>
        </Container>
        
        <View style={{marginTop:"10%"}}>
        
          
          <FormLabel>Name</FormLabel>
          <FormInput />
          <FormLabel>Email</FormLabel>
          <FormInput />
          <FormLabel>Mobile</FormLabel>
          <FormInput />
          <Button
          block
          bordered
          info
          primary
          style={{ marginTop: "5%", marginBottom:"5%",marginLeft:"5%",marginRight:"5%" }}
        >
          <Text> Save </Text>
        </Button>
        </View>
        
      </DialogComponent>
        <Content>
        
        <List
        dataSource={this.ds.cloneWithRows(this.state.listViewData)}
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
        <Fab
        style={{ backgroundColor: "#5067FF" }}
        position="bottomRight"
        onPress={() => this.dialogComponent.show()}
      >
        <Icon name="add" />
      </Fab>
      </Container>
    );
  }
}
