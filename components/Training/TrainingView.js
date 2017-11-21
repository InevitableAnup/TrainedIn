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
  Root,
  Grid,
  Col
} from "native-base";

export default class TrainingView extends React.Component {
  render() {
    return (
      <Container>
        <Header>
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
          <Text>Training View</Text>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
