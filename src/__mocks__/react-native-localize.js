const getLocales = () => [
  { countryCode: 'US', languageTag: 'en-US', languageCode: 'EN', isRTL: false },
  { countryCode: 'BR', languageTag: 'pt-BR', languageCode: 'BR', isRTL: false },
];

const findBestAvailableLanguage = () => ({
  languageTag: 'en-US',
  isRTL: false,
});

export { getLocales, findBestAvailableLanguage };
