import axios from "axios";
import {useEffect,useState} from "react";
const Get = ()=>{
    const [arr,setArr] = useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:8082/getdetails`).then((posRes)=>{
           const {data} =posRes;
           setArr(data);
        },(errRes)=>{
            console.log(errRes);
        });
    },[]);
    
    return(
        <>
        <h1 align={`center`}>REGISTRATION DETAILS</h1>
            <br></br>
            <br></br>
             <table border={1}
                   align="center"
                   cellSpacing={10}
                   cellPadding={10}>
                <tr>
                    <th>_ID</th>
                    <th>USERNAME</th>
                    <th>PASSWORD</th>
                    <th>CONFORM PASSWORD</th>
                    <th>EMIAL</th>
                    <th>GENDER</th>
                    <th>MOBILE</th>
                    <th>ADDRESS</th>
                </tr>
                {
                    arr.map((element,index)=>{
                        return(
                            <tr key={index}>
                                <td>{element._id}</td>
                                <td>{element.username}</td>
                                <td>{element.password}</td>
                                <td>{element.conform_password}</td>
                                <td>{element.email}</td>
                                <td>{element.gender}</td>
                                <td>{element.mobile_number}</td>
                                <td>{element.address}</td>
                            </tr>
                        )
                    })
                }
            </table> 

        </>
        
    )
}
export default Get;