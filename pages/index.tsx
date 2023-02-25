
import { Inter } from '@next/font/google'
import React, { useState } from 'react'

import { Heading } from '@chakra-ui/react'
import { Input, Text, Checkbox, Button } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import { DeleteIcon, AddIcon } from '@chakra-ui/icons'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [value, setvalue] = useState("")
  const [todo, settodo] = useState([])
  let ary: any = []

  function add(): void {
    setvalue("")
    ary = todo;
    ary.push(value)
    settodo(ary)
  }

  return (
    <ChakraProvider>
      <>
        <div className="main">
          <div className="todo">
            <Heading className='heading'>TODO</Heading>
            <div style={{ width: "100%", display: "flex", gap: '10px' }}>
              <Input placeholder='Enter Todo' size='md' focusBorderColor='#5c3998' value={value} onChange={(e) => setvalue(e.target.value)} />
              <Button colorScheme='blue' onClick={add}><AddIcon boxSize={4} /></Button>
            </div>
            {/* Enter Item */}

            <div className="itemParent">
              {
                todo.map((v) => {
                  return (
                    <div className="item" key={v}>
                      <Checkbox size="lg" colorScheme='green'>  </Checkbox>
                      <div style={{ width: '100%', paddingLeft: "5px" }}>
                        <Text fontSize='l'>{v}</Text>
                      </div>
                      <DeleteIcon w={6} h={6} color="gray.500" />
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </>
    </ChakraProvider>
  )
}
