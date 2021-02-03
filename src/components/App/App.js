import './App.css';
import ContentTile from '../ContentTile/ContentTile'
import { SnackbarProvider } from 'notistack'

function App() {
  return (
	<div>
	  <SnackbarProvider maxSnack={3} style={{direction:'rtl'}}>
		<ContentTile title="ליגת מיטב - סיכום מדדים"
		src={require(`../../assets/images/${'power-bi-report.png'}`).default}
		tags={["#ליגת מיטב","#ליגת מיטב", "#ליגת מיטב","#ליגת מיטב" ]}
		body={`סיכום מדדי ליגת מיטב
							ציון כולל המורכב מאחוז מסיימי הליכים בהתייצבות ראשונה,
							סה"כ זמני שהייה וציון מדדי איכות`}/>
	  </SnackbarProvider>
	</div>
  );
}

export default App;