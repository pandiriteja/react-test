
import { useNavigate } from "react-router-dom";
import "../styles/formtwo.css"
const Formtwo=()=>{
    const Navigate=useNavigate();
    return(
    
        <div className="form-containerr">
            <form className="form-textentt">
                <div className="form-box">
                    <label>education</label>
            <input required type="text" placeholder="enter your education" />
            </div>
            <div className="form-boxxx"> 
            <label>courses</label>
            <input required type="text" placeholder="enter your courses"/>
            </div>
            <div className="form-boxz">
            <label>jobwork</label>
            <input required type="text" placeholder="enter your jobwork" />
            </div>
            <div className="form-boxzz">
                <label>Salary</label>
            <input required type="password" placeholder="enter your salary"/>
            </div>
            <div className="form-boxz">
                <label>Location</label>
            <input required type="text" placeholder="enter the location"/>
            </div>

            <button onClick={()=>Navigate("/formthree")}>Next</button>

            
         
            </form>
        </div>
    )
 }
 export default Formtwo;