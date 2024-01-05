import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {Link}  from 'react-router-dom';


function navigation() {
  return (
    <nav>
        <div className="logo">Salome <span>amaobi</span> </div>
        <div className="menulinks">
           <Router>
            <ul>
                <li to='/'><Link>Home</Link></li>
                <li to='/'><Link>About me</Link></li>
                <li to='/'><Link>Expertise</Link></li>
                <li to='/'><Link>Products</Link></li>
                <li to='/'><Link>Resources</Link></li>
                <li to='/'><Link>Contact</Link></li>
            </ul>
           </Router>
        </div>
    </nav>
  )
}

export default navigation