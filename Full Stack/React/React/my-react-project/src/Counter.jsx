import { useState } from "react"

const Counter = () => {
    const [countp,setCountp] = useState(0);
    const [countn,setCountn] = useState(0);
    return (
        <div>
            <div>
            <button type="button" onClick={() => setCountp(countp+1) } >counting positive:{countp}</button>
            <button type="button" onClick={() => setCountn(countn-1) } >counting negetive:{countn}</button>
            </div>
        </div>
    )
}
export default Counter
//type this