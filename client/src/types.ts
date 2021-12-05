import { MenuOptionsStore } from "./stores/MenuOptionsStore";


export interface IMenuOptionsStoreProps {
    store: MenuOptionsStore;
}

export interface ILanguageProps {
    language: string,
    size: number,
    sum: number
}

export type TRepoLanguages = {
    [key: string]: number
}

export type TGitHubLangaugeData = {
    [key: string]: number
}




