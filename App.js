import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Container, Header, Left, Body, Right, Title } from "native-base";

export default class HeaderTitleExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
          <View style={styles.container}>
          <Text>
            Open up App.js to start working on your app!!!!!!!!!!!!!!!!
          </Text>
        </View>
      </Container>
      }
      );
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
      },
      textStyle: {
        color: "blue"
      }
    });
}
