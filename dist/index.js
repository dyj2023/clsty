import { styles } from "./style";
const logs = ['info', 'log', 'warn', 'error'];
function createLogger(logType) {
    return function (...outputs) {
        let text = '';
        const _styles = [];
        outputs.forEach(output => {
            text += output[0];
            _styles.push(output[1]);
        });
        console[logType](text, ..._styles);
    };
}
function createClsty() {
    let cachedStyle = '';
    const clsty = (message) => {
        const style = cachedStyle;
        cachedStyle = '';
        return [`%c${message}`, style];
    };
    // setStyleMethod
    Object.entries(styles).forEach(([key, style]) => {
        Object.defineProperty(clsty, key, {
            get() {
                cachedStyle += style;
                return clsty;
            }
        });
    });
    // setLogMethod
    logs.forEach(type => clsty[type] = createLogger(type));
    return clsty;
}
const clsty = createClsty();
export default clsty;
