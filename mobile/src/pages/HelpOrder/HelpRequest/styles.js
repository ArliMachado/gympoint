import styled from 'styled-components/native';
import Button from '~/components/Button';

import {metrics} from '~/styles';

export const NewHelp = styled(Button)``;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: ${metrics.baseMargin * 1.5}px;
`;
