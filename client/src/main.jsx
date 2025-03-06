import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppContextprovider } from './context/AppContext.jsx' // ✅ Keep this import
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppContextprovider>
      <App />
    </AppContextprovider>
  </BrowserRouter>,
)
