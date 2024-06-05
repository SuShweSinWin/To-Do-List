import { Box, Text } from "@chakra-ui/react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    const id = tasks.length + 1;

    const newTask = { id, ...task };
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
  };

  const deleteTask = (id) => {
    console.log("delete", id);
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  return (
    <Box
      w={'100%'}
      p={4}
      bgColor={'#242424'}
    >
      <Box
        m={["30px", "auto"]}
        padding={"30px"}
        textColor={"black"}
        w={'50%'}
      > 
        <Header title="TODO LIST✔️" />
        <AddTask onAdd={addTask} />
        {tasks.length > 0 ? (
          <Tasks tasks={tasks} onDelete={deleteTask} />
        ) : (
          <Text color={"#4fb9fc"} fontWeight={'bolder'} fontSize={'larger'} mt={5}>
            Nothing to do ☕
          </Text>
        )}
      </Box>
    </Box>
  );
}

export default App;
