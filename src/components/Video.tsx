import { useState } from 'react'

type Props = {}

function Video({}: Props) {
    const [count, setCount] = useState(0)
  return (
    <div className="card">
    <button onClick={() => setCount((count) => count + 1)}>
      Visits {count}
    </button>
    <p>
      Aqui va el video de pasorapa
    </p>
  </div>
  )
}

export default Video