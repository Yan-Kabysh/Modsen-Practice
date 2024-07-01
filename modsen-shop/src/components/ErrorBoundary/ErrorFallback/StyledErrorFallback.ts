import { breakpoints } from "@/constants/Breakpoints";
import styled from "styled-components";
import '@/styles/variables.css';


const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.s};
  text-align: center;
`;

const Title = styled.div`
 font-family: var(--font-family-dm-sans);
  font-size: var(--font-size-33);
  font-weight: var(--font-weight-500);
  line-height: var(--line-height-43);
  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: var(--font-size-16);
    line-height: var(--line-height-27);
  }
`;

const Caption = styled.div`
  font-family: var(--font-family-dm-sans);
  font-size: var(--font-size-20);
  font-weight: var(--font-weight-400);
  line-height: var(--line-height-26);
  color: black;
  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: var(--font-size-12);
    line-height: var(--line-height-20);
  }
`;

export default { Wrapper, Title, Caption };