import './Header.css';

export default function Header ({handleLogout, user}){

  if(user){
    return (
      <section className="navbar">
      <div className="navbar-items">
        <div className="nav-item"><a href="/">Home</a></div>
        <div className="nav-item"><a href="/aboutus">About Us</a></div>
        <div className="nav-item"><a href="/recordings">Recordings</a></div>
        <div className="nav-iten"><a href="/contactus">Contact Us</a></div>
      </div>
      <div className='navbar-right'>
        <div className="nav-item"><a className="active" href="/signup">Start Journey</a></div>
      </div>
    </section> 
    )
  }else{
    return (
      <section className="navbar">
      <div className="navbar-items">
        <div className="nav-item"><a href="/">Home</a></div>
        <div className="nav-item"><a href="/aboutus">About Us</a></div>
        <div className="nav-item"><a href="/recordings">Recordings</a></div>
        <div className="nav-iten"><a href="/contactus">Contact Us</a></div>
      </div>
      <div className='navbar-right'>
        <div className="nav-item"><a className="active" onClick={handleLogout} href="/">Logout</a></div>
      </div>
    </section> 
    )
  }
}