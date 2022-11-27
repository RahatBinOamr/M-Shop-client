import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../Hook/useAdmin';


const DashboardLayout = () => {
    const {user}=useContext(AuthContext)
    const [isAdmin]=useAdmin(user?.email)
   
    return (
        <div>
          
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    

                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to="/dashboard">My Phones</Link></li>
                      {
                        isAdmin && <>
                          <li><Link to="/dashboard/allUsers">All users</Link></li>
                          <li><Link to="/dashboard/addMobile">Add Mobile</Link></li>
                          <li><Link to="/dashboard/addReport">Report</Link></li>
                          <li><Link to="/dashboard/addBeyer">Beyer</Link></li>
                          <li><Link to="/dashboard/addSeller">Seller</Link></li>
                        </>
                      }
                       
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;