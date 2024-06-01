import { Input, Box } from "@chakra-ui/react";
import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && text !== "") {
      onAdd({ text });
      setText("");
    }
  };

  return (
    <Box>
      <Input
        variant="flushed"
        placeholder="Add Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </Box>
  );
};

export default AddTask;