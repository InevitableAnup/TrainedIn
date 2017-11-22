import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
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
  H1,
  Input,
  Item,
  Form,
  Toast,
  Button,
  Root
} from "native-base";

import { StackNavigator, DrawerNavigator } from "react-navigation";

import Dashboard from "./components/Dashboard";
import TrainingView from "./components/Training/TrainingView";
import ProfileView from "./components/Profile/ProfileView";
import ContactsView from "./components/Contacts/ContactsView";
import EditProfile from "./components/EditProfile/EditProfile";
import Company from "./components/Company/Company";

const Stack = StackNavigator({
  Dashboard: {
    screen: Dashboard
  },
  TrainingView: {
    screen: TrainingView
  },
  ProfileView: {
    screen: ProfileView
  },
  ContactsView: {
    screen: ContactsView
  },
  EditProfile:{
    screen: EditProfile
  }
});

const Drawer = DrawerNavigator({
  Dashboard: {
    screen: Dashboard
  },
  TrainingView: {
    screen: TrainingView
  },
  ProfileView: {
    screen: ProfileView
  },
  ContactsView: {
    screen: ContactsView
  },
  EditProfile:{
    screen: EditProfile
  },
  Company:{
    screen: Company
  }
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
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
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <Root>
      
        <Drawer/>
      </Root>
    );
  }
}
