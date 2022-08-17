import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import './Dashboard.css';



function DashboardPage()
{
  return(
    <div className='dashboard'>

            <h1>داشبورد</h1>

            
 

            <p>اینجا پلن کاربری شماست</p>

            <br />

            <Link to="/new-product">
                  <Button
                    label="ساخت محصول جدید"
                  />
                </Link>

        </div>
  );

}
export default DashboardPage;
