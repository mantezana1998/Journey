import { MDBBtn } from 'mdb-react-ui-kit';
import './Header.css';

export default function Header (){

    
    return (
      <section className="navbar">
          <div className="navbar-items">
                  <div className="nav-item"><a href="/">Home</a></div>
                  <div className="nav-item"><a href="/aboutus">About Us</a></div>
                  <div className="nav-item"><a href="/recordings">Recordings</a></div>
                  <div className="nav-iten"><a href="/contactus">Contact Us</a></div>

          </div>
          <div className='navbar-right'>
                  <div className="nav-item"><a class="active" href="/signup">Start Journey</a></div>
          </div>
      </section> 
    )
}