const deleteObject = (object, value, setValue) => {
  let updated = value.filter((obj) => {
    return obj.id !== object.id;
  });
  setValue(updated);
};

const updateObject = (object, value, setValue) => {
  let updated = value.map((obj) => {
    if (obj.id === object.id) {
      obj = { ...object };
    }
    return obj;
  });
  setValue(updated);
};

const moveUp = (object, value, setValue) => {
  const index = value.findIndex((element) => element.id === object.id);

  let temp = [...value];
  temp = [...temp.slice(undefined, index), ...temp.slice(index + 1, undefined)];
  temp.splice(index - 1, 0, object);
  setValue(temp);
};

const moveDown = (object, value, setValue) => {
  const index = value.findIndex((element) => element.id === object.id);

  let temp = [...value];
  temp = [...temp.slice(undefined, index), ...temp.slice(index + 1, undefined)];
  temp.splice(index + 1, 0, object);
  setValue(temp);
};

export { deleteObject, updateObject, moveUp, moveDown };
