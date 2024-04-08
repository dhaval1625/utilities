import ButtonBase from './ButtonBase';

function ButtonOutline(props) {
   return (
      <ButtonBase {...props} className={`${props.className ? props.className : ''} btn-outline`}>
         {props.children}
      </ButtonBase>
   );
}
export default ButtonOutline;
