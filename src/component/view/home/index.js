import React, {useEffect, useRef} from 'react';
import {FlatList, TouchableOpacity, Alert} from 'react-native';
import {TextView, ScreenView, ListBox} from './styles';
import Sessions from './../../../../assets/js/sessions';

const Homepage = ({navigation}) => {
  const mounted = useRef();
  useEffect(() => {
    if (!mounted.current) {
      Alert.alert(
        'Welcome!',
        'This is a bible quiz app produced by Okwuosa Chijioke (07037381011). Acknowledgment:--> Oluchukwu Okoye. Enjoy!!!',
        [{text: 'OK', onPress: () => {}}],
      );
    }
  });

  return (
    <ScreenView>
      <FlatList
        data={Sessions.list}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() =>
              navigation.navigate('Quiz', {
                session: item.key,
                title: item.name,
              })
            }>
            <ListBox>
              <TextView>{item.name}</TextView>
            </ListBox>
          </TouchableOpacity>
        )}
      />
    </ScreenView>
  );
};

export default Homepage;
