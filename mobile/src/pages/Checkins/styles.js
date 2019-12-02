import styled from 'styled-components/native';
import {metrics} from '~/styles';

import Button from '~/components/Button';

export const NewCheckin = styled(Button)``;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: ${metrics.baseMargin}px;
`;
