import React, {FC} from 'react';
import { Link } from 'react-router-dom';
import routes from '../../config/routes';

const Error404: FC = () => {
  
  return (
    <main>
      <section className="hero-connection">
        <div className="o-container">
          <div className="heading-box mb0">
            <h1>STRANICA NIJE PRONAĐENA</h1>
          </div>
        </div>
      </section>
      <section className="no-page">
        <div className="o-container">
          <h1><strong>404</strong></h1>
          <h3>Stranica koju pokušavate da otvorite nije pronađena.</h3>
          <hr />
          <Link to={routes.homepage} className="button button--primary">Vratiti se na početnu</Link>
        </div>
      </section>
  </main>
  )  
}

export default Error404;
