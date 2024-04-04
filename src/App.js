import React from 'react'
import LesionViewer from './components/LesionViewer'
const app = () => {
  const polypoints = [
  [{ x: 0, y: 0, z: 0 }, { x: 1, y: 0, z: 0 }, { x: 1, y: 1, z: 0 }, { x: 0, y: 1, z: 0 }],
  [{ x: 2, y: 2, z: 1 }, { x: 3, y: 2, z: 1 }, { x: 3, y: 3, z: 1 }, { x: 2, y: 3, z: 1 }],
  [{ x: 4, y: 4, z: 2 }, { x: 5, y: 4, z: 2 }, { x: 5, y: 5, z: 2 }, { x: 4, y: 5, z: 2 }],
  [{ x: 6, y: 6, z: 4 }, { x: 7, y: 6, z: 4 }, { x: 7, y: 7, z: 4 }, { x: 6, y: 7, z: 4 }],
  [{ x: 8, y: 8, z: 6 }, { x: 9, y: 8, z: 6 }, { x: 9, y: 9, z: 6 }, { x: 8, y: 9, z: 6 }],
  [{ x: 10, y: 10, z: 8 }, { x: 11, y: 10, z: 8 }, { x: 11, y: 11, z: 8 }, { x: 10, y: 11, z: 8 }],
  [{ x: -12, y: -12, z: 10 }, { x: -13, y: -12, z: 10 }, { x: -13, y: -13, z: 10 }, { x: -12, y: -13, z: 10 }],
  [{ x: 14, y: 14, z: -6 }, { x: 15, y: 14, z: -6 }, { x: 15, y: 15, z: -6 }, { x: 14, y: 15, z: -6 }],
  [{ x: 16, y: 16, z: -2 }, { x: 17, y: 16, z: -2 }, { x: 17, y: 17, z: -2 }, { x: 16, y: 17, z: -2 }],
  [{ x: 18, y: 18, z: -4 }, { x: 19, y: 18, z: -4 }, { x: 19, y: 19, z: -4 }, { x: 18, y: 19, z: -4 }],
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