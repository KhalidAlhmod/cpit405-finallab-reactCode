import React, { useState } from 'react';
import { updateBookmark } from '../services/api';

const BookmarkItem = ({ bookmark, onDelete, onUpdateComplete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedTitle, setUpdatedTitle] = useState(bookmark.title);
    const [updatedURL, setUpdatedURL] = useState(bookmark.URL);

    const handleUpdate = async () => {
        await updateBookmark(bookmark.id, { title: updatedTitle, URL: updatedURL });
        setIsEditing(false); // Exit editing mode
        onUpdateComplete(); // Refresh the list
    };

    return (
        <div className="bookmark-item">
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={updatedTitle}
                        onChange={(e) => setUpdatedTitle(e.target.value)}
                        placeholder="New Title"
                    />
                    <input
                        type="text"
                        value={updatedURL}
                        onChange={(e) => setUpdatedURL(e.target.value)}
                        placeholder="New URL"
                    />
                    <button onClick={handleUpdate}>Save</button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                </div>
            ) : (
                <div>
                    <h3>{bookmark.title}</h3>
                    <a href={bookmark.URL} target="_blank" rel="noopener noreferrer">
                        {bookmark.URL}
                    </a>
                    <div>
                        <button onClick={() => setIsEditing(true)}>Update</button>
                        <button onClick={() => onDelete(bookmark.id)}>Delete</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookmarkItem;
