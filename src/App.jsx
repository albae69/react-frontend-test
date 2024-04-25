import Header from './components/Header'
import Cart from './components/Cart'
import Layout from './components/Layout'

export default function App() {
  return (
    <>
      <Header />

      <Layout>
        <Cart />
      </Layout>
    </>
  )
}
