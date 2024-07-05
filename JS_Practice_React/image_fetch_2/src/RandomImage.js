// src/RandomDogImage.js
import React, { useState } from 'react';

const RandomImage = () => {
    const [imageUrl, setImageUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchRandomDogImage = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await fetch('https://dog.ceo/api/breeds/image/random');
            const data = await response.json();
            setImageUrl(data.message);
        } catch (error) {
            setError('Failed to fetch image');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
        <button onClick={fetchRandomDogImage}>Get Random Dog Image</button>
        <div>
            <h1>Random Dog Image</h1>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {imageUrl && <img src={imageUrl} alt="Random Dog" style={{ maxWidth: '400px', height: 'auto' }} />}
        </div>
        </>
            
    );
};

export default RandomImage;
