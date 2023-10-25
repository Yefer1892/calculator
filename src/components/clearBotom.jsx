import '../stylesheets/clear.css'

const ClearButton = (props) => (
  <button className='clear--boton'
    onClick={() => props.manejarClear(props.children)}>
    {props.children}
  </button>
);

export default ClearButton;