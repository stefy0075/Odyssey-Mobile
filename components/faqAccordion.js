import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Accordian from "./Accordian";

export default class FaqAccordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [
        {
          title: "What is a digital nomad?",
          data: "Digital nomads are people with a high human capital profile, who work remotely. The growing trend of workers who chose to live as digital nomads has increased after the pandemic upon reconsidering and valuing the lifestyle that integrates work and enjoyment.",
        },
        {
          title: "Do I need a visa to stay in Argentina?",
          data: "You can stay in Argentina for 90 calendar days upon your arrival without doing any paperwork. If your three-month stay is finished, and you wish to stay longer, you can apply for a special visa for Digital Nomads on the Ministry of the Interior website.",
        },
        {
          title: "Do I have to pay taxes in Argentina?",
          data: "No. Digital nomads working remotely are not subject to paying local taxes as long as they do not do any work for Argentina.",
        },
        {
          title: "What kind of jobs can I do while staying in Argentina?",
          data: "Any job you can perform remotely for your country's market or another market, provided that it is not for the Argentinian market and/or for an Argentinian employer.",
        },
        {
          title: "Where can I find recommendations about Argentina?",
          data: "On the official website of Visit Argentina.",
        },
      ],
    };
  }

  render() {
    return <View style={styles.container}>{this.renderAccordians()}</View>;
  }

  renderAccordians = () => {
    const items = [];
    for (item of this.state.menu) {
      items.push(<Accordian key={item.title} title={item.title} data={item.data} />);
    }
    return items;
  };
}

const styles = StyleSheet.create({
  container: {
    width: 375,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 50,
    paddingBottom: 50,
    backgroundColor: "#141627",
  },
});
