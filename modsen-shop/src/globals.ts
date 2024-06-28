import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   }
   body{
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
   }
   button{
    color: ${({ theme }) => theme.colors.text};
   }
   .iconPath{
    fill: ${({ theme }) => theme.colors.text};
   }
   input{
    color: ${({ theme }) => theme.colors.text};
   }
   .thumb{
    background: ${({ theme }) => theme.colors.text};
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
