import axios from "axios";
import {useState,useRef} from "react";
const Register=()=>{
    const username=useRef();
    const password=useRef();
    const conform_password=useRef();
    const email=useRef();
    const gender=useRef();
    const mobile_number=useRef();
    const address=useRef();
    const [msg,setMsg] = useState("");
    const reg=()=>{
        axios.post(`http://localhost:8082/insertdetails`,{'username':username.current.value,'password':password.current.value,'conform_password':conform_password.current.value,'email':email.current.value,'gender':gender.current.value,'mobile_number':mobile_number.current.value,'address':address.current.value}).then((posRes)=>{
        const {data} = posRes;
        const {message} = data;
        setMsg(data)
        },(errRes)=>{
            console.log(errRes);
        })
    }
    return(
        <>

            <h1>{msg}</h1>
        <div class="main">
           <h2>Employee Registration Form </h2>
           {
            <form name={"regForm"}>
           <table>
            <tr>
                <td>Name</td>
                <td><input type="text" ref={username} placeholder="enter your name"/></td>
            </tr>
            <tr>
                <td>Password</td>
                <td><input type="password" ref={password} placeholder="enter your password"/></td>
            </tr>
            <tr>
                <td>Conform Password</td>
                <td><input type="password" ref={conform_password} placeholder="retype your password"/></td>
            </tr>
            <tr>
                <td>Email</td>
                <td><input type="email" ref={email} placeholder="enter your mail address"/></td>
            </tr>
            <tr>
                <td>Gender</td>     
                <td><input type="Radio" ref={gender} />Male
                    <input type="Radio" ref={gender} />Female</td>
           </tr>
           <tr>
                <td>Mobile No</td>
                <td><input type="text" ref={mobile_number}/></td>
            </tr>
            <tr>
                <td>Address</td>
                <td><textarea ref={address}></textarea></td>
            </tr>
            <tr>
                <td></td>
                <td><button onClick={reg}>Register</button></td>
            </tr>
           </table>
           </form>
            }
            </div>
        </>
    )
}
export default Register;