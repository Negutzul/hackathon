import React from 'react';
import { useTable } from 'react-table';

// Coloanele tabelului
const columns = [
    {
        Header: 'City',
        accessor: 'city',
    },
    {
        Header: 'Average rent (€)',
        accessor: 'rent',
    },
    {
        Header: 'Crime rate (out of 5)',
        accessor: 'crimeRate',
    },
    {
        Header: 'Population density (on km2)',
        accessor: 'populationDensity',
    },
    {
        Header: 'Public transportation (out of 5)',
        accessor: 'transportAccessibility',
    },
    {
        Header: 'Pollution rate (out of 5)',
        accessor: 'pollutionRate',
    }
];

function CityInfoTable({ cityInfo }) {
    const data = React.useMemo(() => [cityInfo], [cityInfo]);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data });

    return (
        <table {...getTableProps()} style={{ borderCollapse: 'collapse', border: '1px solid blue' }}>
            <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th
                            {...column.getHeaderProps()}
                            style={{
                                border: '1px solid blue',
                                padding: '8px',
                                background: '#f2f2f2', // Adăugăm un fundal gri pentru capul de tabel
                            }}
                        >
                            {column.render('Header')}
                        </th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map(row => {
                prepareRow(row);
                return (
                    <tr {...row.getRowProps()} style={{ border: '1px solid blue' }}>
                        {row.cells.map(cell => (
                            <td {...cell.getCellProps()} style={{ border: '1px solid blue', padding: '8px' }}>
                                {cell.render('Cell')}
                            </td>
                        ))}
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}

export default CityInfoTable;
