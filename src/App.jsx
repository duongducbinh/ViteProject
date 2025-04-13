import { useState } from "react";

/* const gifts = [
  'CPU i9',
  'GPU RTX 3090',
  'Motherboard',
] */

const courses = [
  {
    id : 1,
    name: 'React',
  },
  {
    id : 2,
    name: 'Vue',
  },
  {
    id : 3,
    name: 'Angular',
  },
]

function App() {
  const [checked, setChecked] = useState([]);

  console.log(checked);
  const handleCheck = (id) => {
    if(checked.includes(id)) {
      setChecked(prev => prev.filter(item => item !== id));
      return;
    }
    setChecked(prev => [...prev, id]);
  }

  const submit = () => {
    console.log({
      ids: checked,
    });
  }

  return (
    <div style={{ padding: '20px' }}>
      {courses.map(course => (
        <div>
          <input type="checkbox" 
          checked={checked.includes(course.id)}
          onChange={() => handleCheck(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={submit}>submit</button>
    </div>
  )
}

export default App;