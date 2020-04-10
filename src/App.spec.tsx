import React from 'react';
import App from './App';

import ReactRenderer, { ReactTestRenderer } from 'react-test-renderer';

test('It renders the app in English', () => {
  const renderer: ReactTestRenderer = ReactRenderer.create(<App />);

  ReactRenderer.act(() => {
    const button = renderer.root.findByProps({
      testID: 'app-english',
    });

    button.props.onPress();
  });

  const title = renderer.root.findByProps({ testID: 'postcard-title' });
  const message = renderer.root.findByProps({ testID: 'postcard-title' });
  const author = renderer.root.findByProps({ testID: 'postcard-author' });

  expect(title.props.children).toStrictEqual('Hello World!');
  expect(message.props.children).not.toStrictEqual('');
  expect(author.props.children).toContain(
    'Written in 10/04/2020 by John Smith',
  );
});

test('It renders the app in Portuguese', () => {
  const renderer: ReactTestRenderer = ReactRenderer.create(<App />);

  ReactRenderer.act(() => {
    const button = renderer.root.findByProps({
      testID: 'app-portuguese',
    });

    button.props.onPress();
  });

  const title = renderer.root.findByProps({ testID: 'postcard-title' });
  const message = renderer.root.findByProps({ testID: 'postcard-title' });
  const author = renderer.root.findByProps({ testID: 'postcard-author' });

  expect(title.props.children).toStrictEqual('Olá Mundo!');
  expect(message.props.children).not.toStrictEqual('');
  expect(author.props.children).toContain(
    'Escrito em 10/04/2020 por John Smith',
  );
});
