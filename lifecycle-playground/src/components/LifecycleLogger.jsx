import { useEffect, useState } from 'react'

const LifecycleLogger = () => {
  const [count, setCount] = useState(0)

  const updateCount = () => {
    setCount((prevCount) => prevCount + 1)
  }

  // Component Did Mount + Update + Unmount
  useEffect(() => {
    console.log('LifecycleLogger Mounted')

    return () => {
      console.log('LifecycleLogger Unmounted')
    }
  }, [])

  // no access to previous props or state here
  // but we can access prevstate and props via useRef if needed
  useEffect(() => {
    if (count > 0) console.log('LifecycleLogger Updated - Count:', count)
  }, [count])

  return (
    <div className="flex flex-col gap-4 items-center p-4 border border-gray-300 rounded-lg shadow-lg bg-white">
      <h2 className="text-lg font-semibold">Lifecycle Logger (FC)</h2>
      <p>Count: {count}</p>
      <button
        className="secondary-btn mt-2 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-700 transition"
        onClick={updateCount}
      >
        Update
      </button>
    </div>
  )
}

export default LifecycleLogger
