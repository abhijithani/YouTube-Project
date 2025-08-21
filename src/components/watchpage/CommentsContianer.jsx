import React from 'react'

const commentsData = [
  {
    name: "Abhijithms",
    text: "Amazing video, great effort",
    replies: [{
      name: "Abhijithms",
      text: "Amazing video, great effort",
      replies: [{
      name: "Abhijithms",
      text: "Amazing video, great effort",
      replies: [{
      name: "Abhijithms",
      text: "Amazing video, great effort",
      replies: [],
    },],
    },],
    }, 
    ,],
  },
  {
    name: "Abhijithms",
    text: "Amazing video, great effort",
    replies: [{
      name: "Abhijithms",
      text: "Amazing video, great effort",
      replies: [],
    }, {
      name: "Abhijithms",
      text: "Amazing video, great effort",
      replies: [],
    },],
  },
  {
    name: "Abhijithms",
    text: "Amazing video, great effort",
    replies: [],
  },
  {
    name: "Abhijithms",
    text: "Amazing video, great effort",
    replies: [],
  },
  {
    name: "Abhijithms",
    text: "Amazing video, great effort",
    replies: [],
  },

]

const Comment = ({ data }) => {

  const { name, text, replies } = data;
  return (
    <div className='flex bg-gray-100 my-2'>
      <img alt='user'
        className='w-12 h-12'
        src='https://png.pngtree.com/png-clipart/20240722/original/pngtree-user-profile-icon-image-vector-png-image_15611025.png' />

      <div className='px-3'>
        <p className='font-bold'>{name}</p>
        <p>{text}</p>
      </div>

    </div>
  )
}

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className='pl-5 border  border-l-black ml-3'>
        <CommentsList comments={comment.replies}/>
      </div>
    </div>

  ))

}

const CommentsContianer = () => {
  return (
    <div className='m-5 p-2 w-[1200px]'>
      <h1 className='text-2xl font-bold'>comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  )
}

export default CommentsContianer
