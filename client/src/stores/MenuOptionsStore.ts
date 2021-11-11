import axios from "axios";
import { action, computed, makeAutoObservable } from "mobx";
import { MENU_OPTIONS } from "../enums";
import { TRepoLanguages, TGitHubLangaugeData } from "../types";


export class MenuOptionsStore {
    public option: MENU_OPTIONS = MENU_OPTIONS.EXPERIENCE;
    public repoNames: Array<string> = [];
    public repoLanguages: TRepoLanguages[] = [];
    public reducedRepoLanguageData: TGitHubLangaugeData = {};
    public sum: number = 0;

    constructor() {
        makeAutoObservable(this);
        this.init();
    }

    public async init(): Promise<void> {
        // Get GitHub data
        await this.getGitHubRepoNames();
        await this.getGitHubRepoLanguageData();

        // Combine languages and sum size 
        this.reduceGitHubLanguageData();

        // Calc size sum of all languages
        this.calcLanguagesSizeSum()
    }

    public async getGitHubRepoNames(): Promise<void> {
        await axios.get(`https://api.github.com/users/gohls/repos?per_page=30`)
            .then(action(res => {
                res.data.forEach((repo: any) => {
                    // This repo skews the data (because of included libs)
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

    public async getGitHubRepoLanguageData(): Promise<void> {
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
        this.reducedRepoLanguageData = this.repoLanguages.reduce((repos, repo) => {
            for (const language in repo) {
                if (language in repos) {
                    repos[language] += repo[language];
                } else {
                    repos[language] = repo[language];
                }
            }
            return repos;
        }, {});
    }

    @action
    public selectMenuOption(selectedOption: MENU_OPTIONS): void {
        this.option = selectedOption;
    }

    @action
    public calcLanguagesSizeSum() {
        const langData = this.reducedRepoLanguageData;
        for (const property in langData) {
            this.sum += langData[property];
        }
        return this.sum;
    }

}

export default MenuOptionsStore;

