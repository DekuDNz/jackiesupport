import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { AddIcon } from '@chakra-ui/icons'
const CozeSideComponent = () => {
  return (
  <>
  <Flex position={"sticky"}  p={"25px"} w={"15%"} bg={"#FFFFFF"} flexDirection={"column"} justifyContent={'space-between'}>
    <Box h={"75%"} w={"100%"}>
        <Flex justifyContent={"left"} fontSize={"25px"} alignItems={"center"} gap={"7px"}>
        <i class="fa fa-apple-alt" style={{color:"white",backgroundColor:"navy",padding:"10px",borderRadius:"50%"}}></i>
        <Text style={{textTransform:"uppercase",fontWeight:'bold'}} >COZE</Text>
        </Flex>
        <Button  _hover={{ background: 'navy' }} m={"30px 0"} h={"35px"} bg={"#4D53E8"} color={"white"} w={"100%"}>
         Create bot
        </Button>
        <Flex bg={"#F6F6F6"} p={"10px"} borderRadius={"4px"} justifyContent={"left"} fontSize={"25px"} alignItems={"center"} gap={"7px"}>
        <i class="fa fa-home" style={{color:"blue",fontSize:"23px"}}></i>
        <Text style={{fontSize:"15px",fontWeight:'500'}} >Home</Text>
        </Flex>

        <Text display="block" pl={"10px"} fontSize={"12px"} m={"15px 0"}>Store</Text>

        <Flex  _hover={{ background: '#F6F6F6' }}  p={"10px"} borderRadius={"4px"} justifyContent={"left"} fontSize={"25px"} alignItems={"center"} gap={"7px"}>
        <i class="fab fa-weixin" style={{fontSize:"23px"}}></i>
        <Text  style={{fontSize:"15px"}} >Bots</Text>
        </Flex>

        <Flex  _hover={{ background: '#F6F6F6' }} p={"10px"} borderRadius={"4px"} justifyContent={"left"} fontSize={"25px"} alignItems={"center"} gap={"10px"}>
        <i class="fa fa-cube"  style={{fontSize:"23px"}}></i>
        <Text style={{fontSize:"15px"}} >Plugins</Text>
        </Flex>
        <Flex flexDirection={"row-reverse"}  p={"10px"} borderRadius={"4px"} justifyContent={"space-between"}  fontSize={"25px"} alignItems={"center"} gap={"10px"}>
        <AddIcon _hover={{ background: '#F6F6F6' }} fontSize={"15px"}/>
        <Text style={{fontSize:"12px"}} >My Workspace</Text>
        </Flex>

        <Flex  _hover={{ background: '#F6F6F6' }} p={"10px"} borderRadius={"4px"} justifyContent={"left"} fontSize={"25px"} alignItems={"center"} gap={"5px"}>
        <i class="fa fa-user" style={{color:"white",backgroundColor:"navy",padding:"10px",borderRadius:"50%",fontSize:"10px"}} ></i>
        <Text style={{fontSize:"15px"}} >Personal</Text>
        </Flex>
        
    </Box>
    <Box pt={"40px"} className='side-box-B' h={"25%"} w={"100%"}>
      <Flex justifyContent={"center"} pb={"40px"} gap={"30px"}>
      <i class="fab fa-facebook"></i>
      <i class="fab fa-telegram"></i>
      <i class="fab fa-windows"></i>
      <i class="fab fa-firefox"></i>
      </Flex>
      <hr />
      <Flex justifyContent={"center"} alignItems={"center"}  pt={"30px"} pb={"40px"} gap={"10px"}>
      <i class="fa fa-user-ninja"></i>
      <Text>Le Nguyen Viet Long</Text>
      </Flex>
   
    </Box>
  </Flex>
  </>
  )
}

export default CozeSideComponent