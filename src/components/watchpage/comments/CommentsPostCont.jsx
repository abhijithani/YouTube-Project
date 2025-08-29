import React, { useState } from 'react'
import Comment from './Comment';

const CommentsPostCont = () => {
    const [comments, setComments] = useState([
        {
            name: "ashwin",
            text: "Is this built fully in React",
            replies: [],
        },
        {
            name: "Rahul",
            text: "Wow, the UI looks just like YouTube",
            replies: [],
        },
    ]);

    const addComments = (text) => {
        setComments([
            ...comments,
            {
                name: "you",
                text,
                replies: [],
            }
        ])
    }

    const [newComment, setNewComment] = useState("");
    console.log(comments);
    
    return (
        <div className='ml-4 p-1 '>
            <h1 className=' p-2 font-bold text-2xl'>Comments</h1>

            <div>
                <input
                    type='text'
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className='border m-2 p-2 w-full '
                />

                <div className='flex justify-end'>
                    <button
                        onClick={() => {
                            setNewComment("")
                        }}
                        className='bg-gray-100 rounded-lg p-2 m-1 '
                    >
                        cancel
                    </button>
                    <button
                        onClick={() => {
                            if (newComment.trim() !== "") {
                                addComments(newComment);
                                setNewComment("")
                            }
                        }}
                        className='bg-gray-100 rounded-lg p-2 m-1 '
                    >
                        comment
                    </button>
                </div>
                        
                {/* {comment list} */}
                {comments.reverse().map((comment,i) =>(
                    <Comment
                    key={i}
                    data={comment}
                    onReply={(text) =>{
                        const updated = [...comments];
                        updated[i].replies.push({
                            name: "you",
                            text,
                            replies:[],
                        });
                        setComments(updated);
                        }}
                    />
                ))}

            </div>

        </div>
    )
}

export default CommentsPostCont
