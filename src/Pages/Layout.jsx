import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="container">
        <div className="sidebar">
          <ul>
            <li>
              <Link to="/">
                <i className="fa fa-home"></i>Dashboard
              </Link>
            </li>
            <li>
              <Link to="/movie-list">
                <i className="fa fa-list"></i>List
              </Link>
            </li>
          </ul>
        </div>
        <div className="content">
          <div className="header">Frontend React Test</div>
          <div className="info">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
