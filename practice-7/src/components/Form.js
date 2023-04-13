import React, { useState } from "react"

const Form = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  const handleClick = () => {
    alert("Hello " + firstName + " " + lastName + "!")
    setFirstName("")
    setLastName("")
  }

  return (
    <>
      <form>
        <div>
          <input type="text" name="firstName" value={firstName} placeholder="First Name" onChange={e => setFirstName(e.target.value)} />
        </div>
        <div>
          <input type="text" name="lastName" value={lastName} placeholder="Last Name" onChange={e => setLastName(e.target.value)} />
        </div>
      </form>
      <button onClick={handleClick}>GREET ME</button>
    </>
  )
}

export default Form
