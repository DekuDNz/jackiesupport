import { Box, Button, Flex,Input,Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Select } from '@chakra-ui/react'

const CozeSearchComponent = (props) => {
  const {listDataAll,setListData,value,setValue} = (props)


 


  return (
    <>
    <Flex pb={"30px"} justifyContent={"space-between"}>
    <Text style={{fontSize:"20px",fontWeight:"800"}}>Plugins</Text>
    <Flex>
    <Box>
      <Flex alignItems={"center"} gap={"10px"}>
      <span>Sort</span>
      <Select onChange={(e)=> setValue(e.target.value)} >
      <option selected value='1'>Option 1</option>
      <option selected value='2'>Option 2</option>
      </Select>
      </Flex>
    
    </Box>
    </Flex>
    <Flex gap={"30px"}>
      <Box className='input-search'>
      <Input placeholder='search' w={"350px"} pl={"50px"}/>
      <i class="fa fa-search"></i>
      </Box>
      <Button _hover={{backgroundColor:"blue",color:"white"}} backgroundColor={"navy"} color={"white"} w={"150px"} h={"38px"}>Submit plugin</Button>
   

    </Flex>
   </Flex>
    </>
  )
}

export default CozeSearchComponent