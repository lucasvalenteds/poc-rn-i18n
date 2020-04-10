import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import * as RNLocalize from 'react-native-localize';
import I18n from 'i18n-js';
import { Postcard } from './Postcard';

type LocaleSupported = 'en-US' | 'pt-BR';

type LocalesSupported = { [locale in LocaleSupported]: object };

const localesSupported: LocalesSupported = {
  'en-US': require('./locales/en-us.json'),
  'pt-BR': require('./locales/pt-br.json'),
};

function setupInternationalization(): void {
  I18n.translations = localesSupported;

  const deviceLocales = RNLocalize.getLocales();

  const currentDeviceLanguage = RNLocalize.findBestAvailableLanguage(
    deviceLocales.map((locale) => locale.languageTag),
  );

  I18n.locale = currentDeviceLanguage?.languageTag || 'en-US';
}

const App: React.FC = (): React.ReactElement => {
  setupInternationalization();

  return (
    <>
      <StatusBar />
      <SafeAreaView>
        <ScrollView>
          <Postcard
            title="Hello World!"
            message="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum."
            author={'John Smith'}
            timestamp={new Date()}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
