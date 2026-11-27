import { Link, Outlet } from "react-router-dom";
function AdminLayout() {
    return (
        <>
           <div>Admin Layout</div>
            <nav>
                <Link to="admindashboard">Admin Dashboard</Link>
                <Link to="settings">Settings</Link>
                <Link to="userdetails">User Details</Link>
            </nav>
            <Outlet />
        </>
    );
}
export default AdminLayout;