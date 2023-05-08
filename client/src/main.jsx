import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router } from 'react-router-dom'
import { ModalContextProvider } from './context/modalContext.jsx'
import { QueryClient, QueryClientProvider } from 'react-query'
import { UserContextProvider } from './context/userContext.jsx'

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ModalContextProvider>
      <UserContextProvider>
        <QueryClientProvider client={client}>
          <Router>
            <App />
          </Router>
        </QueryClientProvider>
      </UserContextProvider>
    </ModalContextProvider>
  </React.StrictMode>,
)