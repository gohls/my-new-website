import axios from "axios";
import { action, computed, makeAutoObservable } from "mobx";
import { MENU_OPTIONS } from "../enums";
import { ILanguageProps } from "../types";


interface IRepoLanguages {
    [key: string]: number
}


export class MenuOptionsStore {
    public option: MENU_OPTIONS = MENU_OPTIONS.EXPERIENCE;
    public repoNames: Array<string> = [];
    public repoLanguages: IRepoLanguages[] = [];
    public reducedRepoLanguageData: Object = {};

    constructor() {
        makeAutoObservable(this);
        this.init();
    }

    public async init(): Promise<void> {
        // Get GitHub data
        await this.getGitHubRepoNames();
        await this.getGitHubRepoLanguages();

        // Combine languages and sum size 
        this.reduceGitHubLanguageData();

    }

    public async getGitHubRepoNames(): Promise<void> {
        await axios.get(`https://api.github.com/users/gohls/repos?per_page=30`)
            .then(action(res => {
                res.data.forEach((repo: any) => {
                    // This repo skews the data
                    // @TODO fix by adding some gitignore rules to the repo
                    if (repo.name !== 'vicinity-alarm-clock') {
                        this.repoNames.push(repo.name);
                    }
                });
            })).catch(action(error => {
                // @TODO set error boolean
                console.log(error);
            }));
    }

    public async getGitHubRepoLanguages(): Promise<void> {
        await axios.all(this.repoNames.map((name => {
            return axios.get(`https://api.github.com/repos/gohls/${name}/languages`);
        }))).then(action(res => {
            res.forEach((res) => {
                this.repoLanguages.push(res.data);
            })
        })).catch(action(error => {
            // @TODO set error boolean
            console.log(error);
        }));
    }

    @action
    public reduceGitHubLanguageData(): void {
        this.reducedRepoLanguageData = this.repoLanguages.reduce((acc, curr) => {
            for (const lang in curr) {
                if (lang in acc) acc[lang] += curr[lang];
                else acc[lang] = curr[lang];
            }
            return acc;
        });
    }

    @action
    public selectMenuOption(selectedOption: MENU_OPTIONS): void {
        this.option = selectedOption;
    }

    // @computed
    // public get languagePercentages(): ILanguageProps {
    //     let sum: number = 0;
    //     this.reduceGitHubLanguageData.
    // }
}

export default MenuOptionsStore;

