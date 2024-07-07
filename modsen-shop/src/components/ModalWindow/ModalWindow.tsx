import useBodyScrollLock from '@/hooks/useBodyScrollLock';
import ReactDOM from 'react-dom';
import { Button } from '../Button/Button';
import { ContentStyle, ModalStyle, OverlayStyle } from './StyledModalWindow';

const ModalWindow = ({ isOpen, onClose, children }: any) => {
  useBodyScrollLock(isOpen);
  if (!isOpen) return null;

  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <ModalStyle>
      <OverlayStyle onClick={onClose}></OverlayStyle>
      <ContentStyle>
        {children}
        <Button onClick={onClose}>Close</Button>
      </ContentStyle>
    </ModalStyle>,
    modalRoot
  );
};

export { ModalWindow };
