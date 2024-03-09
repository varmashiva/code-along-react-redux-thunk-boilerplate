import { useDispatch, useSelector, useStore } from 'react-redux'
import './App.css'
import fetch_data from './Redux/fetchaction'
import { useState } from 'react'

function App() {
  const [load, setload] = useState({ load: false, sub: false })
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  return (
    <div className='container' >
      <button onClick={() => {
        setload({ ...load, sub: true })
        dispatch(fetch_data())
        setload({ sub: true, load: true })
      }}>fetch data</button>


      {load.sub ?
        load.load &&
        state.map((element, index) => {
          return (
            <div key={index}>
              <hr />
              <p>{element.name}</p>
              <p>{element.email}</p>
            </div>)
        }) : load.sub && (<p>loading..</p>)
      }
    </div>
  )
}

export default App