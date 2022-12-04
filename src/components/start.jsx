import './start.css'
import {Link} from 'react-router-dom'
function Start(){
	return(
		<div className='main'>
			<h2>Tic-Tac-Toe</h2>

			<div className='info'>
				<h3>how to play</h3>
				<hr/>
				<p>
					Tic-Tac-Toe is a simple and fun game for 2 players, X and O. It is played on a 3x3 grid. Each player's goal is to make 3 in a row.
				</p>
			</div>
			<Link to='/board' className='btn'>Start</Link>
		</div>
		)
}

export default Start