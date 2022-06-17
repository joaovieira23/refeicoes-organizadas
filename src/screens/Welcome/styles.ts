import React from 'react';
import styled from 'styled-components/native';

import { colors, typography } from '../../assets/styles';

export const MainContainer = styled.SafeAreaView`
  background-color: ${colors.NEUTRAL_000};
  flex: 1;
`;

export const View = styled.View`
  flex: 1;
`;

export const ViewNoFlex = styled.View``;

export const ScrollView = styled.ScrollView`
  flex: 1;
`;

export const BulletsView = styled.View`
  flex-direction: row;
  justify-content: center;
  bottom: 77px;
`;

export const Bullet = styled.View`
  width: 8px;
  height: 8px;
  background-color: ${colors.NEUTRAL_000};
  margin: 4px;
  border-radius: 4px;
`;

export const ContentView = styled.View`
  flex: 1;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  background-color: ${colors.NEUTRAL_000};
  align-self: stretch;
  margin-top: -60px;
`;

export const Image = styled.Image``;

export const GalleryText = styled.Text`
  ${typography.dialog_title2}
  color: #000;
  padding: 32px 32px 28px 32px;
`;

export const ButtonsContainer = styled.View`
  padding: 0 32px 0 32px;
  align-items: center;
  justify-content: center;
`;

export const CustomButton = styled.TouchableOpacity`
  flex-direction: row;
  padding: 16px;
`;

export const CustomButtonText = styled.Text`
  ${typography.regular400}
  font-size: 16px;
  color: ${colors.TYPE_ACTIVE};
  margin-right: 6px;
`;

export const CustomButtonTextOrange = styled.Text`
  ${typography.regular700}
  font-size: 16px;
  color: ${colors.ORANGE};
`;
