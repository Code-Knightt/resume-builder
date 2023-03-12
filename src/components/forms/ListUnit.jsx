import React, { useState, useEffect } from "react";
import SimpleInput from "../inputs/SimpleInput";
import { motion } from "framer-motion";

function ListUnit({
  fields,
  isFirst,
  isLast,
  details,
  onDelete,
  updateFields,
  moveUp,
  moveDown,
}) {
  const [value, setValue] = useState(details);

  useEffect(() => {
    updateFields(value);
  }, [value]);

  return (
    <motion.form
      className="mb-14"
      onSubmit={(e) => e.preventDefault()}
      initial={{ opacity: 0, y: "-10%" }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
      exit={{
        opacity: 0,
        y: "-10%",
        transition: { duration: 0.3, delay: 0.3 },
      }}
    >
      {fields.map((field, index) => {
        return (
          <SimpleInput
            key={index}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            onValueChange={setValue}
            value={value}
          />
        );
      })}
      <motion.button
        type="button"
        className="text-sm text-red-500"
        onClick={(e) => {
          e.preventDefault();
          onDelete(value);
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.3, delay: 0.3 } }}
      >
        Delete
      </motion.button>
      {!isFirst && (
        <motion.button
          type="button"
          className="text-sm text-emerald-700 dark:text-sky-500 ml-3"
          onClick={() => {
            moveUp(value);
          }}
          initial={{ opacity: 0, x: "-10%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          Move Up
        </motion.button>
      )}
      {!isLast && (
        <motion.button
          type="button"
          className="text-sm text-teal-500 dark:text-sky-300 ml-3"
          onClick={() => {
            moveDown(value);
          }}
          initial={{ opacity: 0, x: "-10%" }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.3, delay: 0.3 },
          }}
        >
          Move Down
        </motion.button>
      )}
    </motion.form>
  );
}

export default ListUnit;
