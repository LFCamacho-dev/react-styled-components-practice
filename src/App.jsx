import { ThemeProvider, createGlobalStyle } from 'styled-components';
import logo from './logo.svg'
import './App.css';
import StyledButton, { DarkButton, FancyButton, SubmitButton } from './components/Button/Button';
import { AnimatedLogo } from './components/AnimatedLogo/AnimatedLogo';


const theme = {
    dark: {
        primary: '#000',
        text: '#fff'
    },
    light: {
        primary: '#fff',
        text: '#000'
    },
    fontFamily: "Segoe UI",
}

const GlobalStyle = createGlobalStyle`
    button{
        font-family: ${(props => props.theme.fontFamily)};
    }
`


function App() {
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div className="App">

            <h2>Titulo</h2>
            <p>texto regular</p>

            <AnimatedLogo src={logo} alt="logo" />
            <hr />
            <StyledButton type='submit'>Styled</StyledButton>
            <hr />
            <StyledButton variant="outline">Styled</StyledButton>
            <hr />
            <FancyButton as="a">Fancy Button</FancyButton>
            <hr />
            <SubmitButton>Styled</SubmitButton>
            <hr />
            <DarkButton>Dark Button</DarkButton>
        </div>
    </ThemeProvider>
  );
}

export default App;
