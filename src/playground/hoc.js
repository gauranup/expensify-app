//Higher Order Component

import React from 'react';
import ReactDOM from 'react-dom';
//import { ProgressPlugin } from 'webpack';

const Info =(props)=>(
    <div>
      <h1>Info</h1>
      <p>The info is :{props.info}</p>
    </div>
);

const withAdminWarning = (wrappedComponent)=>{
   return (props) => (
     <div>
       <p>This is private info,Please don't share</p>
       <wrappedComponent {...props}/>
     </div>
   
   );
};

const AdminInfo = withAdminWarning(Info);

ReactDOM.render(<AdminInfo info="There are the details" />,document.getElementById('app'));