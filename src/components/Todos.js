import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, setRefresh } from "../redux/reducer";
import { GoPlus } from "react-icons/go";
import { motion } from "framer-motion";

const Todos = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const submit = (e) => {
    e.preventDefault();
    dispatch(addTodo(value));
    setValue("");
    dispatch(setRefresh(true));
  };

  return (
    <div className="addTodos">
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        value={value}
      />

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="add-btn"
        onClick={submit}
      >
        <GoPlus />
      </motion.button>
      <br />
    </div>
  );
};
//we can use connect method to connect this component with redux store
export default Todos;
