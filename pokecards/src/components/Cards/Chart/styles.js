import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const ButtonItem = styled.TouchableOpacity`
	padding: 12px;
  border-radius: 50px;	
  align-content: center;
  background: #fff;
  border: 2px;
  border-color: #2126c2;
  justify-content: center;
  padding-vertical: 10px;
  padding-horizontal: 12px;
  elevation: 8;
  width: ${0.065 * windowWidth};
  height: ${0.005 * windowHeight};
`;

export const CircleButton = styled.TouchableOpacity`
	padding: 12px;
  border-radius: 50px;	
  align-content: center;
  background: #fff;
  border: 2px;
  border-color: #2126c2;
  justify-content: center;
  padding-vertical: 10px;
  padding-horizontal: 12px;
  elevation: 8;
  width: ${0.05 * windowWidth};
  height: ${0.005 * windowHeight};
`;

export const TextButton = styled.Text`
	font-size: ${0.015 * windowWidth}px;
	font-weight: 500;
  color: #2126c2;
`;