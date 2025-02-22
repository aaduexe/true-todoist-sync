import { Plugin } from "obsidian";

export default class TrueTodoistPlugin extends Plugin{
    onload(): Promise<void> | void {
        console.log("Did I show up?")
    }
}