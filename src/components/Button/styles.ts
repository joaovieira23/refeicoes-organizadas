import React from 'react';
import styled from 'styled-components/native';

import {colors} from '../../assets/styles';

export const ButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border-radius: 16px;
  padding: 12px 16px 12px 16px;
  background-color: ${(props: any) =>
    (props.cls === 'orange' && colors.ORANGE) ||
    (props.cls === 'clear' && 'transparent') ||
    colors.NEUTRAL_100};
`;

export const Text = styled.Text`
  flex: 1;
  font-family: 'Poppins-Bold';
  font-size: 18px;
  color: ${(props: any) =>
    props.cls === 'orange' ? colors.NEUTRAL_000 : colors.TYPE_ACTIVE};
`;

export const TextDisabled = styled.Text`
  flex: 1;
  font-family: 'Poppins-Bold';
  font-size: 18px;
  color: ${colors.TYPE_PLACEHOLDER};
`;

export const IconLeft = styled.Image`
  margin-right: 16px;
  width: 20px;
  height: 20px;
`;

export const IconRight = styled.View`
  margin-left: 16px;
`;
