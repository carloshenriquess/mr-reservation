import React, { FC } from 'react';
import './styles.scss';

interface TableProps {
  id: number;
  capacity: number;
}

const Table: FC<TableProps> = (props) => {
  return (
    <div className="c-table">
      <div className="c-table__id">{props.id}</div>
      <div className="c-table__capacity">Capacidade: {props.capacity}</div>
    </div>
  )
}

export default Table;