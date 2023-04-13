import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class Accordian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      expanded: false,
    };

    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          ref={this.accordian}
          style={styles.row}
          onPress={() => this.toggleExpand()}
        >
          <View style={styles.containerTitle}>
            <Text style={[styles.title, styles.font]}>{this.props.title}</Text>
            <Icon
              name={
                this.state.expanded
                  ? "keyboard-arrow-up"
                  : "keyboard-arrow-down"
              }
              size={30}
              color={"#D1F366"}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.parentHr} />
        {this.state.expanded && (
          <View style={styles.child}>
            <Text style={styles.text}>{this.props.data}</Text>
          </View>
        )}
      </View>
    );
  }

  toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ expanded: !this.state.expanded });
  };
}

const styles = StyleSheet.create({
  containerTitle: {
    height: 90,
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  title: {
    height: 90,
    width: "90%",
    fontSize: 20,
    fontWeight: "bold",
    color: "#D1F366",
    lineHeight: 30,
    letterSpacing: 0.7,
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 80,
    paddingLeft: 20,
    paddingRight: 18,
    alignItems: "center",
  },
  parentHr: {
    height: 1,
    width: "100%",
  },
  child: {
    padding: 20,
  },
  text: {
    fontSize: 18,
    color: "white",
    marginBottom: 50,
    letterSpacing: 1,
    lineHeight: 30,
  },
});
