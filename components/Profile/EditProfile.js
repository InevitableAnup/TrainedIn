import React from "react";
import { StyleSheet, Text, View,ScrollView } from "react-native";
import {
  Container,
  Header,
  Content,
  Thumbnail,
  Form,
  Item,
  Input,
  Icon,
  Button
} from "native-base";

import { FontAwesome,Ionicons } from '@expo/vector-icons';

import { Col, Row, Grid } from "react-native-easy-grid";

export default class EditProfile extends React.Component {
  static navigationOptions = {
    title: "Edit Profile"
  };

  render() {
    return (
        <ScrollView>
      <Container>
        <Content contentContainerStyle={{ flex: 1 }} style={{ padding: 10 }}>
          <Grid>
            <Col />
            <Col>
              <Thumbnail
                large
                source={{
                  uri:
                    "https://avatars3.githubusercontent.com/u/13977912?s=400&u=1847b338a8e3d973f7bee7b0ee77248a53525b3e&v=4"
                }}
              />
            </Col>
            <Col>
            <FontAwesome name='edit' size={30} ></FontAwesome>
            </Col>
          </Grid>
          </Content>
          <Content contentContainerStyle={{ flex: 1 }} style={{ padding: 10 }}>

          <Grid>
            <Col>
              <Text>Full Name: </Text>
            </Col>
            <Col>
              <Text>Anup Borde</Text>
            </Col>
          </Grid>

          <Grid>
            <Col>
              <Text>Mobile No: </Text>
            </Col>
            <Col>
              <Text>8600931386</Text>
            </Col>
          </Grid>

          <Grid>
            <Col>
              <Text>Email : </Text>
            </Col>
            <Col>
              <Text>borde.anup@gmail.com</Text>
            </Col>
          </Grid>
          
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1
            }}
          />
          </Content>
          <Content contentContainerStyle={{ flex: 1 }} style={{ padding: 10 }}>
          <Text>Address</Text>
          <Grid>
            <Col>
              <Text>Line1</Text>
            </Col>
            <Col>
              <Text>74 Rasta Peth</Text>
            </Col>
          </Grid>

          <Grid>
            <Col>
              <Text>Line2</Text>
            </Col>

            <Col>
              <Text>opp. K.E.M. Hospital</Text>
            </Col>
          </Grid>

          <Grid>
            <Col>
              <Text>Area</Text>
            </Col>

            <Col>
              <Text>Rasta Peth</Text>
            </Col>
          </Grid>
          </Content>
          <Content contentContainerStyle={{ flex: 1 }} style={{ padding: 10 }}>

          <Grid>
            <Col>
              <Text>City</Text>
            </Col>

            <Col>
              <Text>Pune</Text>
            </Col>
          </Grid>

          <Grid>
            <Col>
              <Text>Region/State</Text>
            </Col>

            <Col>
              <Text>Maharashtra</Text>
            </Col>
          </Grid>

          <Grid>
            <Col>
              <Text>Country</Text>
            </Col>

            <Col>
              <Text>India</Text>
            </Col>
          </Grid>

          <Grid>
            <Col>
              <Text>Pin</Text>
            </Col>

            <Col>
              <Text>411028</Text>
            </Col>
          </Grid>
          </Content>
          <Content contentContainerStyle={{ flex: 1 }} style={{ padding: 10 }}>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1
            }}
          />
          
          <Grid>
            <Col>
              <Text>Training Tags</Text>
            </Col>
            <Col>
              <Icon name="add" />
            </Col>
          </Grid>

          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1
            }}
          />
          </Content>
          <Content contentContainerStyle={{ flex: 1 }} style={{ padding: 10 }}>
          <Text>Account</Text>
          <Text>Change Password</Text>

          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1
            }}
          />
          </Content>
          <Content contentContainerStyle={{ flex: 1 }} style={{ padding: 10 }}>
          <Text>Subcription</Text>
          <Text>Free Tier</Text>
          <Text>Valid Upto : 01/12/2018</Text>
          </Content>
          <Content contentContainerStyle={{ flex: 1 }} style={{ padding: 10 }}>
          <Button primary>
          <Text>Activate License</Text>
          </Button>
        </Content>

        <Container />
      </Container>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  textContainer: {
    flexDirection: "row",
    height: 30,
    backgroundColor: "green"
  },
  leftContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red"
  },
  rightContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "blue"
  },
  rowLabelText: {
    color: "#0B1219",
    fontSize: 16.0
  }
});
