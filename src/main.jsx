import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'


//provider used to access globally--store we named imported

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
   <Provider store={store}> 
    <App /></Provider>
  </React.StrictMode>,
)
