import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <header className="d-flex justify-content-start py-3">
              <ul className="nav nav-pills">
                <li className="nav-item">
                  <NavLink className='nav-link fw-bold' to={`/`}>
                    Home
                  </NavLink >
                </li>
                <li className="nav-item">
                  <NavLink className='nav-link fw-bold' to={`/about`}>
                    About
                  </NavLink >
                </li>
                <li className="nav-item">
                  <NavLink className='nav-link fw-bold' to={`/contact`}>
                    Contact
                  </NavLink >
                </li>
              </ul>
            </header>
          </div>
        </div>
      </div>
    </header>
  );
}
