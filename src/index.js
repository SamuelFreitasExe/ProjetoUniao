import React from 'react';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import Site from './site/Components/site.jsx';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
   <StrictMode>
     <Site />
   </StrictMode>,
 );