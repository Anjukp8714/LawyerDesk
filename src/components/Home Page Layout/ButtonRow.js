import React from 'react';
import './TopButtonSec.css'
function ButtonRow() {
  const buttons = [
    { id: 1, label: 'Button 1' },
    { id: 2, label: 'Button 2' },
    { id: 3, label: 'Button 3' },
    { id: 4, label: 'Button 4' },
    { id: 5, label: 'Button 5' },
    { id: 6, label: 'Button 6' },
  ];

  const rows = [];
  const buttonsPerRow = 3;

  for (let i = 0; i < buttons.length; i += buttonsPerRow) {
    const rowButtons = buttons.slice(i, i + buttonsPerRow);
    const row = (
      <div className="button-row" key={i}>
        {rowButtons.map((button) => (
          <button key={button.id}>{button.label}</button>
        ))}
      </div>
    );
    rows.push(row);
  }

  return <div>{rows}</div>;
}

export default ButtonRow;
