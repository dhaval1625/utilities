import ButtonBase from './ButtonBase';

function ButtonDark(props) {
   return (
      <ButtonBase {...props} className={`${props.className ? props.className : ''} btn-primary bg-dark-100`}>
         {props.children}
      </ButtonBase>
   );
}
export default ButtonDark;
