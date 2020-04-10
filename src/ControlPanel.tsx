import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { LocaleSupported } from './App';
import I18n from 'i18n-js';

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
          title={I18n.translate('controlpanel-english')}
          onPress={(): void => props.onPress(LocaleSupported.UnitedStates)}
        />
        <Button
          testID={'app-portuguese'}
          title={I18n.translate('controlpanel-portuguese')}
          onPress={(): void => props.onPress(LocaleSupported.Brazil)}
        />
      </View>
    </>
  );
};
