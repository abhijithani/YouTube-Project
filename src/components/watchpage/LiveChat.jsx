import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessages } from '../utilis/chatSlice';
import { generatComments, generateNames } from '../utilis/helper';

const LiveChat = () => {

    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages)

    const [LiveMessage, setLiveMessage] = useState("");

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("api calling");

            dispatch(addMessages({
                name: generateNames(),
                message: generatComments(20),
            })
            )
        }, 2000);

        return () => clearInterval(timer)
    }, [])
    
    return (
        <div>
            <div className='mt-3   w-[80%] h-10 border border-gray-300 rounded-t-xl '>
                <h1 className='p-1'>TopChat</h1>
            </div>
            <div className=' p-3  w-[80%] h-[668px] border border-gray-300  overflow-y-scroll flex flex-col-reverse'>
                {chatMessages.map((c, index) => <ChatMessage key={index} name={c.name} message={c.message} />)}
            </div>
            <div className='   w-[80%] h-14 border border-gray-300 rounded-b-xl'>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(addMessages({
                        name: 'abhijith m s',
                        message: LiveMessage
                    })
                    );
                    setLiveMessage("");
                }}>
                    <input
                        className='w-[60%] p-2 my-1 ml-12 rounded-2xl bg-gray-200'
                        type="text"
                        value={LiveMessage}
                        onChange={(e) => setLiveMessage(e.target.value)}
                    />
                    <button className='rounded-xl p-2 mx-2 bg-gray-200'>send</button>
                </form>
            </div>
        </div>
    )
}

export default LiveChat
