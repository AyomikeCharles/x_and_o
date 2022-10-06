import './winner.css'
function Winner(props){
	return(
		<>
			<div className='win'>
				<h1>{props.winner=='X'? 'X is the winner':props.winner=='O'?'O is the winner':'No winner'}</h1>
				<p className='floatingWinner' id='p1'>{props.winner}</p>
				<p className='floatingWinner' id='p2'>{props.winner}</p>
				<p className='floatingWinner' id='p3'>{props.winner}</p>
				<p className='floatingWinner' id='p4'>{props.winner}</p>
				<p className='floatingWinner' id='p5'>{props.winner}</p>
				<p className='floatingWinner' id='p6'>{props.winner}</p>
			</div>
		</>
		)
}

export default Winner;