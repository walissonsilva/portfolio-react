import React from 'react';
import PageHeader from '../PageHeader';

import './styles.css';

interface PageDefaultProps {

}

const PageDefault: React.FC<PageDefaultProps> = (props) => {  
  return (
    <div className="page">
      <PageHeader />

      <main className="container">
        { props.children }
      </main>
    </div>
  );
}

export default PageDefault;