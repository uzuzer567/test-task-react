import React from 'react';

export const getHighlightedText = (text: string, searchText: string) => {
    if (!searchText) {
        return text;
    }

    const regex = new RegExp(`(${searchText})`, 'gi');
    const textParts = text.split(regex);

    return textParts.map((textPart, index) =>
        regex.test(textPart) ? (
            <span key={index} style={{backgroundColor: 'rgb(236, 249, 87)'}}>{textPart}</span>
        ) : textPart,
    );
};
