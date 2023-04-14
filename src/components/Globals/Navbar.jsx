import { useState, useEffect } from "react";
import "./navbar.scss";
import useComponentVisible from "../../Hooks/useComponentVisible";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [active, setActive] = useState(false);
  const { ref, isComponentVisible , setIsComponentVisible } = useComponentVisible(false);
  const {pathname} = useLocation()

  const isHomePage = pathname === '/' ;


  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: "Joe",
    isSeller: true,
  };

  return (
    <div className={active ||  !isHomePage ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <span className="brand">Fiverr</span>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Liverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>sign in </span>
          {!currentUser?.isSeller && <span>become a seller</span>}
          {!currentUser && <button className="join-btn">Join</button>}
          {currentUser && (
            <div className="user" ref={ref} onClick={()=>{setIsComponentVisible(!isComponentVisible)}}>
              <img className="user-imagee" src="" alt="" />
              <span>{currentUser.username}</span>
              {isComponentVisible && (
                <>
                  <ul className="options" >
                    {currentUser.isSeller && (
                      <>
                        <li className="option">
                          <Link to={'/gigs'} className="option__title link">Gigs</Link>
                        </li>
                        <li className="option">
                          <Link to={'/add'} className="option__title link">Add New Gig</Link>
                        </li>
                      </>
                    )}
                    <li className="option">
                      <Link to={'/orders'} className="option__title link">Orders</Link>
                    </li>
                    <li className="option">
                      <Link  to={'/messages'} className="option__title link">Messages</Link>
                    </li>
                    <li className="option">
                      <Link  to={'/add'} className="option__title link">Logout</Link>
                    </li>
                  </ul>
                </>
              )}
            </div>
          )}
        </div>
      </div>
      {(active || !isHomePage) && (
        <>
          <hr />
          <div className="menu">
            <Link className="link menuLink" to="/">
              Graphics & Design
            </Link>
            <Link className="link menuLink" to="/">
              Video & Animation
            </Link>
            <Link className="link menuLink" to="/">
              Writing & Translation
            </Link>
            <Link className="link menuLink" to="/">
              AI Services
            </Link>
            <Link className="link menuLink" to="/">
              Digital Marketing
            </Link>
            <Link className="link menuLink" to="/">
              Music & Audio
            </Link>
            <Link className="link menuLink" to="/">
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/">
              Business
            </Link>
            <Link className="link menuLink" to="/">
              Lifestyle
            </Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
}

export default Navbar;
