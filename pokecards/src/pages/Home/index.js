import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import Layout from '../../components/Cards/CardsLayout';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentLayout: 1
    };
  }

  render() {

    return (
      <>
        <ScrollView>
          <Layout arrayTag={["pikachu", "dragonite", "lendario", "eevee"]} />
        </ScrollView>
      </>
    )
  }

}

export default Home;
