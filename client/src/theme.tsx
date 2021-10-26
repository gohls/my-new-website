import { Theme, createTheme } from "@material-ui/core/styles";

const makeTheme = (): Theme => {
    return createTheme({
        palette: {
            background: {
                default: '#0e1212',
            },
        }
    });
};

export default makeTheme;
