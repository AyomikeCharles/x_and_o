import './boxes.css'

const Boxes = (props) =>{
	return(
		<div className='box' onClick={props.onClick}>
			{props.value}
		</div>
		)
}

export default Boxes;