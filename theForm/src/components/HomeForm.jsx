import { useContext, useRef } from "react";
import { DataContext } from "../store/DataStore";

const HomeForm = () => {
    const pc = useRef()
    const ec = useRef()

    const {dispatchProjectsCount, dispatchExperiences, setTabSelected} = useContext(DataContext)

    const homeFormHandle = (e) => {
        e.preventDefault();

        dispatchProjectsCount({pCount: pc.current.value});
        dispatchExperiences({eCount: ec.current.value});

        setTabSelected('Form');

    };

    return <form onSubmit={homeFormHandle} >
        <div className="row">
            <div className="col">
                <label className="form-label mb-3" htmlFor="Pcount">No of Projects</label>
                <input ref={pc} className="form-control mb-3" type="number"  />
            </div>
            
            <div className="col">
                <label className="form-label mb-3" htmlFor="expcount">No of Experience</label>
                <input ref={ec} className="form-control mb-3" type="number" />
            </div>
        </div>

        <button className="btn btn-success" type="submit" >Submit</button>
    </form>
}

export default HomeForm;