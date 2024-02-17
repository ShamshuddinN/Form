import { useContext } from "react"
import { DataContext } from "../store/DataStore"

const Header = () => {
  const {tabSelected, setTabSelected} = useContext(DataContext)
  // console.log(tabSelected);
    return <div className="container bg-secondary rounded rounded-3 mt-1 mb-3 bg-opacity-25 ">
    <header className="d-flex justify-content-center py-3">
      <ul className="nav nav-pills">
        <li onClick={() => {setTabSelected('Home')}} className="nav-item me-2 mycur" ><p className= {`nav-link ${tabSelected === 'Home' && 'active'}`} aria-current="page">Home</p></li>
        <li onClick={() => {setTabSelected('Form')}} className="nav-item ms-2 mycur" ><p  className= {`nav-link ${tabSelected === 'Form' && 'active'}`} >Form</p></li>
      </ul>
    </header>
  </div>
}

export default Header;