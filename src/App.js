import React from 'react'
import LesionViewer from './components/LesionViewer'
const app = () => {
  const polypoints = [
    [{ x: 10, y: 0, z: 1 }, { x: 1, y: 0, z: 30 }, { x: 1, y: 1, z: 20 }, { x: 0, y: 1, z: 30 }],
    [{ x: 2, y: 2, z: 0 }, { x: 3, y: 2, z: 20 }, { x: 3, y: 3, z: 0 }, { x: 2, y: 3, z: 0 }],
    [{ x: 22, y: 32, z: 1 }, { x: 4, y: 2, z: 10 }, { x: 3, y: 21, z: 0 }, { x: 21, y: 3, z: 0 },{ x: 2, y: 3, z: 0 },{ x: 2, y: 3, z: 0 },{ x: 2, y: 3, z: 0 }],
    [{ x: 42, y: 21, z: 2 }, { x: 37, y: 1, z: 0 }, { x: 3, y: 3, z: 0 }, { x: 2, y: 33, z: 0 }],
    [{ x: 23, y: 2, z: 3 }, { x: 23, y: 1, z: 0 }, { x: 3, y: 8, z: 0 }, { x: 21, y: 31, z: 10 }],
    [{ x: 22, y: 2, z: 4 }, { x: 31, y: 2, z: 0 }, { x: 3, y: 3, z: 3 }, { x: 2, y: 3, z: 12 }],
  ];
  return(
    <>
    <LesionViewer
      polypoints={polypoints}
    />
    </>
  )
}
export default app