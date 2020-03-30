import styled from 'styled-components/native';
import Text from '../../widget/text';

export const ScreenView = styled.View`
  flex: 1;
  background-color: #f5f5f5;
  padding: 17px;
`;

export const TextView = styled(Text)`
  color: ${props => (props.option ? 'white' : '#696969')};
  font-size: ${props => (props.title ? '20px' : '17px')};
  font-family: ${props =>
    props.title || props.questionNo ? 'Segoe UI' : 'Segoe UI LIght'};
  text-align: ${props => (props.title ? 'center' : 'left')};
  margin-top: ${props => (props.title || props.question ? '4px' : '1px')};
  margin-left: ${props => (props.question ? '4px' : '0px')};
`;

export const QuestionBox = styled.View`
  background-color: white;
  shadow-color: #000;
  shadow-opacity: 0.25;
  shadow-radius: 6px;
  elevation: 5;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ListBox = styled.View`
  background-color: #c717f2;
  padding-vertical: 10px;
  padding-horizontal: 22px;
  margin-top: 7px;
  shadow-color: black;
  shadow-opacity: 0.25;
  shadow-radius: 6px;
  elevation: 5;
  border-radius: 3px;
`;
