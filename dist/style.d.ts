import { BgColor } from "./types";
export declare const color: {
    red: string;
    green: string;
    blue: string;
    purple: string;
    pink: string;
    black: string;
    white: string;
    yellow: string;
};
export declare const modifier: {
    bold: string;
    italic: string;
    underline: string;
    linethrough: string;
};
declare type colorType = typeof color;
declare type backgroundColorType = BgColor<colorType>;
export declare type StyleMap = colorType & typeof modifier & backgroundColorType;
export declare const styles: StyleMap;
export {};
