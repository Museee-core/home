import { useLayoutEffect as useLE, useEffect } from 'react'

const useLayoutEffect = typeof window !== 'undefined' ? useLE : useEffect

export default useLayoutEffect
