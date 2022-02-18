import './App.css';
import {makeStyles} from '@material-ui/core/styles'
import GridComp from './components/GridC'
//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//import Container from '@material-ui/core/Container';


const useStyles=makeStyles((theme)=>({
  root:{
    width: '50%'
  }
}))


function App() {
  return (
    <div className="App">
      <GridComp/>
    </div>
  );
}

export default App;
