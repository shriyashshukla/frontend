import React from 'react'

const Login = () => {
  let name = 'shriyash shukla'

  let num1 = 40;
  let num2 = 60;
  const addnums = (a, b) => {
    return a + b;
  }
  return (
    <div>
      <h2 style={{ color: 'red', backgroundColor: '', fontSize: 50 }}>Login here</h2>
      {name}
      <h3>product of {num1} and {num2} is {num1 * num2}</h3>
      <h1>{addnums(1, 68)}</h1>
      <p className="myclass">classname is used <br />instead of class in jsx</p>
    </div>
  )
}

export default Login