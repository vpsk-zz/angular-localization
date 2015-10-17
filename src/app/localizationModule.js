angular.module('localizationModule', ['ngLocalize', 'ngLocalize.Config', 'ngLocalize.Events', 'ngLocalize.InstalledLanguages'])
    .value('localeConf', {
        basePath: 'app/localization',
        defaultLocale: 'en-US',
        sharedDictionary: 'common',
        fileExtension: '.lang.json',
        persistSelection: true,
        cookieName: 'COOKIE_LOCALE_LANG',
        observableAttrs: new RegExp('^data-(?!ng-|i18n)'),
        delimiter: '::'
    })
    .value('localeSupported', [
        'en-US',
        'fr-FR'
    ])
    .value('localeFallbacks', [
        'en-US',
        'fr-FR'
    ]);
