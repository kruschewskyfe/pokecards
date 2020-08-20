import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 0.06;
  flex-direction: row;
  align-items: center;
  padding: 5px;
  background-color: transparent;
  justify-content: space-between;
  margin: 10px;
`;

export const ButtonItem = styled.TouchableOpacity`
	padding: 8px;
  border-radius: 50px;	
  align-content: center;
  background: ${props => props.color ? "#573ea8" : "transparent"};
`;

export const TextButton = styled.Text`
	font-size: 24px;
	font-weight: 500;
  color: ${props => props.color ? "white" : "#573ea8"};
`;

export const GroupButtons = styled.View`
  flex: 1;
  flexDirection: row;
`;