export const TYPES = {
    "OBJECT": 'Object',
    "ARRAY": 'Array',
    "STRING": 'String',
    "BOOLEAN": 'Boolean',
    "NULL": 'Null'
}

export const getType = (obj) => {
    return Object.prototype.toString.call(obj).slice(8, -1);
}

export const isExpandableType = (obj) => {
    return getType(obj) == TYPES.OBJECT || getType(obj) == TYPES.ARRAY;
}

