import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyled = createGlobalStyle`
  ${reset}
  *{
        box-sizing: border-box;
    }
    body{
        width: 100%;
        height: 100vh;
        font-family: 'Chakra Petch', sans-serif;
    }

`

export default GlobalStyled;