/* import { useState } from 'react'

function login() {
  const [email, setEmail] = useState('')
  const [password, setPass] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Email:</label>

      <input
        type="email"
        required
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Password:</label>

      <input
        type="password"
        required
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPass(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  )
}

export default Login */
import { useState } from 'react'

function Login() {
  const [count, setCount] = useState(0)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function print(e) {
    e.preventDefault()
    console.log("Email: ", email)
    console.log("Password: ", password)
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-blue-500">
        Hi!
      </h1>

      <br />

      <div>
        <form onSubmit={print}>

          <label>Email :</label>

          <input
            placeholder="Enter your email"
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <br />

          <label>Password :</label>

          <input
            placeholder="Enter your password"
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <br />

          <button type="submit">Submit</button>

        </form>
      </div>
    </>
  )
}

export default Login