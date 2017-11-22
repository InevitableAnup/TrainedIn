import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ListView,
  TextInput
} from "react-native";
import Expo from "expo";
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
  H2,
  Input,
  Item,
  Form,
  Toast,
  Button,
  Root,
  List,
  ListItem,
  Fab
} from "native-base";

import { Card, Avatar, FormLabel, FormInput } from "react-native-elements";
import { Col, Row, Grid } from "react-native-easy-grid";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { DialogComponent, DialogTitle } from "react-native-dialog-component";

const datas = [
  "Simon Mignolet - 8600974648",
  "Nathaniel Clyne - 8600974649",
  "Dejan Lovren - 8600974641",
  "Mama Sakho - 8600974642",
  "Alberto Moreno - 8600974640",
  "Emre Can - 8600974644",
  "Joe Allen - 8600974048",
  "Phil Coutinho - 8600974648"
];

export default class Company extends React.Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      isReady: false,
      listViewData: datas,
      active: "true"
    };
  }

  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });

    this.setState({ isReady: true });
  }
  render() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <KeyboardAwareScrollView behavior='padding'>
      <DialogComponent
      ref={dialogComponent => {
        this.dialogComponent = dialogComponent;
      }}
    >
    
      <Container style={{marginBottom:"5%"}}>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="close" />
            </Button>
          </Left>
          <Body>
            <Title>Add Contact</Title>
          </Body>
          <Right />
        </Header>
      </Container>
      
      <View style={{marginTop:"10%"}}>
      <Grid style={{marginBottom:"5%",marginLeft:"5%",marginTop:"5%"}}>
      <Col><Text>Company Name</Text></Col>
      <Col><Text>Inevitable Solutions</Text></Col>
      </Grid>
        
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
              <Title>Company</Title>
            </Body>
            <Right />
          </Header>
          <Content>
            <Card>
              <Grid>
                <Col>
                  <Text>Company Name</Text>
                </Col>
                <Col>
                  <Text>Inevitable Solutions</Text>
                </Col>
              </Grid>

              <Grid>
                <Col>
                  <Text>Address</Text>
                </Col>
                <Col>
                  <Text>
                    Madhu Asha 2nd Floor,S.B.Road,Near Chaturshringi Temple,Axis
                    Bank Lane
                  </Text>
                </Col>
              </Grid>

              <Grid>
                <Col>
                  <Text>Email</Text>
                </Col>
                <Col>
                  <Text>sales@inevitablesols.com</Text>
                </Col>
              </Grid>

              <Grid>
                <Col>
                  <Text>Contact</Text>
                </Col>
                <Col>
                  <Text>+91 20 25637808</Text>
                </Col>
              </Grid>
            </Card>
            <H2 style={{ marginLeft: "5%", marginTop: "5%" }}>Contacts</H2>

            <List
              style={{ marginLeft: "5%" }}
              dataSource={this.ds.cloneWithRows(this.state.listViewData)}
              renderRow={data => (
                <ListItem>
                  <Text> {data} </Text>
                </ListItem>
              )}
              renderLeftHiddenRow={data => (
                <Button full onPress={() => alert(data)}>
                  <Icon active name="information-circle" />
                </Button>
              )}
              renderRightHiddenRow={(data, secId, rowId, rowMap) => (
                <Button
                  full
                  danger
                  onPress={_ => this.deleteRow(secId, rowId, rowMap)}
                >
                  <Icon active name="trash" />
                </Button>
              )}
              leftOpenValue={75}
              rightOpenValue={-75}
            />

            <Fab
              active={this.state.active}
              style={{ backgroundColor: "#5067FF" }}
              position="bottomRight"
              onPress={() => this.dialogComponent.show()}
            >
              <Icon name="add" />
            </Fab>

            
          </Content>
        </Container>
      </KeyboardAwareScrollView>
    );
  }
}
