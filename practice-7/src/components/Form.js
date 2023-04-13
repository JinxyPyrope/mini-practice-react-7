import React, { useState } from "react"
import "./Form.css"

function Form() {
  const [firstName, setFirstName] = useState("")

  return (
    <>
      <form>
        <div>
          <input value={firstName} placeholder="First Name" type="text" onChange={() => setFirstName(firstName)} />
        </div>
      </form>
      <button onClick={() => alert(setFirstName)}>Greet ME</button>
    </>
  )
}

export default Form
