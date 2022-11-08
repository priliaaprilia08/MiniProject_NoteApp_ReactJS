import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, setRefresh } from "../redux/reducer";
import {
  completeTodo,
  removeTodo,
  updateTodo,
} from "../redux/reducer";
import TodoItem from "./TodoItem";
import { AnimatePresence, motion } from "framer-motion";

const DisplayTodos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const refresh = useSelector((state) => state.refresh);

  const [sort, setSort] = useState("active");

  useEffect(() => {
    dispatch(setRefresh(false));
    dispatch(fetchTodos());
    console.log(refresh);
  }, [refresh]);

  return (
    <div className="displaytodos">
      <div className="buttons">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("active")}
        >
          Active
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("completed")}
        >
          Completed
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("all")}
        >
          All
        </motion.button>
      </div>
      <ul>
        <AnimatePresence>
          {todos.length > 0 && sort === "active"
            ? todos.map((item, index) => {
                return (
                  item.completed === false && (
                    <TodoItem
                      key={item.id}
                      item={item}
                      removeTodo={removeTodo}
                      updateTodo={updateTodo}
                      index={index}
                      completeTodo={completeTodo}
                    />
                  )
                );
              })
            : null}
          {/* for completed items */}
          {todos.length > 0 && sort === "completed"
            ? todos.map((item, index) => {
                return (
                  item.completed === true && (
                    <TodoItem
                      key={item.id}
                      item={item}
                      removeTodo={removeTodo}
                      updateTodo={updateTodo}
                      index={index}
                      completeTodo={completeTodo}
                    />
                  )
                );
              })
            : null}
          {/* for all items */}
          {todos.length > 0 && sort === "all"
            ? todos.map((item, index) => {
                return (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                    index={index}
                    completeTodo={completeTodo}
                  />
                );
              })
            : null}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default DisplayTodos;
