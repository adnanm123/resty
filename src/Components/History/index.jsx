import React from 'react';
import './History.scss';

function History({ items, onHistoryItemClick }) {
    return (
        <div className="history-container">
            <h3>History</h3>
            <ul>
                {items.map((item, index) => (
                    <li key={index} onClick={() => onHistoryItemClick(item)}>
                        <strong>{item.method}</strong>: {item.url}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default History;
