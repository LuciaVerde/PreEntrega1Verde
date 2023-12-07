import React from 'react'
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';
import { Center, Square, Circle } from '@chakra-ui/react'


const App = () => {
  return (
    <div>
      <NavBar />
      <Center color='black'>
        <ItemListContainer greeting={"Bienvenidos a mi web de arte"} />
      </Center>

    </div>
  )
}

export default App