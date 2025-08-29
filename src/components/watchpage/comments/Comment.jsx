import React, { useState } from 'react'

const Comment = ({ data, onReply }) => {

  const { name, text, replies } = data;
  console.log(replies);

  const[showReplyBox, setShowReplyBox] = useState(false);
  const [replyText, setReplyText] = useState("");

  const handleReply = () => {
    if(replyText.trim() === "") return;
    onReply(replyText);
    setReplyText("");
    setShowReplyBox(false);
  }

  return (
    <div className='my-2 w-full'>
      <div className='flex w-full'>
        <img src="https://png.pngtree.com/png-clipart/20240722/original/pngtree-user-profile-icon-image-vector-png-image_15611025.png" alt="profile icon"
          className=' h-12 rounded-full'
        />
        <div className='w-full'>
          <p className='px-1'>{name}</p>
          <p className='px-1'>{text}</p>

          <button
          className='ml-3'
            onClick={() => setShowReplyBox(!showReplyBox)}
          >
            reply
          </button>

          {showReplyBox && (
            <div className='mt-2 ml-3'>
              <input type="text" 
                className='w-full pl-2  border border-black'
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
              />

              <div className='flex justify-end'>
              <button
                onClick={handleReply}
                className='bg-gray-100 rounded-lg px-2 py-1 m-2'
              >
                Reply
              </button>
                </div>
            </div>
          )}

        </div>
      </div>
      
      <div className='pl-5 border-l ml-2'>
        {replies?.map((reply,i) =>(
          <Comment
            key={i}
            data={reply}
            onReply={(text) => {
              const newReply ={
                name:"you",
                text,
                replies:[],
              };
              reply.replies.push(newReply);
            }}
          />
        ))}

      </div>


    </div>
  )
}

export default Comment
