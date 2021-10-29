import { action, makeAutoObservable, observable } from "mobx";
import { MENU_OPTIONS } from "../enums";

export class MenuOptionsStore {
    @observable public option: MENU_OPTIONS = MENU_OPTIONS.EXPERIENCE;

    constructor() {
        makeAutoObservable(this)
    }

    @action
    public selectMenuOption(selectedOption: MENU_OPTIONS): void {
        this.option = selectedOption;
    }
}

export default MenuOptionsStore;
