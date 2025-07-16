import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Button } from './components/ui/button.tsx';

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <div>
              <a href="https://vite.dev" target="_blank">
                  <img src={viteLogo} className="logo" alt="Vite logo"/>
              </a>
              <a href="https://react.dev" target="_blank">
                  <img src={reactLogo} className="logo react" alt="React logo"/>
              </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                  count is {count}
              </button>
              <p>
                  Edit <code>src/App.tsx</code> and save to test HMR
              </p>
              <h1 className="text-4xl font-bold text-blue-600 mb-8">
                  Shadcn Button Test
              </h1>
              <Button>Click Me!</Button>
              <Button variant="outline" className="ml-4">Outline Button</Button>
              <Button variant="secondary" className="ml-4">Secondary Button</Button>
              <Button variant="destructive" className="ml-4">Delete Button</Button>
              <Button variant="ghost" className="ml-4">Ghost Button</Button>

          </div>
          <p className="read-the-docs">
              Click on the Vite and React logos to learn more
          </p>
      </>
  )
}

export default App
