import React from 'react';
import { Dimensions, Animated } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Button from '../../components/Button';
import LottieView from 'lottie-react-native';

import {
  MainContainer,
  View,
  ViewNoFlex,
  ContentView,
  Image,
  GalleryText,
} from './styles';

export default function PreLogin() {
  const {width} = Dimensions.get('window');

  return (
    <KeyboardAwareScrollView
      scrollEnabled={false}
      contentContainerStyle={{flex: 1}}
      keyboardShouldPersistTaps="always">
      <MainContainer>
        <View>
          <View style={{ display: 'flex', width, height: width, backgroundColor: '#ffdb58' }}>
              <LottieView
                style={{ width: '100%', marginTop: 16 }}
                autoSize
                resizeMode="contain"
                source={require('../../assets/animations/food-recives.json')}
                autoPlay
                loop
            />
          </View>
        </View>
        <ContentView>
          <ViewNoFlex style={{width}}>
              <GalleryText style={{width: width, fontFamily: 'Rubik-BoldItalic'}}>
                Seja bem vindo!
              </GalleryText>
              <GalleryText style={{width: width, fontFamily: 'Montserrat-Medium'}}>
                 Você terá acesso a todas as suas receitas favoritas, cronogramas da semana e organizações de rotinas
              </GalleryText>
          </ViewNoFlex>
        <View style={{ margin: 16 }}>
          <View>
            <Button containerStyle={{ backgroundColor: '#fbec5d' }} fontSize={14} label="ENTRAR" onPress={() => {}} />
          </View>
          <View style={{ marginTop: -64 }}>
            <Button containerStyle={{ backgroundColor: '#fbec5d' }} fontSize={14} label="CADASTRAR" onPress={() => {}} />
          </View>
        </View>
        </ContentView>
      </MainContainer>
    </KeyboardAwareScrollView>
  );
}