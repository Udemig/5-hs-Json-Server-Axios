import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [todoText, setTodoText] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3030/todos').then((res) => setData(res.data));
  }, []);

  // gönder butonuna tıklanınca:
  const handleSubmit = () => {
    const newTodo = {
      id: new Date().getTime(),
      title: todoText,
      date: new Date().toLocaleString(),
      isDone: false,
    };

    axios
      .post('http://localhost:3030/todos', newTodo)
      .then(() => setData([...data, newTodo]));
  };

  console.log(data);

  return (
    <div className="container">
      <p>Merhaba Dünya</p>
      <div className="d-flex">
        <input
          className="form-control"
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button className="btn btn-info" onClick={handleSubmit}>
          Gönder
        </button>
      </div>
      <div className="d-flex flex-column gap-5 mt-5">
        {data.map((todo) => (
          <div className="border p-4 ">{todo.title}</div>
        ))}
      </div>
    </div>
  );
}

export default App;

// Axioss ------------
// axios.get();
// axios.post('api-url', { veri: 'gönderilecek-veri' });
// axios.put('api-url/books/1', { veri: 'güncellenecek-veri' });
// axios.delete('api-url/books/1');

// const fetchData = async () => {
//   const res = await axios.get('https://jsonplaceholder.typicode.com/todos/');
//   console.log(res);
// };
