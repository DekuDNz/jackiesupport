import { Flex } from '@chakra-ui/react'
import React from 'react'
import CozeSideComponent from './CozeSideComponent'
import CozeMainComponent from './CozeMainComponent'

const CozeComponent = () => {
  return (
    <Flex>
          <CozeSideComponent />
          <CozeMainComponent />
    </Flex>
  )
}

export default CozeComponent