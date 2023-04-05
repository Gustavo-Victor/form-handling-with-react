import { useState } from "react";
import "./style.scss"; 

export default function Form() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        occupation: "",
        gender: "male",
        languages: []        
    }); 
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);        
    }
    
    
    const handleChangeForm = (e) => {
        if(e.target.name === "languages") {
            const formDataCopy = {...formData}
    
            if(e.target.checked) {
                formDataCopy.languages.push(e.target.value);                                 
            } else {
                const newLanguages = formDataCopy.languages.filter(lang => lang != e.target.value);
                formDataCopy.languages = [...newLanguages]; 
            }
            setFormData(formDataCopy);
        } else {            
            setFormData((prevState) => {
                return {
                    ...prevState, 
                    [e.target.name]: e.target.value,
                }
            })   
        }        
    }

    
    
    return (
        <form action="#" className="subscribe-form" onSubmit={handleSubmit}>
            <div className="form-group">            
                <label htmlFor="name">User Name:</label>
                <input name="username" onChange={handleChangeForm} type="text" id="name" htmlFor="name" required  /> 
            </div>
            <div className="form-group">            
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" onChange={handleChangeForm} htmlFor="email" required  /> 
            </div>
            <div className="form-group">            
                <label htmlFor="occupation">Occupation:</label>
                <select name="occupation" defaultValue="Select one" id="occupation" onChange={handleChangeForm} htmlFor="occupation" required>
                    <option value="Select one" disabled>Select one</option>
                    <option value="student">Student</option>
                    <option value="employee">Employee</option>
                    <option value="other">Other</option>
                </select>                
            </div>
            <div className="form-group">            
                <p>Gender: </p>
                <div className="align">                
                    <label className="label-align" htmlFor="male">                
                        <input type="radio" name="gender" id="male" onChange={handleChangeForm} value="male" defaultChecked /><span>Male</span>
                    </label> 
                    <label className="label-align" htmlFor="female">                    
                        <input type="radio" name="gender" id="female" onChange={handleChangeForm} value="female" /><span>Female</span>
                    </label>
                    <label className="label-align" htmlFor="other">                
                        <input type="radio" name="gender" id="other" onChange={handleChangeForm} value="other" /><span>Other</span>
                    </label>                                            
                </div>
            </div>
            <div className="form-group">
                <p>Languages: </p>
                <div className="align">
                    <label className="label-align" htmlFor="html">
                        <input type="checkbox" name="languages" id="html" onChange={handleChangeForm} value="html" /><span>HTML</span>
                    </label>
                    <label className="label-align" htmlFor="css">
                        <input type="checkbox" name="languages" id="css" onChange={handleChangeForm} value="css" /><span>CSS</span>
                    </label>   
                    <label className="label-align" htmlFor="js">
                        <input type="checkbox" name="languages" id="js" onChange={handleChangeForm} value="js" /><span>JS</span>
                    </label>   
                </div>
            </div>
            <div className="form-group">
                <button className="submit" id="submit" type="submit">Submit</button>
            </div>
        </form>
    )
}