import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Video from '../components/Video'

export default function Event() {
  return (
    <>
      <Header />

      <main className="flex">
        <Video />

        <Sidebar />
      </main>
    </>
  )
}
