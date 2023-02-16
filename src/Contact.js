const Contact=()=>{
    return(
        <>
        <div class="main">
            <h2>Welcome To Contact Page</h2>
            {
           <table>
            <tr>
                <td>Mobile</td>
                <td><input type="text" placeholder="enter your mobile"/></td>
            </tr>
            <tr>
                <td>Web Site</td>
                <td><input type="text" placeholder="enter your website"/></td>
            </tr>
            <tr>
                <td>Mail-Id</td>
                <td><input type="email" placeholder="enter your mail-id"/></td>
            </tr>
            <tr>
                <td></td>
                <td><input type="submit" /></td>
            </tr>
           </table>
            }
            </div>
        </>)
}
export default Contact;