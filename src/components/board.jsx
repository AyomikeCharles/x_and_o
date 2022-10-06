import './board.css'
import Boxes from './boxes';
import Winner from './winner'
import {useState,useEffect} from 'react'
import errSound from './../resource/sound1.mpeg'
import okSound from './../resource/sound2.mpeg'
import cheer from './../resource/sound.aac'
import useSound from 'use-sound'


function Board() {

const [player, setPlayer] = useState(true)
const [x, setX] = useState(0)
const [o, setO] = useState(0)
const [round, setRound] = useState(0)
const [game, setGame] = useState(Array(9).fill(null))
const [error] = useSound(errSound,{volume:0.04});
const [okClick] = useSound(okSound,{volume:0.04});
const cheers = new Audio(cheer);







const play = (i) =>{
  const winner = winFunction(game);

  if(winner=='X' || winner=='O' || !game.includes(null)){
    return;
  }


  if(game[i]==null){
    game.splice(i,1,player?'X':'O')
    setGame(game)
    setPlayer(!player)
    okClick();
    update()
  }else{
    error();
  }

}

const update = () =>{
  const winner = winFunction(game);

  if(winner=='X'){
    setRound(val=>val+1)
    setX(cur=>cur+1)
  }

  if(winner=='O'){
    setO(cur=>cur+1)
    setRound(val=>val+1)
  }

  if(!game.includes(null)){
    setRound(val=>val+1)
  }

}

// useEffect(()=>{
// if(player==false){
//   setTimeout(()=>{
//     comm(game)
//   }, 3000)
// }
// },[player])

// const comm =(val)=>{
//   let checkPattern = [
//           [0,1,2],
//           [3,4,5],
//           [6,7,8],

//           [0,3,6],
//           [1,4,7],
//           [2,5,8],

//           [0,4,8],
//           [2,4,6]

//   ]

//   if(val[rand]==null)

//   for(let i=0; i<checkPattern.length; i++){
//       const [a,b,c] = checkPattern[i];

//       if(val[a]=='X' && val[a]==val[b]){

//           if(val[c]==null){
//               game.splice(c,1,player?'X':'O')
//               setGame(game)
//               setPlayer(player)
//               okClick.play();
//               update()
//             }


//           }else if(val[a]=='X' && val[a]==val[c]){
//               if(val[c]==null){
//                 game.splice(c,1,player?'X':'O')
//                 setGame(game)
//                 setPlayer(player)
//                 okClick.play();
//                 update()
//               }
//             }
      
//       }
//   }



const winFunction=(val)=>{
  let winPattern = [
          [0,1,2],
          [3,4,5],
          [6,7,8],

          [0,3,6],
          [1,4,7],
          [2,5,8],

          [0,4,8],
          [2,4,6]

  ]

  for(let i=0; i<winPattern.length; i++){
      const [a,b,c] = winPattern[i];

      if(val[a] && val[a]==val[b] && val[a]==val[c]){
        return val[a]
      }
  }
}

const winState = winFunction(game);


let status;

if(winState){
  status = `Player ${winState} won this round`

}else if(!game.includes(null) && winState==null){

  status = 'There is no winner';

}else{

  status = `Player ${player?'X':'O'} turn`

}


const handleRestart = () =>{
  setGame(Array(9).fill(null));
  setPlayer(true)
}

const handleReset = () =>{
  setGame(Array(9).fill(null));
  setPlayer(true)
  setX(0)
  setO(0)
  setRound(0)
}



  return (
    <>
    <div className='wrapper'>
    {round===3? <Winner winner={x>o?'X':o>x?'O':'no winner'}/>:null}
    <h3>Round: {round}</h3>
    <h1>{status}</h1>
    <div className="App">
      {game.map((item, index)=>{
        return(
          <Boxes key={index} value={game[index]} onClick={()=>play(index)}/>
          )
      })
    }

      
    </div>
    
    {round===3?
    <div>
        <button className='bt' onClick={handleReset}>New Game</button>
    </div>:winState||status=='There is no winner'?
    <div>
        <button onClick={handleRestart}>Next</button>
    </div>:
    null
    }
    <div className='roundS'>
      <h3>Player X: {x}</h3>
      <h3>Player O: {o}</h3>
    </div>
    </div>
    
    </>
  );
}

export default Board;
