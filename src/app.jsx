
import './app.css';

function app() {
  const name = 'elleit'
  return (
    <>
    <h1>hello :0🎆</h1>

    {name && <h1>hello :0 {name}</h1> }
    {
      ['🎈','🧨'].map(item=> <h1>{item}</h1>)
    }
    </>
  );
}

export default app;
