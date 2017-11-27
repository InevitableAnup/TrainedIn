import React from "react";
import { StyleSheet, Text, View, ScrollView,TextInput } from "react-native";
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
  Thumbnail
} from "native-base";

import { FontAwesome, Ionicons } from "@expo/vector-icons";
import {
  Card,
  Avatar,
  FormLabel,
  FormInput,
  Divider
} from "react-native-elements";
import { Col, Row, Grid } from "react-native-easy-grid";

export default class ProfileView extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
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
            <Title>Profile</Title>
          </Body>
          <Right />
        </Header>
        <Content style={{ marginBottom:"5%" }}>
          <Card >
            <Grid>
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
              <Col>
                <FontAwesome name="edit" size={30}  onPress={() => navigate("EditProfile",{ name: 'Ji Chang Ji chong', mobile: '8600832932'})} />
              </Col>
            </Grid>

            <Grid>
              <Col>
                <FormLabel>Name</FormLabel>
              </Col>
              <Col>
                <FormLabel>Ji Chang Ji Chong</FormLabel>
              </Col>
            </Grid>

            <Grid>
              <Col>
                <FormLabel>Mobile</FormLabel>
              </Col>
              <Col>
                <FormLabel>8600832932</FormLabel>
              </Col>
            </Grid>

            <Grid>
              <Col>
                <FormLabel>Email</FormLabel>
              </Col>
              <Col>
                <FormLabel>borde.anup@gmail.com</FormLabel>
              </Col>
            </Grid>

            <Divider style={{ backgroundColor: "blue", marginTop: "5%" }} />

            <FormLabel>Address</FormLabel>

            <FormLabel>Madhu Asha, 2nd Floor</FormLabel>
            <FormLabel>Axis Bank Lane</FormLabel>
            <FormLabel>S.B.Road</FormLabel>
            <FormLabel>Pune</FormLabel>
            <FormLabel>Maharashtra</FormLabel>
            <FormLabel>India</FormLabel>
            <FormLabel>411011</FormLabel>
            <Divider style={{ backgroundColor: "blue", marginTop: "5%" }} />
            <Grid>
              <Col>
                <FormLabel>Training Tags</FormLabel>
              </Col>
              <Col>
                <Icon name="add" style={{ marginTop: "5%" }} />
              </Col>
            </Grid>
            <TextInput multiline style={{ height: 100, backgroundColor: '#ccc' }} />

            <Divider style={{ backgroundColor: 'blue', marginTop: "5%" }} />

            <FormLabel>Account</FormLabel>
            <FormLabel>Change Password</FormLabel>
            <Divider style={{ backgroundColor: 'blue', marginTop: "5%" }} />

            <FormLabel>Subscription</FormLabel>
            <FormLabel>Free Tier</FormLabel>

            
            <Grid>
            <Col><FormLabel>Valid upto : </FormLabel></Col>
            <Col><FormLabel>01/01/2018</FormLabel></Col>
            </Grid>

            <Button>
            <Text style={{ color:"white" }}>    Activiate License   </Text>
            </Button>

          </Card>
        </Content>
      </Container>
    );
  }
}
