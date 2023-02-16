import {useRef,useState} from "react";
const Login=()=>{
    const box1=useRef();
    const box2=useRef();
    const [str,setStr]=useState("");
    const func_one=()=>{
        box1.current.value=="admin123@gmail.com" && box2.current.value =="12345" ?setStr("Login Succes") :setStr("Login Fail");
    }
    return(
        <>
        <div class="main">
           <h2>Employee Login Form </h2>
           {
           <table>
            <tr>
                <td>Email</td>
                <td><input type="email" placeholder="enter your name" ref={box1}/></td>
            </tr>
            <tr>
                <td>Password</td>
                <td><input type="password" placeholder="enter your password" ref={box2}/></td>
            </tr>
            <tr>
                <td></td>
                <td><button onClick={func_one}>Login</button></td>
            </tr>
           </table>
            }
            <h1>{str}</h1>
            </div>
        </>
    )
}
export default Login;