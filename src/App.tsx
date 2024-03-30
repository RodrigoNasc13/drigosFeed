import { Post } from './components/posts'
import { Header } from './components/header'
import { Sidebar } from './components/sidebar'

export function App() {
  return (
    <div>
      <Header />

      <div className="max-w-[70rem] flex flex-col mx-auto my-8 px-1 gap-8 lg:flex-row">
        <Sidebar />

        <main className="flex flex-col gap-8">
          <Post
            onComentCreated={function (): void {
              throw new Error('Function not implemented.')
            }}
          />
        </main>
      </div>
    </div>
  )
}
