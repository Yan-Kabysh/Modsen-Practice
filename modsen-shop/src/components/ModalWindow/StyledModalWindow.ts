import styled from "styled-components";

const ModalStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const OverlayStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ContentStyle = styled.div`
  position: relative;
  background: white;
  padding: 20px;
  border-radius: 5px;
  z-index: 1001;
  font-family: var(--font-family-dm-sans);
  font-size: var(--font-size-23);
  font-weight: var(--font-weight-400);
  line-height: var(--line-height-43);
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.background};

`;

export {ModalStyle, OverlayStyle, ContentStyle}