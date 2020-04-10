import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, StatusBar, View, Text } from 'react-native';
import * as RNLocalize from 'react-native-localize';
import I18n from 'i18n-js';

type LocaleSupported = 'en-US' | 'pt-BR';

type LocalesSupported = { [locale in LocaleSupported]: object };

const localesSupported: LocalesSupported = {
  'en-US': require('./locales/en-us.json'),
  'pt-BR': require('./locales/pt-br.json'),
};

function setupInternationalization(): void {
  console.debug('setupInternationalization called');
  I18n.translations = localesSupported;

  const deviceLocales = RNLocalize.getLocales();

  const currentDeviceLanguage = RNLocalize.findBestAvailableLanguage(
    deviceLocales.map((locale) => locale.languageTag),
  );

  I18n.locale = currentDeviceLanguage?.languageTag || 'en-US';
}

const App: React.FC = (): React.ReactElement => {
  setupInternationalization();

  useEffect(() => {
    const handleLocalizationChange = () => {
      setupInternationalization();
    };

    RNLocalize.addEventListener('change', handleLocalizationChange);

    return () => {
      RNLocalize.removeEventListener('change', handleLocalizationChange);
    };
  }, []);

  return (
    <>
      <StatusBar />
      <SafeAreaView>
        <ScrollView>
          <View>
            <Text
              style={{
                fontSize: 50,
                padding: 16,
              }}>
              {I18n.translate('hello-world', {
                name: 'John Smith',
              })}
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
