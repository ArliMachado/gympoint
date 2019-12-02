import styled from 'styled-components/native';
import {colors, metrics} from '~/styles';

import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;

  background-color: ${colors.secundary};
  padding: ${metrics.baseMargin * 2}px;
`;

export const NewCheckin = styled(Button)`
  /* margin: ${metrics.baseMargin}px; */
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  // contentContainerStyle: {padding: ${metrics.base}},
})`
  /* padding: ${metrics.basePadding}px; */
  margin-top: ${metrics.baseMargin}px;
`;
