import enUS from './en-US/index.json';
import nlNL from './nl-NL/index.json';

export const languages: ILanguages = {
    enUS: enUS,
    nlNL: nlNL,
};

export const getItemTranslate = (languageTranslationList: ILanguages, languageName: keyof ILanguages, translatedTextName: keyof ILanguage): string => {
    const translationsList: ILanguage = languageTranslationList[languageName];
    if (translationsList.hasOwnProperty(translatedTextName)) {
        return translationsList[translatedTextName] as string;
    }

    return languageTranslationList['enUS'][translatedTextName] as string;
};

export interface ILanguages {
    enUS: ILanguage;
    nlNL: ILanguage;
}

export interface ILanguage {
    LOGIN_BUTTON?: string;
    LOGOUT?: string;
    NO_SERVER_SELECTED?: string;
    SELECT_SERVER?: string;
    BOT_NOT_SETUP?: string;
    BOT_SETUP_BUTTON?: string;
    WHEN_FINISHED_BOT_SETUP?: string;
    FINISH?: string;
    OTHER?: string;
    Utility?: string;

    PING?: string;
    PING_TITLE?: string;
    PING_FIELD_NAME?: string;
    PING_DESCRIPTION?: string;

    EDIT?: string;
    SETTINGS?: string;

    ROLES?: string;
    SETTINGS_ROLES_TITLE?: string;
    SETTINGS_ROLES_DESCRIPTION?: string;
    ENABLED?: string;
    DISABLED?: string;

    CHANNELS?: string;
    SETTINGS_CHANNELS_TITLE?: string;
    SETTINGS_CHANNELS_DESCRIPTION?: string;

    SETTINGS_DELETE_COMMAND_TITLE?: string;
    SETTINGS_DELETE_COMMAND_DESCRIPTION?: string;

    SETTINGS_DELETE_REPLY_TITLE?: string;
    SETTINGS_DELETE_REPLY_DESCRIPTION?: string;
    SETTINGS_DELETE_REPLY_SECONDS?: string;

    SETTINGS_EPHEMERAL_TITLE?: string;
    SETTINGS_EPHEMERAL_DESCRIPTION?: string;
}
