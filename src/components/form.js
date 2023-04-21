 import { useNavigate } from "react-router-dom";
 import "../styles/form.css"
 const Form=()=>{
    const Navigate=useNavigate();
    return(
    
        <div className="form-container" >
            <form className="form-textent">
                <div className="form-box">
                    <label>Firstname</label>
            <input required type="text" placeholder="enter your name" />
            </div>
            <div className="form-boxx"> 
            <label>Email</label>
            <input required type="text" placeholder="enter your email"/>
            </div>
            <div className="form-box">
            <label>Lastname</label>
            <input required type="text" placeholder="enter your lastname" />
            </div>
            <div className="form-box">
                <label>password</label>
            <input required type="password" placeholder="enter your password"/>
            </div>
            <button onClick={()=>Navigate("/formtwo")}>Next</button>

            
         
            </form>
        </div>
    )
 }
 export default Form;