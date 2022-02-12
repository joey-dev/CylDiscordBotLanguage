"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItemTranslate = exports.languages = void 0;
const index_json_1 = __importDefault(require("./en-US/index.json"));
const index_json_2 = __importDefault(require("./nl-NL/index.json"));
exports.languages = {
    enUS: index_json_1.default,
    nlNL: index_json_2.default,
};
const getItemTranslate = (languageName, translatedTextName) => {
    const translationsList = exports.languages[languageName];
    if (translationsList.hasOwnProperty(translatedTextName)) {
        return translationsList[translatedTextName];
    }
    return exports.languages['enUS'][translatedTextName];
};
exports.getItemTranslate = getItemTranslate;
