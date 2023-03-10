export declare type LogType = 'info' | 'log' | 'warn' | 'error';
export declare type Pair = Record<string, string>;
export declare type BgColor<ColorMap extends Pair> = Record<`bg${Capitalize<Extract<keyof ColorMap, string>>}`, string>;
export declare type Output = [string, string];
export declare type InferStyle<styleMap> = {
    [Style in keyof styleMap]: {
        (message: string): Output;
    } & InferStyle<Omit<styleMap, Style>>;
};
export declare type InferLog<Logs extends readonly string[]> = {
    [k in Logs[number]]: {
        (...outputs: Output[]): void;
    };
};
