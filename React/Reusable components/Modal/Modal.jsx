import cls from './Modal.module.css';

function Modal(props) {
   return (
      <>
         <div className={cls.overlay}></div>
         <div className={cls.modal}>{props.children}</div>
      </>
   );
}
export default Modal;
