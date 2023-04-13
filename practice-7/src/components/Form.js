import React, { useState } from "react"

function Form() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  return (
    <>
      <form>
        <div>
          <input value={firstName} name="firstName" placeholder="First Name" id="firstName" onChange={e => setFirstName(e.target.value)} />
        </div>
        <div>
          <input value={lastName} name="lastName" placeholder="Last Name" id="lastName" onChange={e => setLastName(e.target.value)} />
        </div>
      </form>
      <button onClick={() => alert("Hello " + firstName + " " + lastName + "!")}>GREET ME</button>
    </>
  )
}

export default Form
