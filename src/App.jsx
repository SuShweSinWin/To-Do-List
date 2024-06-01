import { Box, Text } from "@chakra-ui/react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState( [
      {
          id: 1,
          task: "To be productive",
      },
      {
          id: 2,
          task: "To watch movie",
      },
      {
          id: 3,
          task: "To read",
      }, 
      {
          id: 4,
          task: "To meditate",
      }
  ])

  const addTask = (task) => {
    console.log(task);
    const id = Math.floor(Math.random() * 100) +1

    const newTask = { id, ...task }
    setTasks([...task, newTask])
    console.log(newTask);
  }

  const deleteTask = (id) => {
    console.log('delete', id);
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <Box
      w="100%"
      p={4}
      // color="white"
      
    >
      <Box
        maxW={"500px"}
        m={["30px", "auto"]}
        overflow={"auto"}
        minH={"300px"}
        border={"1px solid steelblue"}
        padding={"30px"}
        borderRadius={"5px"}
        textColor={"black"}
        bg="#ececec"
      >
        <Header title="My To-Do-List" />
        <AddTask onAdd={addTask} />
        { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : <Text color={'#142d4c;'} fontWeight={'bold'}> Add some Task for Today</Text> }
      </Box>
    </Box>
  );
}

export default App;
