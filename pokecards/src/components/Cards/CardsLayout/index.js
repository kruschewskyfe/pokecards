import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';

import { Container, InlineCard } from './styles';

import CardPikachu from '../CardPikachu';
import CardDragonite from '../CardDragonite';
import CardEevee from '../CardEevee';
import CardLendario from '../CardLendario';

class CardsLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLayout: 1
    };
  }

  components = {
    pikachu: CardPikachu,
    dragonite: CardDragonite,
    eevee: CardEevee,
    lendario: CardLendario
  };

  render() {

    const Card1 = this.components[this.props.arrayTag[0]];
    const Card2 = this.components[this.props.arrayTag[1]];
    const Card3 = this.components[this.props.arrayTag[2]];
    const Card4 = this.components[this.props.arrayTag[3]];

    return (
      <>
        <ScrollView>
          <Container>
            <InlineCard>
              <Card1 />
              <Card2 />
            </InlineCard>
            <InlineCard>
              <Card3 />
              <Card4 />
            </InlineCard>
          </Container>
        </ScrollView>
      </>
    )
  }

}

export default CardsLayout;
