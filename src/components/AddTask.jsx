import { Input, Box } from "@chakra-ui/react";
import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && text !== "") {
      onAdd({ task: text });
      setText("");
    }
  };

  return (
    <Box>
      <Input
        variant="filled"
        placeholder="Enter Quick Task Here"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        color={'#4fb9fc'}
      />
    </Box>
  );
};

export default AddTask;