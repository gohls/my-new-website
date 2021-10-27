import { Theme, createTheme } from "@material-ui/core/styles";

const makeTheme = (): Theme => {
    return createTheme({
        palette: {
            background: {
                default: '#0e1212',
            },
            text: {
                primary: "#FFFFFF"
            }
        },
        typography: {
            fontFamily: [
                '"Roboto Mono"',
                'Roboto',
            ].join(','),
            subtitle1: {
                color: "gray"
            }
        }
    });
};

export default makeTheme;
