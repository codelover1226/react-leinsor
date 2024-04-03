
import './App.css';
import LesionViewer from './components/LesionViewer';
function App() {
  const polypoints = [
    [{ x: 0, y: 0, z: 0 }, { x: 1, y: 0, z: 0 }, { x: 1, y: 1, z: 0 }, { x: 0, y: 1, z: 0 }],
    [{ x: 2, y: 2, z: 0 }, { x: 3, y: 2, z: 0 }, { x: 3, y: 3, z: 0 }, { x: 2, y: 3, z: 0 }],
 ];

 return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <LesionViewer polypoints={polypoints} />
    </div>
 );
}

export default App;
