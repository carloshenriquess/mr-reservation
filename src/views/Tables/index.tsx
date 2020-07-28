import React from 'react';
import './styles.scss';

import TableCard from './TableCard';
import { tables } from '../../api.json';
import { Table } from '../../models/table';

const click = (table: Table) => {
  console.log('Click:', table)
};

const Tables = () => {
  return (
    <div className="l-tables">
      {
        tables
          .sort((a, b) => a.capacity - b.capacity)
          .map((table, index) => (
            <div className="l-tables__table" key={index}>
              <TableCard
                table={table}
                click={click}
              />
            </div>
          ))
      }
    </div>
  )
}

export default Tables;