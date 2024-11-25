import React, { useState } from 'react'
import axios from 'axios';

const AddCommentForm = ({ articleName, setArticleInfo }) => {
  const [username, setUsername] = useState('');
  const [commentText, setCommentText] = useState('');

  const addComments = async () => {
    const result = await axios.post(
      `/api/articles/${articleName}/add-comments`,
      { username, text: commentText }
    );
    await setArticleInfo(result.data[0]);
    setUsername('');
    setCommentText('');
  }

  return (
    <form className='shadow rounded px-8 pt-6 pb-8 mb-4'>
      <h3 className="text-xl font-bold mb-4 text-gray-900">
        Add a comment
      </h3>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Name:
      </label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Comment:
      </label>
      <textarea
        cols="50"
        rows="4"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
      />
      <button
        onClick={() => addComments()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Add Comment
      </button>
    </form>
  )
}

export default AddCommentForm