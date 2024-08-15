import DefaultLayout from '@/layouts/default'
import Dashboard from '@/modules/Dashboard'

function App() {
  return (
    <DefaultLayout>
      {/* TODO: mobx selected team */}
      <Dashboard/>
    </DefaultLayout>
  )
}

export default App
