import { useState } from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import { OutlinedInput } from "@material-ui/core";

const MultiSelect = ({ items = {}, displayValue, label }) => {
  const [checked, setChecked] = useState([]);
  const [renderValues, setRenderValues] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;

    setChecked(value);
    setRenderValues(
      value.map((x) => items.find((y) => y._id === x)[displayValue])
    );
  };

  return (
    <FormControl variant="outlined">
      <Select
        labelId="demo-mutiple-checkbox-label"
        id="demo-mutiple-checkbox"
        multiple
        value={checked}
        onChange={handleChange}
        input={<OutlinedInput />}
        renderValue={(_) => renderValues.join(", ")}
      >
        {items.map((x) => (
          <MenuItem key={x._id} value={x._id}>
            <Checkbox checked={checked.indexOf(x._id) > -1} />
            <ListItemText primary={x[displayValue]} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MultiSelect;
