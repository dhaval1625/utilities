import ButtonBase from './ButtonBase';

function Button(props) {
   return (
      <ButtonBase {...props} className={`${props.className ? props.className : ''} btn-primary`}>
         {props.children}
      </ButtonBase>
   );
}
export default Button;
