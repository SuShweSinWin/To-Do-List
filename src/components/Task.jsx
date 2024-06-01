import { Box, Text } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";

const Task = ({ task, onDelete }) => {
  return (
    <Box
      bgColor={"#9fd3c7"}
      m={"5px"}
      p={["10px", "20px"]}
      color={"#ffff"}
      cursor={"pointer"}
      sx={{
        "&:hover": {
          transition: "transform 0.8s ease",
          transform: "translateY(-5px)",
        },
      }}
    >
      <Text
        color={"#142d4c"}
        fontWeight={"bold"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box flex={"2"}>{task.task}</Box>

        <FiMoreVertical style={{ color: "#ffff", marginRight: "10px" }} />
        <FaTrash style={{ color: "#ffff" }} onClick={() => onDelete(task.id)} />
      </Text>
    </Box>
  );
};

export default Task;
