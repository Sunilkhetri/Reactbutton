
import React from "react"
function User(probs){
    return(
        <div>
            <h1>user components</h1>
            <button onClick={(probs.user)}>Call GetUser</button>
        </div>
    )
}
export default User