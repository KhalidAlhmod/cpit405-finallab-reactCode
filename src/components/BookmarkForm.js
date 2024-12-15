import React, { useState } from 'react';
import { createBookmark } from '../services/api';

const BookmarkForm = ({ onBookmarkAdded }) => {
    const [url, setUrl] = useState('');
    const [title, setTitle] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (url && title) {
            await createBookmark({ URL: url, title });
            setUrl('');
            setTitle('');
            onBookmarkAdded();
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Bookmark URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Bookmark Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <button type="submit">Add Bookmark</button>
        </form>
    );
};

export default BookmarkForm;
