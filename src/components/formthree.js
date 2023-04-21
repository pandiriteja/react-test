import { useNavigate } from "react-router-dom";
import "../styles/formthree.css"
const Formthree=()=>{
    const Navigate=useNavigate();
    return(

        <div className="form-containerrr">
        <form className="form-textenttt">
            <div className="form-box">
                <label>city</label>
        <input required type="text" placeholder="enter your city" />
        </div>
        <div className="form-boxxg"> 
        <label>otp</label>
        <input required type="text" placeholder="enter your otp"/>
        </div>
       
        <button type="submit" >Submit</button>

        
        <button onClick={()=>Navigate("/form")}>Prev</button>
       
        
        </form>
    </div>
    

    )
}
export default Formthree;