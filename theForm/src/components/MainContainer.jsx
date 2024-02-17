const MainContainer = ({children}) => {
    return <div className="container-fluid">
    <div className="row justify-content-center">
      <div className="col-lg-5 col-md-6 col-sm-7 col-10">
        {children}
      </div>
    </div>
  </div>
}

export default MainContainer;