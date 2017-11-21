import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as firebase from "firebase";
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
  Grid,
  Col
} from "native-base";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";



export default class TrainingView extends React.Component {
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
          <KeyboardAwareScrollView>
            <Text>Training View</Text>
          </KeyboardAwareScrollView>
        </Content>
      </Container>
    );
  }
}
