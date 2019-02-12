// Higher order component - a component (HOC) that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state


import React from 'react';
import ReactDOM from 'react-dom';

const Info =(props)=>(
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);


const withAdminConfig = (WrappedComponent)=>{
  return(props)=>(
    <div>
    { props.isAdmin && <p>Private info. Please don't share</p>}
    <WrappedComponent {...props}/>
    </div>
  )
};

const requireAuthentication = (WrappedComponent)=>{
  return(props)=>(
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
          <p>Please login to view the info</p>
        )}
    </div>
  );
}


const AdminInfo = withAdminConfig(Info);
const AuthInfo = requireAuthentication(Info);


// ReactDOM.render(<AdminInfo isAdmin={false} info="There are the details"/>, document.getElementById('app'));

ReactDOM.render(<AuthInfo isAuthenticated={false} info="There are the details" />, document.getElementById('app'));
