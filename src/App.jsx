import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import "mdui/mdui.css";
import "mdui";

export default function App() {
  const [data, setData] = useState(0);

  useEffect(() => {
    axios("https://api.quotable.io/random")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  function reload() {
    window.location.reload();
  }

  return (
    <main>
      <p className="unquote">Цитата: </p>
      <q>{data.content}</q>
      <div>- {data.author}</div>
      <p className="unquote">Добавлено: {data.dateAdded}</p>
      <mdui-button onClick={reload}>Сгенерировать ещё</mdui-button>
    </main>
  );
}
