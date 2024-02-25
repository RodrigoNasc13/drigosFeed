import { Header } from './components/header'
import { Sidebar } from './components/sidebar'

export function App() {
  return (
    <div>
      <Header />

      <div className="max-w-[70rem] flex mx-auto my-8 px-1">
        <Sidebar />

        <main></main>
      </div>
    </div>
  )
}
