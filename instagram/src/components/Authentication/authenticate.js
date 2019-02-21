import React from 'react';
import Login from './component/Login';


const withConditionalRender = FirstComponent => SecondComponent => props => {
    if (localStorage.getItem('user')) {
      return <PostPage />;
    }
    
    return <App />;
  };
  
  export default withConditionalRender;

