
import PropTypes from 'prop-types';
export default function Input(props){
    return(
        <div>
            <label>{props.label}</label>
            <input 
            type={props.type} 
            value={props.value} 
            onChange={props.onChange} 
            required={props.required} />
        </div>
    )
}


Input.PropTypes = {
    label : PropTypes.string,
    type : PropTypes.string,
    onChange : PropTypes.func,
    required : PropTypes.bool,
}