import React, { useState } from 'react';
import BookmarkForm from './components/BookmarkForm';
import BookmarkList from './components/BookmarkList';

const App = () => {
    const [refresh, setRefresh] = useState(false); // Used to trigger refresh in child components

    const handleRefresh = () => {
        setRefresh(!refresh); // Toggle refresh state to trigger reloading of data
    };

    return (
        <div className="App">
            <h1>Bookmark Manager</h1>
            <BookmarkForm onBookmarkAdded={handleRefresh} />
            <BookmarkList refresh={refresh} />
        </div>
    );
};

export default App;
