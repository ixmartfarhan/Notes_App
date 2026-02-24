import { useState } from 'react'
const App = () => {
  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault();

    const copyTask = [...task];

    copyTask.push({title,detail});

    setTask(copyTask);

    setTitle('');
    setDetail('');
  }
  const deleteNote = (idx)=>{
    const copyTask = [...task];

    copyTask.splice(idx,1);
    setTask(copyTask);

  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form 
      onSubmit={(e)=>{
        submitHandler(e);
      }}
      className='flex items-start flex-col lg:w-1/2 gap-4 p-10'>
        <h1 className='text-4xl font-bold'>Add Notes</h1>
          
        <input 
        type="text" 
        className='px-2 py-5 w-full border-2 rounded outline-none font-medium'
        placeholder='Enter Notes Heading'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value);
        }}
        />

        <textarea
        type='text'
        className='px-2 py-5 h-32 flex items-start flex-row w-full  border-2 rounded outline-none font-medium'
         placeholder='Enter Details' 
         value={detail}
         onChange={(e)=>{
          setDetail(e.target.value);
         }}
         />

         <button 
         className='px-2 py-5 active:scale-95 rounded border-2 w-full bg-white text-black outline-none font-medium'
         >Add Notes</button>

      </form>

      <div className='lg:w-1/2 lg:border-l-2 p-10'>

      <h1 className='text-4xl font-bold'>Your Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto'>
        {task.map(function(elem,idx){
          return <div className='flex justify-between flex-col items-start relative h-60 w-45 rounded-xl bg-cover text-black pt-9 pb-4 px-4 bg-[url(https://imgs.search.brave.com/O1CfhH9XNK1oCNKCR1uCNLmuJyIzHYrQadRZDDWoPq8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTMv/ODY5LzgwMy9zbWFs/bC9ibGFuay1zdGlj/a3ktbm90ZS1yZW1p/bmRlci1wYXBlci1w/bmcucG5n)]'>
           <div>
            <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
            <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>{elem.detail}</p>
           </div>
          
           <button onClick={()=>{
            deleteNote(idx);
           }} 
           className='w-full bg-red-600 cursor-pointer active:scale-95 text-xm text-white rounded font-bold'>Delete</button>
          
          </div>;
        })}
        </div>
      </div>
    </div>
  )
}

export default App
