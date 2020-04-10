import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import I18N from 'i18n-js';

export interface PostcardProps {
  title: string;
  message: string;
  author: string;
  timestamp: Date;
}

export const Postcard: React.FC<PostcardProps> = (props) => {
  const style = StyleSheet.create({
    container: {
      padding: 16,
      backgroundColor: '#FAFAFA',
      margin: 16,
    },
    title: {
      fontSize: 20,
    },
    message: {
      fontSize: 14,
      textAlign: 'justify',
      marginTop: 16,
    },
    author: {
      fontSize: 12,
      fontWeight: 'bold',
      marginTop: 16,
    },
  });

  return (
    <>
      <View style={style.container}>
        <Text testID={'postcard-title'} style={style.title}>
          {I18N.translate('postcard-title')}
        </Text>
        <Text testID={'postcard-message'} style={style.message}>
          {I18N.translate('postcard-message', {
            message: props.message,
          })}
        </Text>
        <Text testID={'postcard-author'} style={style.author}>
          {I18N.translate('postcard-author', {
            name: props.author,
            date: I18N.strftime(props.timestamp, '%d/%m/%Y'),
          })}
        </Text>
      </View>
    </>
  );
};
