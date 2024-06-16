import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   }
   body{
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
   }
   button{
    color: ${(props) => props.theme.colors.text};
   }
   .iconPath{
    fill: ${(props) => props.theme.colors.text};
   }
   @font-face {
      font-family: "Allerta Stencil";
      src: url(${require('@/fonts/AllertaStencil-Regular.ttf')})
    }
    @font-face {
      font-family: "DM Sans";
      src: url(${require('@/fonts/DMSans-VariableFont_opsz,wght.ttf')})
    }
`;

export { Global };
