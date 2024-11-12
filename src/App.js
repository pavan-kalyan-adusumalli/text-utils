import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About from "./components/About";
// import  {BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom";


function App() {
	const [mode, setMode] = useState("light");
	const [alert, setAlert] = useState(null);

	function handleThemeChange() {
		console.log('hai')
		if(mode === 'light')
		{
			setMode("dark")
			document.body.style.backgroundColor = "black"
			document.body.style.color = 'white'
		}
		else {
			setMode("light")
			document.body.style.backgroundColor = "white"
			document.body.style.color = 'black'
		}
	}

	const showAlert = (message, type) => {
		setAlert({
			msg: message,
			type: type,
		});

		setTimeout(() => {
			setAlert(null);
		}, 2000);
	};

	return (
		<>
			<Navbar mode={mode} themeChange={handleThemeChange} />
			<Alert alert={alert} />
			<TextForm showAlert={showAlert} />

			{/*<BrowserRouter>
			<Navbar mode={mode} themechange={handleThemeChange} />
				<Routes>
					<Route path="/aboutus" element={<About />} />
					<Route path="/" element = {<TextForm showAlert={showAlert} />} />
				</Routes>
			</BrowserRouter>*/}
		</>
  );
}

export default App;
