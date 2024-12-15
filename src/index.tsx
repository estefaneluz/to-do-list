import App from '@/pages/App'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { Providers } from './providers'

import '@/index.css'
import 'tailwindcss/tailwind.css'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <BrowserRouter>
    <Providers>
      <App />
    </Providers>
  </BrowserRouter>
)
