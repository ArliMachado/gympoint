import styled from 'styled-components/native';

import {metrics, colors} from '~/styles';
import Button from '~/components/Button';

export const Content = styled.View``;

export const TextHelp = styled.TextInput.attrs({
  textAlignVertical: 'top',
})`
  padding: ${metrics.basePadding}px;
  background-color: ${colors.white};

  margin-bottom: ${metrics.baseMargin * 2}px;
`;

export const SendButton = styled(Button)``;
