import './App.css';
import ContentTile from '../ContentTile/ContentTile'
import { SnackbarProvider } from 'notistack'

function App() {
  return (
	<div align="middle">
		<br></br>
		<br></br><br></br><br></br><br></br><br></br><br></br>
	  <SnackbarProvider maxSnack={3} style={{direction:'rtl'}}>
		<ContentTile />
	  </SnackbarProvider>
	</div>
  );
}

export default App;