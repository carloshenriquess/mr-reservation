import React from 'react';
import './styles.scss';

import Table from './Table';
import { tables } from '../../api.json';

export default function Tables() {
  return (
    <div className="l-tables">
      {tables.map((table, index) =>
        <div className="l-tables__table">
          <Table
            id={table.id}
            capacity={table.capacity}
            key={index}
          />
        </div>
      )}
    </div>
  )
}