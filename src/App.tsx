import PhoenixMap from './components/Map/PhoenixMap';
import AIAlert from './components/Alerts/AIAlert';

function App() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ width: '60%' }}>
        <PhoenixMap />
      </div>
      <div style={{ width: '40%', padding: '20px' }}>
        <h2>AI Manager</h2>
        <AIAlert />
      </div>
    </div>
  );
}

export default App;