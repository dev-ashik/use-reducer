import logo from './logo.svg';
import './App.css';
import UseReduce from './componets/UseReduce/UseReduce';
import PatientReducer from './componets/PatientReducer/PatientReducer';
import PatientManagement from './componets/PatientManagement/PatientManagement';

function App() {
  return (
    <div className="App">
      <UseReduce/>
      <PatientManagement/>
    </div>
  );
}

export default App;
