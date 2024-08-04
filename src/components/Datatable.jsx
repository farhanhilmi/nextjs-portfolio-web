import React, { useState } from 'react';
import { useTable } from 'react-table';
import DetailProject from './DetailProject';

const DataTable = ({ columns, data, isDetailed = true }) => {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [dataObject, setDataObject] = useState([]);

    const detailHandler = () => {
        setIsModalOpen(!isModalOpen);
        console.log('detailHandler clicked', isModalOpen);
    };

    return (
        <div className="overflow-x-auto">
            <table
                {...getTableProps()}
                className="table-auto w-full min-w-max bg-white"
            >
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr
                            {...headerGroup.getHeaderGroupProps()}
                            className="border-b"
                        >
                            {headerGroup.headers.map((column) => (
                                <th
                                    key={column.id}
                                    {...column.getHeaderProps()}
                                    className="px-6 py-3 text-left text-sm text-gray-900 font-semibold uppercase tracking-wider"
                                >
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <>
                                <tr
                                    key={row.id}
                                    {...row.getRowProps()}
                                    className={`border-b ${
                                        isDetailed
                                            ? 'cursor-pointer hover:backdrop-brightness-95'
                                            : ''
                                    }`}
                                    onClick={detailHandler}
                                >
                                    {row.cells.map((cell) => {
                                        const { key, ...cellProps } =
                                            cell.getCellProps();
                                        return (
                                            <td
                                                key={key}
                                                {...cellProps}
                                                className="px-6 py-4 whitespace-nowrap text-gray-700 truncate-cell"
                                                onClick={() =>
                                                    setDataObject(row.original)
                                                }
                                            >
                                                {cell.render('Cell')}
                                            </td>
                                        );
                                    })}
                                </tr>
                                {console.log('dataObject', dataObject)}
                            </>
                        );
                    })}
                </tbody>
            </table>
            {isModalOpen && (
                <DetailProject
                    project={dataObject}
                    isOpen={isModalOpen}
                    onClose={detailHandler}
                    bgColor="bg-blue-ocean/75"
                    isEditable={true}
                />
            )}
        </div>
    );
};

export default DataTable;
