import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/Header'
import MainForm from './components/MainForm'
import MainContainer from './components/MainContainer'
import DataProvider, { DataContext } from './store/DataStore'
import HomeForm from './components/HomeForm'
import { useContext } from 'react'

function App() {
  const {tabSelected} = useContext(DataContext)
  console.log(tabSelected);
  return (
    <DataProvider>
      <MainContainer>
        <Header />
        {tabSelected === 'Home' ? <HomeForm/> : <MainForm></MainForm>}
      </MainContainer>
    </DataProvider>
  )
}

export default App
