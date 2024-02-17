import { useContext } from "react"
import { DataContext } from "../store/DataStore"

const Experience = () => {

    const {Experiences} = useContext(DataContext);

    return <>
    {Experiences.map((num) => (
        <div key={`exp${num}`} className="container-fluid">
            <h4 className="mt-4 mb-3" >Experience {num}</h4>
        <div className="row">
            <div className="col mt-2 mb-2">
                <label className = "form-label" htmlFor="companyName"> {num}. Company/Organisation Name  </label>
                <input className = "form-control"  type="text" placeholder="Enter Company/Organisation Name Here" />
            </div>
            <div className="col mt-2 mb-2">
                <label className = "form-label" htmlFor="companyLocation"> Location Worked </label>
                <input className = "form-control"  type="text" placeholder="Enter Location You Worked" />
            </div>
        </div>

        <div className="row">
            <div className="col mt-2 mb-2">
                <label className = "form-label" htmlFor="designation"> Enter Designation </label>
                <input className = "form-control"  type="text" placeholder="Enter your Designation in Company" />
            </div>
                
            <div className="col mt-2 mb-2">
                <label className = "form-label" htmlFor="duration"> Enter Duration from </label>
                <input className = "form-control"  type="date"  />
                
                <label className = "form-label" htmlFor="duration"> Enter Duration to </label>
                <input className = "form-control"  type="date"  />
            </div>

        </div>

        <div className="row">
            <label className = "form-label" htmlFor="ExperienceDescription">Description</label>
            <textarea className = "form-control" name="ExperienceDescription"  cols="30" rows="5" placeholder="Enter Your Experience Description"></textarea>
        </div>

    </div>
    ))}
    </>
}

export default Experience;