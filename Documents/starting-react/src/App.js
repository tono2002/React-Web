import './App.css';

function App() {
  return (
    <div
      style={{
        margin: "auto",
        width: 800,
        padding: "1rem"
      }}
    >
      <h1 className='title'>My first React Website</h1>
      <h2 className='author'>By Tono Abad</h2>

      <table width="100%">

        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>

        <tbody>
        <tr>
            <td>Tono Abad</td>
            <td>21</td>
          </tr>
        </tbody>

      </table>

    </div>
  );
}

export default App;
