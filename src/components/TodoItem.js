import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";
import {
  completeTodo,
  removeTodo,
  updateTodo,
  setRefresh,
} from "../redux/reducer";
import { useDispatch, useSelector } from "react-redux";

const TodoItem = ({ item, index }) => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [edit, setEdit] = useState(false);

  const inputRef = useRef(true);

  const complete = () => {
    dispatch(completeTodo(index));
    dispatch(setRefresh(true));
  };

  const remove = (id) => {
    dispatch(removeTodo(id));
    // console.log(item.id);
    // console.log(e);
    dispatch(setRefresh(true));
    console.log(todos);
  };

  const update = (e) => {
    if (e.key === "Enter") {
      dispatch(updateTodo({ value: edit, id: index }));
      dispatch(setRefresh(true));
      inputRef.current.disabled = true;
    }
  };

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  return (
    <motion.li
      initial={{ x: "150vw", transition: { type: "spring", duration: 2 } }}
      animate={{ x: 0, transition: { type: "spring", duration: 2 } }}
      whileHover={{
        scale: 0.9,
        transition: { type: "spring", duration: 0.1 },
      }}
      exit={{
        x: "-60vw",
        scale: [1, 0],
        transition: { duration: 0.5 },
        backgroundColor: "rgba(255,0,0,1)",
      }}
      key={item.id}
      className="card"
    >
      <textarea
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onChange={(e) => setEdit(e.target.value)}
        onKeyPress={update}
      />
      <div className="btns">
        <motion.button
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => changeFocus()}
        >
          {" "}
          <AiFillEdit />{" "}
        </motion.button>
        {item.completed === false && (
          <motion.button
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.9 }}
            style={{ color: "green" }}
            onClick={complete}
          >
            <IoCheckmarkDoneSharp />
          </motion.button>
        )}
        <motion.button
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.9 }}
          style={{ color: "red" }}
          onClick={() => remove(index)}
        >
          {" "}
          <IoClose />
        </motion.button>{" "}
      </div>
      {item.completed && <span className="completed">done</span>}
    </motion.li>
  );
};

export default TodoItem;
