import React from "react";
import { StyleSheet, View, Image } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";

function HomePage() {
  return (
    <Container>
      <Header>
        <Left>
          <Icon type="Feather" name="camera" />
        </Left>
        <Body>
          <Text>MY Insta</Text>
        </Body>

        <Right>
          <Icon type="FontAwesome5" name="location-arrow" />
        </Right>
      </Header>
      <Content>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    "https://www.sellingtimeshares.net/wp-content/uploads/thumbnail-thumbs-up-icon.png"
                }}
              />
              <Body>
                <Text>PosiGeek</Text>
                <Text note>GeekyAnts</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image
              source={{
                uri:
                  "https://www.topdraw.com/assets/uploads/2015/07/HiRes3-640x640.jpg"
              }}
              style={{ height: 200, width: null, flex: 1 }}
            />
          </CardItem>
          <CardItem>
            <Icon type="Feather" name="heart" />
            <Icon type="EvilIcons" name="comment" />
            <Icon type="FontAwesome5" name="location-arrow" />
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}

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
export default HomePage;
