import React, { useState } from "react"

const Form = () => {
  const [firstName, setFirstName] = useState("")
  // const [lastName, setLastName] = useState("")

  const handleChange = e => {
    setFirstName(e.target.value)
  }

  const handleClick = () => {
    alert("Hello " + firstName)
  }

  return (
    <>
      <form>
        <div>
          <input type="text" name="firstName" value={firstName} placeholder="First Name" onChange={handleChange} />
        </div>
      </form>
      <button onClick={handleClick}>GREET ME</button>
    </>
  )
}

export default Form
