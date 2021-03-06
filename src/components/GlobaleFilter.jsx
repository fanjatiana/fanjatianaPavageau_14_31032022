import React from "react";
import { useAsyncDebounce } from "react-table/dist/react-table.development";

// table search bar
const GlobaleFilter = ({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) => {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);

  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <div className="search_bar">
      <span style={{ color: "#FFF" }}>
        <label htmlFor="search">Search: </label>
        <input
          id="search"
          value={value || ""}
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          placeholder={`${count} records...`}
        />
      </span>
    </div>
  );
};

export default GlobaleFilter;
