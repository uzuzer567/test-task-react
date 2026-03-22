import React from 'react';

export const getHighlightedText = (
    value: string,
    searchText: string,
    minGrade?: number,
    maxGrade?: number,
) => {
    if (!searchText && minGrade == undefined && maxGrade == undefined) {
        return value;
    }

    let style = {};
    if (minGrade != undefined && maxGrade != undefined) {
        if (+value === maxGrade) {
            style = {color: '#52c41a', fontWeight: 600};
        } else if (+value === minGrade) {
            style = {color: '#ff4d4f', fontWeight: 600};
        }
    }

    if (searchText) {
        const regex = new RegExp(`(${searchText})`, 'gi');
        const textParts = value.split(regex);
        return textParts.map((textPart, index) => (
            <span
                key={index}
                style={regex.test(textPart) ? {...style, backgroundColor: 'rgb(236, 249, 87)'} : style}
            >
                {textPart}
            </span>
        ));
    }

    return <span style={style}>{value}</span>;
};
