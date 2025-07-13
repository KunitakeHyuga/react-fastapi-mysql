// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from "react";
import axios from "axios";

function App() {
	const [data, setData] = React.useState<{ name: string }[] | null>(null);
	const url = "http://localhost:8080";

	const GetData = () => {
		axios.get(url).then((res) => {
			setData(res.data);
		});
	};

  const url_users = "http://localhost:8080/users";

	const GetData_users = () => {
		axios.get(url_users).then((res) => {
			setData(res.data);
		});
	};

	return (
		<div>
			{/* <div>8080</div>
			{data ? <div>{data.Hello}</div> : <button onClick={GetData}>データを取得　Hello</button>} */}
      <div>8080/users</div>
		  {data && data[1] ? <div>{data[1].name}</div> : <button onClick={GetData_users}>データを取得　Users</button>}
		</div>

	);
}

export default App;
