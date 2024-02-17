import { createContext, useReducer, useState } from "react";

export const DataContext = createContext({projectsCount: [], dispatchProjectsCount: () => {}, Experiences: [], dispatchExperiences: () => {}, tabSelected:'', setTabSelected: () => {} })

const PcountFun = (currentArr, action) => {

    if (action.pCount === 0) {
        return [];
    }

    let newArr = [];
    for (let i = 0; i < action.pCount; i++) {
        newArr = [...newArr, i+1];
    }
    
    return newArr;
};


const ExpCountFun = (currentArr, action) => {
    let newArray = []

    for (let j = 0; j < action.eCount; j++) {
        newArray = [...newArray, j+1];
    }

    return newArray
};

const DataProvider = ({children}) => {
    const [projectsCount, dispatchProjectsCount] = useReducer(PcountFun, []);
    const [Experiences, dispatchExperiences] = useReducer(ExpCountFun, []);
    const [tabSelected, setTabSelected] = useState('Home')

    return <DataContext.Provider value={{projectsCount, dispatchProjectsCount, Experiences, dispatchExperiences, tabSelected, setTabSelected}} >{children}</DataContext.Provider>
}

export default DataProvider;