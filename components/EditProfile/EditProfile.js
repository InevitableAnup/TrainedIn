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

import { Card, Avatar, FormLabel, FormInput } from "react-native-elements";
import { Col, Row, Grid } from "react-native-easy-grid";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default class EditProfile extends React.Component {
  render() {
    return (
      <KeyboardAwareScrollView behavior='padding'>
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
              <Title>Edit Profile</Title>
            </Body>
            <Right />
          </Header>
          <Content>
            <Card>
              <Grid>
                <Col />
                <Col>
                  <Avatar
                    xlarge
                    rounded
                    source={{
                      uri:
                        "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
                    }}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                  />
                </Col>
                <Col />
              </Grid>

              <Text>{ this.props.navigation.state.params.name }</Text>
              <FormLabel>Name</FormLabel>
              <FormInput />
              <FormLabel>Mobile</FormLabel>
              <FormInput />
              <FormLabel>Email</FormLabel>
              <FormInput />
              <FormLabel>Address Line1</FormLabel>
              <FormInput />
              <FormLabel>Address Line2</FormLabel>
              <FormInput />
              <FormLabel>Area</FormLabel>
              <FormInput />
              <FormLabel>City</FormLabel>
              <FormInput />
              <FormLabel>State/Region</FormLabel>
              <FormInput />
              <FormLabel>Country</FormLabel>
              <FormInput />
              <FormLabel>Pin</FormLabel>
              <FormInput />
              <FormLabel>Training Tags</FormLabel>
              <FormInput />

              <Button block primary ><Text style={{ color:'white' }}>Save</Text></Button>
            </Card>
          </Content>
        </Container>
      </KeyboardAwareScrollView>
    );
  }
}
