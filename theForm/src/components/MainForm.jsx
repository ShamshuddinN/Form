import Experience from "./Experience";
import Projects from "./Projects";

const MainForm = () => {


    const FormHandle = (e) => {
      e.preventDefault();

    }

    return <form onSubmit={FormHandle}>
    <div className="mb-3">
      <label htmlFor="InputName" className="form-label">Name</label>
      <input type="text" className="form-control" id="CName" placeholder="Enter Candidate name"/>
    </div>
    
    <div className="mb-4">
      <label htmlFor="CandidateMail" className="form-label">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter Candidate Email"/>
    </div>

    <Projects></Projects>

    <div className="mb-4">
      <label htmlFor="skills" className="form-label" >Skills</label>
      <textarea name="skills" className="form-control" cols="30" rows="3" placeholder="Enter Skills (Comma Seperated)" ></textarea>
    </div>
    
    <Experience></Experience>
   
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
}

export default MainForm;