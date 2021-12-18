import {FaTwitter} from "react-icons/fa";
import { FaDiscord } from 'react-icons/fa';

export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p id='introText'>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a href="https://twitter.com/SolSantaclaus" className="twitter social"> <FaTwitter size={70} /></a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://discord.gg/CyR98CRX" className="discord social"><FaDiscord size={70}/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
