// library
import React, { useEffect, useState } from 'react'
import "./style.css"
import { Box, Flex } from '@chakra-ui/react'
import axios from 'axios'

// component 



import { URLCoze } from '../API/ConstantAPI'
import CozeListComponent from './CozeListComponent'
import CozeSearchComponent from './CozeSearchComponent'

const CozeMainComponent = () => {
const [listDataAll,setListDataAll]= useState([]);
const [listData2,setListData2]= useState([]);
const [listData3,setListData3]= useState([]);
const [listData4,setListData4]= useState([]);
const [listData5,setListData5]= useState([]);
const [listData6,setListData6]= useState([]);
const [listData7,setListData7]= useState([]);
const [colorText,setColorText] = useState(null)
const [tab, setTab] = useState(null);
const [value,setValue] = useState('1')
const changeColorText = (color) => {
  setColorText(color)
}
const handleTabClick = (index,color)=>{
  changeColorText(color);
  setTab(index);
}

useEffect(()=> {
  if(value === "1"){
    const newListData = listDataAll.sort((a,b)=>{
      const textA = a.name.toUpperCase();
      const textB = b.name.toUpperCase();
      return textA < textB ? - 1 : textA > textB ? 1 : 0;
    });
    console.log("newListData 1 :",newListData)
    setListDataAll(newListData)
  }else{
      const newListData = listDataAll.sort((a,b) =>{
        const textA = a.name.toUpperCase();
        const textB = b.name.toUpperCase();
        return textA > textB ? - 1 : textA < textB ? 1 : 0;
      })
      console.log("newListData 1 :",newListData)
      setListDataAll(newListData)
  }
 },[value])


useEffect(()=>{
  if(tab === 2){
    const newListData = listData2.filter((item)=> item.category.includes("New Reading"))
    console.log("check news reading",newListData)
    setListDataAll(newListData)
  }else if(tab === 3){
    const newListData = listData3.filter((item)=> item.category.includes("Photo"));
    setListDataAll(newListData)
  }else if(tab === 4){
    const newListData = listData4.filter((item)=> item.category.includes("Utility"));
    setListDataAll(newListData)
  }else if(tab === 5){
    const newListData = listData5.filter((item)=> item.category.includes("Convenient Living"));
    setListDataAll(newListData)
  }else if(tab === 6){
    const newListData = listData6.filter((item)=> item.category.includes("Web Search"));
    setListDataAll(newListData)
  }else if(tab === 7){
    const newListData = listData7.filter((item)=> item.category.includes("Social"));
    setListDataAll(newListData)
  }
  else{
    axios({
      method: 'get',
      url: URLCoze,
      responseType: 'stream',
    })
    .then(async (response)=>{
     
      const dataAPI = JSON.parse(response.data);
      
      setListDataAll(dataAPI)
      setListData2(dataAPI)
      setListData3(dataAPI)
      setListData4(dataAPI)
      setListData5(dataAPI)
      setListData6(dataAPI)
      setListData7(dataAPI)
      
      
    })
    .catch((error)=> window.alert(`${error}`))
  }

},[tab])
  return (
        <>
        <Box background={"#F7F7FA"} p={"30px"} h={"100vh"}>
          
          
            {/* search  */}
            <CozeSearchComponent 
            listDataAll={listDataAll}
            setListDataAll={setListDataAll}
            value={value}
            setValue = {setValue}
            />
            {/* List  */}
            <CozeListComponent
            setTab={setTab}
            listDataAll={listDataAll}
            colorText={colorText}
            setColorText={setColorText}
            changeColorText={changeColorText}
            handleTabClick={handleTabClick}


            />
        </Box>
        </>
  )
}

export default CozeMainComponent
