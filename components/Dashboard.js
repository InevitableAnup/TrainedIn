import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
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

import { StackNavigator } from "react-navigation";

import TrainingView from "./Training/TrainingView";
import ProfileView from "./Profile/ProfileView";
import ContactsView from "./Contacts/ContactsView";

const App = StackNavigator({
  TrainingView: { screen: TrainingView },
  ProfileView: { screen: ProfileView }
});

export default class Dashboard extends React.Component {
  static navigationOptions = {
    title: "Dashboard"
  };
  constructor(props) {
    super(props);
    this.state = {
      showToast: false
    };
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Content>
          <H1 style={{ marginTop: "5%", marginLeft: "5%", marginRight: "5%" }}>
            Hi Anup!
          </H1>

          <Content contentContainerStyle={{ flex: 1 }} style={{ padding: 10 }}>
            <Grid style={{ alignItems: "center" }}>
              <Col>
                <Button
                  block
                  bordered
                  info
                  primary
                  style={{ marginTop: "5%" }}
                  onPress={() => navigate("TrainingView")}
                >
                  <Text> View Training </Text>
                </Button>

                <Button
                  block
                  bordered
                  info
                  primary
                  style={{ marginTop: "5%" }}
                  onPress={() =>
                    Toast.show({
                      text: "View Profile!",
                      position: "bottom",
                      buttonText: "Okay"
                    })}
                >
                  <Text> Profile </Text>
                </Button>

                <Button
                  block
                  bordered
                  info
                  primary
                  style={{ marginTop: "5%" }}
                  onPress={() =>
                    Toast.show({
                      text: "View Contacts!",
                      position: "bottom",
                      buttonText: "Okay"
                    })}
                >
                  <Text> Contacts </Text>
                </Button>
              </Col>
            </Grid>
          </Content>
        </Content>
      </Container>
    );
  }
}
