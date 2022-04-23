import React from "react";
import {
  usePagination,
  useGlobalFilter,
  useTable,
  useSortBy,
} from "react-table/dist/react-table.development";
import GlobaleFilter from "./GlobaleFilter";

const Table = ({ columns, data }) => {
  const {
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  // Render the UI for your table
  return (
    <>
      <GlobaleFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={state.globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      <div className="table">
        <table {...getTableProps()} style={{ border: "solid 1px #000" }}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th className="column_title"
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    style={{
                      background: "rgba(255, 255, 255, 0.125)",
                      color: "#FFF",
                      fontWeight: "bold",
                      height:"40px",
                      cursor:"pointer"

                    }}
                  >
                    {column.render("Header")}
                    <span style={{
                      marginLeft:"0.5em"
                    }}>
                      {column.isSorted ? (column.isSortedDesc ? "▼" : "▲") : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        style={{
                          padding: "10px",
                          border: "solid 1px gray",
                          background: "#FFF",
                        }}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
        <span style={{color:"#FFF"}}>
          Page{" "}
          <strong>
            {state.pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <select
          value={state.pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[5, 10, 20].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Table;
