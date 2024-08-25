import React from 'react';

const ResponseDisplay = ({ data, selectedOptions }) => {
    const renderData = () => {
        let result = {};

        if (selectedOptions.includes('Alphabets')) {
            result = { ...result, Alphabets: data.alphabets };
        }

        if (selectedOptions.includes('Numbers')) {
            result = { ...result, Numbers: data.numbers };
        }

        if (selectedOptions.includes('Highest lowercase alphabet')) {
            result = { ...result, 'Highest lowercase alphabet': data.highest_lowercase_alphabet };
        }

        return Object.keys(result).map(key => (
            <div key={key}>
                <h2>{key}</h2>
                <pre>{JSON.stringify(result[key], null, 2)}</pre>
            </div>
        ));
    };

    return <div>{renderData()}</div>;
};

export default ResponseDisplay;
