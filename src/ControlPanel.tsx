import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { LocaleSupported } from './App';

export interface ControlPanelProps {
  onPress(locale: LocaleSupported): void;
}

export const ControlPanel: React.FC<ControlPanelProps> = (
  props,
): React.ReactElement => {
  const style = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginTop: 16,
    },
  });

  return (
    <>
      <View style={style.container}>
        <Button
          testID={'app-english'}
          title={'English'}
          onPress={(): void => props.onPress(LocaleSupported.UnitedStates)}
        />
        <Button
          testID={'app-portuguese'}
          title={'Português'}
          onPress={(): void => props.onPress(LocaleSupported.Brazil)}
        />
      </View>
    </>
  );
};
