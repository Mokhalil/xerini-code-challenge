import React from 'react';
import { Fragment } from 'react';
import { NavLink, useHistory } from 'react-router-dom';


const styles = {
    current : "bg-purple-700 text-white px-3 py-2 rounded-md text-sm font-semibold",
    other : "text-white hover:bg-purple-500 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-semibold"
}
const NavigationBar = () => {
    const history = useHistory();
    const setStyle=(tab : string)=>{
        if(history.location.pathname===tab)
            return styles.current
        return styles.other;
    }
    return (
        <Fragment>
            <nav className={'bg-purple-800'}>
               <div className={'max-w-7xl mx-auto px-10'}>
                   <div className={'flex flex-row items-center'}>
                       <div>
                           <img className={'h-12 w-64 fill-current text-gray-500'} src={'Xerini-logo-lock-up.svg'}/>
                       </div>
                       <div className={'ml-24'}>
                           <div className={'space-x-4 items-baseline'}>
                               <NavLink to="/" className={setStyle('/')}>Dashboard</NavLink>
                               <NavLink to="/team" className={setStyle('/team')}>Team</NavLink>
                               <NavLink to="/projects" className={setStyle('/projects')}>Project</NavLink>
                               <NavLink to="/reports" className={setStyle('/reports')}>Reports</NavLink>
                           </div>
                       </div>
                   </div>
               </div>
            </nav>
        </Fragment>
    );
};

export default NavigationBar;