import './start.css'
import {Link} from 'react-router-dom'
function Start(){
	return(
		<div className='main'>
			<h2>X and O</h2>

			<div className='info'>
				<h3>how to play</h3>
				<hr/>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum
				</p>
			</div>
			<Link to='/board' className='btn'>Start</Link>
		</div>
		)
}

export default Start