import React, { FC } from 'react';
import './styles.scss';
import { Table } from '../../../models/table';

interface TableProps {
  table: Table;
  click: (table: Table) => void;
}

const TableCard: FC<TableProps> = (props) => {
  return (
    <div className="c-table" onClick={() => props.click(props.table)}>
      <div className="c-table__title">TABLE {props.table.id}</div>
      <div className="c-table__party-size-title">
        party size:&nbsp;
        <span className="c-table__party-size">({props.table.capacity})</span>
      </div>
    </div>
  )
}

export default TableCard;