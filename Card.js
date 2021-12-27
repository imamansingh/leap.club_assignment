import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let Top = "VIEW";
    if (this.props.is_open) {
      Top = this.props.name;
    }

    return (
      <View style={styles.card}>
        <TouchableHighlight
          onPress={this.props.clickCard}
          activeOpacity={0.75}
          underlayColor={"#f1f1f1"}
        >
          <Text>{Top}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: "center",
  },
  card_text: {
    fontSize: 50,
    fontWeight: "bold",
  },
});
