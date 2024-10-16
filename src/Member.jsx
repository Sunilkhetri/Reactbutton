
import React from "react"
function Member(probs){
    return(
        <div>
            <h1>Member components</h1>
            <button onClick={(probs.member)}>Call GetMember</button>
        </div>
    )
}
export default Member