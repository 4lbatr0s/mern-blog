import React from 'react';
// import ReactDOM from 'react-dom'; //depricated!
import  ReactDOM  from 'react-dom/client';
import App from './App';



//new way to render react page.
ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
);


//depricated!
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

