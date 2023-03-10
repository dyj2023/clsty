import { StyleMap } from "./style";
import { InferLog, InferStyle, LogType } from "./types";
declare const logs: LogType[];
declare type Clsty = InferStyle<StyleMap> & InferLog<typeof logs>;
declare const clsty: Clsty;
export default clsty;
