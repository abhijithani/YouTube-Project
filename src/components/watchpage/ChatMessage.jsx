import React from 'react'

const ChatMessage = ({name, message}) => {
    return (
        <div className='flex items-center'>
            <img alt='user'
                className='w-10 h-10'
                src='https://png.pngtree.com/png-clipart/20240722/original/pngtree-user-profile-icon-image-vector-png-image_15611025.png' />
                <span className='text-gray-500 p-1'>{name}</span>
                <span>{message}</span>
        </div>
    )
}

export default ChatMessage
