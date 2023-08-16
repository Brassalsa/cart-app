import GitHubIcon from '@mui/icons-material/GitHub';
import img from '../assets/react.png';

export default function About(){

    return(<div className="page">
    <div className="card board">
  <div className='flex column'>
  <h4>This is a fictional store and none of the products displayed here exist.</h4> 
    <h4 className='flex'><img className='logo' src={img} alt="react png" />Made with React</h4>
    <h4>Products' information and images: Fake Store API.</h4>
<h4 className='flex'><GitHubIcon></GitHubIcon>Brassalsa</h4>
  </div>
    </div>
    </div>)
}