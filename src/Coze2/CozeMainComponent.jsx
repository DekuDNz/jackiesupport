import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Center,
  Divider,
  Flex,
  Grid,
  Heading,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { URLCoze } from "../API/ConstantAPI";
import { SunIcon, StarIcon } from "@chakra-ui/icons";
// Show UI
/**
 * 1. Viết ui cho tab
 * 2. Viết Ui tổng cho listCard
 * 3. Tạo State với array  rỗng và state này để hiển thị UI
 * 4. Trong componentList viết useEffect để gọi API
 * 5. Trong list UI tổng dùng hàm map ra UI chính thông qua listData ở useState
 *
 */

/**
 *  tab1, tab2, tab3
 *
 * th1: fixed
 * tab1: call api => list = 15
 * tab2: list.filter => list = 5
 * tab3: list = []
 *
 * ko fix dc
 * tab1: list = 15
 * tab3: list = 10;
 * tab2: list = []; listDefault
 */

// Filter theo tab
/**
 * 1. Viet useState cho set tab
 * 2. Khi click vào tab nào thì sẽ set cho tab đó
 * 3. Viết hàm onClick trong từng button theo setTab ở useState
 * 4. Viết useEffect gọi API theo từng tab clicked
 * 5. Trong hàm useEffect của tab , viết hàm filter theo category
 */

/** Search
 * 1. Tao useState input , chuyen cac value trong o input thanh chu thuong va trim space
 * 2. Khi click submit => value nhap vao va danh sach
 */
const CozeMainComponent = () => {
  const [listCard, setListCard] = useState([]);
  const [listCardDefault, setListCardDefault] = useState([]);
  const [input, setInput] = useState("");

  const [tab, setTab] = useState(1);

  // click tab 2 => list card filter "Photo"
  //
  useEffect(() => {
    if (tab === 2) {
      console.log("check tab 2", listCard);
      const newListCard = listCardDefault.filter((item) =>
        item.category.includes("Photo")
      );
      setListCard(newListCard);
    } else if (tab === 3) {
      console.log("list 3", listCard);
      const newListCard = listCardDefault.filter((item) =>
        item.category.includes("Web Search")
      );
      setListCard(newListCard);
    } else {
      axios({
        method: "get",
        url: URLCoze,
        responseType: "response",
      }).then((response) => {
        const dataAPI = JSON.parse(response.data);
        setListCard(dataAPI);
        setListCardDefault(dataAPI);
      });
    }
  }, [tab]);

  const handleInput = (value) => {
    const newInput = value.replace(/\s+/g, "").toLowerCase();
    setInput(newInput);
  };

  const handleSearch = () => {
    if (input.length > 0) {
      const newListSearch = listCard.filter((item) =>
        item.name.replace(/\s+/g, "").toLowerCase().includes(input)
      );
      console.log("new list search", newListSearch);
      setListCard(newListSearch);
    } else {
      setListCard(listCardDefault);
    }
  };
  return (
    <>
      <Flex m={"30px 0"} alignItems={"center"} gap={"20px"}>
        <Input
          onChange={(e) => handleInput(e.target.value)}
          w={"300px"}
          placeholder="default placeholder"
        />
        <Button onClick={handleSearch} colorScheme="teal" size="xs">
          Search
        </Button>
      </Flex>
      <Flex gap={"5px"}>
        <Button onClick={() => setTab(1)} colorScheme="teal" size="sm">
          All
        </Button>
        <Button onClick={() => setTab(2)} colorScheme="teal" size="sm">
          Photo
        </Button>
        <Button onClick={() => setTab(3)} colorScheme="teal" size="sm">
          Web Search
        </Button>
        <Button onClick={() => setTab(4)} colorScheme="teal" size="sm">
          Utility Tool
        </Button>
        <Button onClick={() => setTab(5)} colorScheme="teal" size="sm">
          Social
        </Button>
      </Flex>
      <Grid templateColumns="repeat(5, 1fr)" gap={6} mt={"20px"}>
        {listCard.map((item) => {
          return (
            <Card maxW="sm" key={item.id}>
              <CardBody key={item.id}>
                <Image src={item.logo} alt={item.logo} borderRadius="lg" />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{item.name}</Heading>
                  <Text>{item.description}</Text>
                </Stack>
                <Button m={"20px 0"}>{item.category}</Button>
                <Flex gap={"20px"}>
                  <Flex alignItems={"center"} gap={"5px"}>
                    <StarIcon />
                    <Text>{item.star}</Text>
                  </Flex>
                  <Flex alignItems={"center"} gap={"5px"}>
                    <SunIcon />
                    <Text>{item.user}K</Text>
                  </Flex>
                </Flex>
              </CardBody>
            </Card>
          );
        })}
      </Grid>
    </>
  );
};

export default CozeMainComponent;
