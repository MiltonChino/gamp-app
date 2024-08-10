import { useState } from 'react'

type Props = {}

function Counter({}: Props) {
    const [count, setCount] = useState(0)
  return (
    <div className="card">
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
    <p>
      Envia tu solicitud aqui
    </p>
  </div>
  )
}

export default Counter