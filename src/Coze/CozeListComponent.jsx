import { Box, Button, Card, CardBody, Flex, Grid, Heading, Image, Input, Stack, Tab, Text } from '@chakra-ui/react'
import styled from '@emotion/styled';
import  { useEffect, useState,React } from 'react'



const CozeListComponent = (props) => {
  const {listDataAll,colorText,handleTabClick} = props;


 

  

  return (
   <Box  >
   
    <Flex gap={"50px"} pb={"30px"}>
        <Text onClick={()=> handleTabClick(1,1) } style={{color:colorText === 1? "navy":""}} className='selectFilter' >ALL</Text>
        <Text onClick={()=> handleTabClick(2,2)} style={{color:colorText === 2? "navy":""}}  className='selectFilter' >News Reading</Text>
        <Text onClick={()=> handleTabClick(3,3)} style={{color:colorText === 3? "navy":""}} className='selectFilter'>Photo & Phography</Text>
        <Text onClick={()=> handleTabClick(4,4)} style={{color:colorText === 4? "navy":""}} className='selectFilter' >Utility Tools</Text>
        <Text onClick={()=> handleTabClick(5,5)} style={{color:colorText === 5? "navy":""}} className='selectFilter' >Convenient Living</Text>
        <Text onClick={()=> handleTabClick(6,6)} style={{color:colorText === 6? "navy":""}} className='selectFilter'>Web Search</Text>
        <Text onClick={()=> handleTabClick(7,7)} style={{color:colorText === 7? "navy":""}} className='selectFilter'>Social Communication</Text>
        
      </Flex>
      <Grid templateColumns='repeat(4, 1fr)' gap={6}>
        {listDataAll.map((item)=>{
          return(
            <Card  maxW='sm' key={item.id}>
            <CardBody>
              <Image
                src={item.logo}
                alt={item.name}
                borderRadius='lg'
                className='cozeItem'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>{item.name}</Heading>
                <span>{item.subtitle}</span>
                <Text>{item.description}</Text>

                <Text color='gray.600' fontSize='xs'>
                  {item.category}
                </Text>
                <Flex gap={10}>
                  <span>{item.star}K</span>
                  <span>{item.user}</span>
                </Flex>
              </Stack>
            </CardBody>
          </Card>

          )
        })}
     
      </Grid>
   </Box>
  )
}

export default CozeListComponent