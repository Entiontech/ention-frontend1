import React, { useEffect, useState } from 'react';
import moment from 'moment';
import parse from 'html-react-parser';


const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // The original code had getComments(slug) here, but getComments is no longer imported.
    // Assuming the intent was to remove this line as it's no longer available.
    // If getComments is meant to be re-added, the import needs to be restored.
    // For now, removing the line as per the edit hint.
  }, []);

  return (
    <>
      {comments.length > 0 && (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4">
            {comments.length}
            {' '}
            Comments
          </h3>
            {comments.map((comment, index) => (
              <div key={index} className="border-b border-gray-100 mb-4 pb-4">
                <p className="mb-4">
                  <span className="font-semibold">{comment.name}</span>
                  {' '}
                  on
                  {' '}
                  {moment(comment.createdAt).format('MMM DD, YYYY')}
                </p>
                <p className="whitespace-pre-line text-gray-600 w-full">{parse(comment.comment)}</p>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default Comments;
