  import { Box, Checkbox, Text } from "@chakra-ui/react";
  import { useState } from "react";
  import { FaTrash } from "react-icons/fa";
  import { FiMoreVertical } from "react-icons/fi";

  const Task = ({ task, onDelete, onChange }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckbox = (e) => {
      if (e.key === "Enter") {
        onChange(task.id, e.target.checked);
      }
    };

    return (
      <Box
        draggable
        border={"1px solid steelblue"}
        borderRadius={"5px"}
        // bgColor="#ffff"
        m={6}
        p={["10px", "20px"]}
        color="#ffff"
        cursor="pointer"
        sx={{
          "&:hover": {
            bgColor: "rgba(255, 255, 255, 0.1)",
            transition: "transform 0.8s ease",
            transform: "translateY(-5px)",
          },
        }}
        style={{ textDecoration: isChecked ? "line-through" : "none" }}
      >
        <Text
          color="#504aa7"
          fontWeight="bold"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Checkbox
          defaultChecked
            mr="4"
            isChecked={isChecked}
            onChange={(e) => setIsChecked(e.currentTarget.checked)}
            onKeyUp={handleCheckbox}
          />
          <Box position={"relative"} flex="2" color={'#4fb9fc'}>
            {task.task}
          </Box>
          <FiMoreVertical style={{ color: "#ffff", marginRight: "10px" }} />
          <FaTrash style={{ color: "#ffff" }} onClick={() => onDelete(task.id)} />
        </Text>
      </Box>
    );
  };

  export default Task;
