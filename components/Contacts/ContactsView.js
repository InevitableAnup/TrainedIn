import React from "react";
import { StyleSheet, Text, View } from "react-native";
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
  Root
} from "native-base";

export default class ContactsView extends React.Component {
  static navigationOptions = {
    title: "Contacts View"
  };
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
            <Title>Contacts</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>ContactsView</Text>
        </Content>
      </Container>
    );
  }
}
