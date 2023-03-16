import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import './Dashboard.css';



function DashboardPage()
{
  return(
    <div className='dashboard'>

            <h1>Dashboard</h1>

            
 

            <p>This is Your Managment Dashboard</p>

            <br />

            <Link to="/new-product">
                  <Button
                    label="Create new product"
                  />
                </Link>

        </div>
  );

}
export default DashboardPage;
