import React from 'react';
import { useAsyncDebounce } from 'react-table/dist/react-table.development';

const GlobaleFilter = ({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter}) => {
        const count = preGlobalFilteredRows.length;
        const [value, setValue] = React.useState(globalFilter);
        
        const onChange = useAsyncDebounce(value => {
          setGlobalFilter(value || undefined)
        }, 200)
      
        return (
          <span>
            Search:{' '}
            <input
              value={value || ""}
              onChange={e => {
                setValue(e.target.value);
                onChange(e.target.value);
              }}
              placeholder={`${count} records...`}
            />
          </span>
        )
      }

export default GlobaleFilter;