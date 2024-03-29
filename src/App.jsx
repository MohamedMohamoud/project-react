import React from 'react';
import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom';
import Login from './components/Login';
import { Provider } from 'react-redux';
import  Store  from './redux/app/store';
const App = () => {
  return 
  <Provider store={store}>
  <div className="app">
    <Router>
      <Routes>
         <Route path="/" element={<Login/>}/>
      </Routes>
    </Router>
  </div>
  </Provider>
 
  
}

export default App

