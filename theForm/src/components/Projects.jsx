import { useContext } from "react";
import { DataContext } from "../store/DataStore";

const Projects = () => {
    const {projectsCount} = useContext(DataContext)
    

    return <>
    {projectsCount.map((number) => (
        <div key={`${number}project`} className="container-fluid mt-5">

        <h4 className=" mb-3" >Project {number} </h4>
        <div className="row">
            <div className="col">
                <label className="form-label mb-3" htmlFor="ProjectTitle">Project {number} Title</label>
                <input className="form-control mb-3" type="text" placeholder="Enter Project Title" />
            </div>
            
            <div className="col">
                <label className="form-label mb-3" htmlFor="RoleInProject">Role</label>
                <input className="form-control mb-3" type="text" placeholder="Enter Role in Project" />
            </div>
        </div>

        <div className="row">
            <div className="col">
                <label className="form-label mb-3" htmlFor="Client">Project Client</label>
                <input className="form-control mb-3" type="text" placeholder="Enter Client for Project" />
            </div>
            <div className="col">
                <label className="form-label mb-3" htmlFor="Location">Project Location</label>
                <input className="form-control mb-3" type="text" placeholder="Enter Project Location" />
            </div>
            
            <div className="col">
                <label className="form-label mb-3" htmlFor="Duration">Project Duration</label>
                <input className="form-control mb-3" type="text" placeholder="Enter Project Duration" />
            </div>
        </div>

        <div className="row">
            <label className="form-label mb-3" htmlFor="Description">Project Description</label>
            <textarea name="Description" className="form-control mb-3 " placeholder="Enter Description in Bullet Points" cols="30" rows="5"></textarea>
        </div>

    </div>
    ))}
    </>
}

export default Projects;