import React from 'react';
import '../Styles/menuBar.css';
import githubLogo from '../Assets/githublogo.png';
import linkedinLogo from '../Assets/linkedinlogo.png';
import outlooklogo from '../Assets/outlooklogo.png';

const Menubar: React.FC = () => {
  return (
    <nav className='menu-bar'>
      <a href="/" id='start'>D.</a>
      <div className='menu-right'>
        <a href="https://github.com/DylanAlz" target='_blank' rel="noopener noreferrer">
          <img src={githubLogo} alt="Github" className='menu-item' />
        </a>
        <a href="https://www.linkedin.com/in/dylan-styv-alzate-betancur-b30302263/" target='_blank' rel="noopener noreferrer">
          <img src={linkedinLogo} alt="Linkedin" className='menu-item' />
        </a>
        <a href="mailto:alzatedylan@gmail.com?subject=Hi%20Dylan,%20i%20want%20to%20collaborate%20with%20you." target='_blank' rel="noopener noreferrer">
          <img src={outlooklogo} alt="Outlook" className='menu-item' />
        </a>
      </div>
    </nav>
  )
}

export default Menubar;