import React, { useState, useEffect } from 'react';
import "../styles.css";
import { getType, isExpandableType, TYPES } from "../../utils"

export default function ValueNode({ keyName, value, initialExpanded = false }) {
    const [node, setNode] = useState({
        valueType: getType(value),
        expanded: initialExpanded,
        expandable: isExpandableType(value)
    });

    const handleClick = (e) => {
        e.stopPropagation();
        if(node.expandable) {
            setNode({ ...node, expanded: !node.expanded});
        }
    }

    const getExpandableTypeString = (childrenLn) => {
        const m = {};
        m[TYPES.OBJECT] = '{'+childrenLn+'}';
        m[TYPES.ARRAY] = '['+childrenLn+']';

        return m[getType(value)] || '';
    }

    const getChildren = () => {
        const val = value;
        console.log(val);
        console.log(getType(val));

        if(isExpandableType(val)) {
            return Object.keys(val).map((k) => {
                console.log(k, val[k])
                return <ValueNode keyName={k} value={val[k]} />
            });
        }
        return [];
    }

    const getFormattedValue = () => {
        const val = value;
        const m = {};
        m[TYPES.BOOLEAN] = val ? 'true' : 'false';
        m[TYPES.NULL] = 'null';

        return m[getType(val)] || val;
    }

    const getContent = () => {
        const content = [];
        const children = getChildren();

        content.push(<span className="keyName">{keyName}</span>);
        if(node.expandable) {
            content.push(<span className="desc">{getExpandableTypeString(children.length)}</span>);
            content.push(<ul>{children}</ul>);
        }
        else {
            content.push(<span className="value">{getFormattedValue()}</span>);
        }
        return content;
    }

    return (
        <li className={`${node.expandable ? node.expanded ? 'expandable expanded' : 'expandable' : ''} ${getType(value).toLowerCase()}`} onClick={handleClick}>
            {getContent()}
        </li>
    )
}