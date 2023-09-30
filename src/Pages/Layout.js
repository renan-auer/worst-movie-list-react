import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div class="container">
        <div class="sidebar">
          <ul>
            <li>
              <Link to="/">
                <i class="fa fa-home"></i>Dashboard
              </Link>
            </li>
            <li>
              <Link to="/movie-list">
                <i class="fa fa-list"></i>List
              </Link>
            </li>
          </ul>
        </div>
        <div class="content">
          <div class="header">Frontend React Test</div>
          <div class="info">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
