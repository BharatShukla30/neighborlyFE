import { useState } from "react";

const Demo = () => {
    const [method,setMethod] = useState("phone")
    const [status,setStatus] = useState("fillPhone")
    const [status2,setStatus2] = useState("fillEmailPass")

    if(method=== "phone"){
        console.log(status)

        if(status==="fillPhone"){
            return (<div><h1>
                phone no. component
            </h1>
            <button onClick={()=>{
                setMethod("email")
            }}>Use Email</button>
            
            </div>)
        }else{
            return (<h1>
                otp fill component
            </h1>)
        }
        
    }
    else{
        console.log(status2)
        if(status2==="fillEmailPass"){
            return (<div>
                <h1>
                    email password component
                </h1>
                <button onClick={()=>{
                    setMethod("phone")
                }}>Use Phone</button>
            </div>)
        }else{
            return (<h1>
                email verification component
            </h1>)
        }
    }



    
}
 
export default Demo;