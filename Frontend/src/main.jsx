import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "@/components/ui/provider"
import App from './App.jsx'
import { Theme } from "@chakra-ui/react"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <Theme appearance='light'>
      <App />
      </Theme>     
    </Provider>
  </StrictMode>,
)
