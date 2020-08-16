import React from 'react'
import ValueNode from "../ValueNode"
import '../styles.css';

export default function JsonTree({ data = {} }) {
    return (
        <ul className="json_tree">
            <ValueNode keyName="root" value={data} initialExpanded={true} />
        </ul>
    );
}