import React, { useEffect, useState } from 'react';
import { getAllBookmarks, deleteBookmark } from '../services/api';
import BookmarkItem from './BookmarkItem';

const BookmarkList = () => {
    const [bookmarks, setBookmarks] = useState([]);

    useEffect(() => {
        loadBookmarks();
    }, []);

    const loadBookmarks = async () => {
        const data = await getAllBookmarks();
        setBookmarks(data);
    };

    const handleDelete = async (id) => {
        await deleteBookmark(id);
        loadBookmarks();
    };

    return (
        <div className="bookmark-list">
            {bookmarks.length > 0 ? (
                bookmarks.map((bookmark) => (
                    <BookmarkItem
                        key={bookmark.id}
                        bookmark={bookmark}
                        onDelete={handleDelete}
                        onUpdateComplete={loadBookmarks} // Refresh the list after update
                    />
                ))
            ) : (
                <p className="no-bookmarks">No bookmarks found</p>
            )}
        </div>
    );
};

export default BookmarkList;
