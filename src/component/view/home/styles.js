import styled from 'styled-components/native';
import Text from '../../widget/text';

export const ScreenView = styled.View`
  flex: 1;
  background-color: #f5f5f5;
  padding: 17px;
`;
export const TextView = styled(Text)`
  padding-left: 10px;
`;

export const ListBox = styled.View`
  background-color: #c717f2;
  padding-vertical: 12px;
  padding-horizontal: 8px;
  margin-top: 7px;
  shadow-color: #000;
  shadow-opacity: 0.25;
  shadow-radius: 6px;
  elevation: 2;
  border-radius: 3px;
`;
