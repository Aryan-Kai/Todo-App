import addButton from '../assets/download.png'
import viewButton from '../assets/eyeIcon.png'
import todoIcon from '../assets/todoList.png'

function Home() {
  return (<div cclass='Parent' style={{flex:1,display:'flex',width:1500,height:1500}}>
    <div className='Main' style={{display:'flex',flex:1,flexDirection:'column',alignItems:'center'}}>
      <img src={todoIcon} className='TodoIcon' style={{marginTop:20,width:500,height:500}}/>
      <div className='Child' style={{display:'flex',width:1500,flexDirection:'row',justifyContent:'space-evenly',marginTop:40}}>
      <div>
        <a href='/create'>
      <img src={addButton} className='NewLogo' style={{}}/>
      <h2>Create New Todo</h2>
      </a>
      </div>
      <div>
      <a href='/existing'>
      <img src={viewButton} className='ExistingLogo' style={{}}/>
      <h2>View Existing Todo</h2>
      </a>
      </div>
      </div>
      </div>
      </div>
  );
}
export default Home;
