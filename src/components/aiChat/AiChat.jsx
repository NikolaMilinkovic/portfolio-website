/* eslint-disable max-len */
import React, {
  useState, useEffect, useRef, useCallback,
} from 'react';
import './AiChat.scss';

function AiChat() {
  const textareaRef = useRef(null);
  const chatboxRef = useRef(null);
  const [inputData, setInputData] = useState('');
  const [displayData, setDisplayData] = useState([
    {
      user: 'ai',
      text: 'Welcome to the AI chat section! Here you can ask anything you would like to know about me and the AI companion will try his best to give you a satisfactory answer!',
    },
    {
      user: 'ai',
      text: 'What would you like to know?',
    },
  ]);

  // SUBMIT METHOD
  const submit = useCallback((e) => {
    console.log('Submit called');
    e.preventDefault();
    if (inputData.trim() === '') return;
    const data = {
      user: 'user',
      text: inputData,
    };
    setDisplayData((prev) => [...prev, data]);
    setInputData('');
  }, [inputData]);

  // Scroll automatically for each new message
  useEffect(() => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, [displayData]);

  // TEXTAREA LISTENERS
  const keyPressEnter = useCallback((e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      submit(e);
    }
  }, [submit]);
  useEffect(() => {
    const textarea = textareaRef.current;
    textarea.addEventListener('keydown', keyPressEnter);
    return () => {
      textarea.removeEventListener('keydown', keyPressEnter);
    };
  }, [submit, keyPressEnter]);

  // ON CHANGE METHOD
  const handleChange = (e) => {
    setInputData(e.target.value);
  };

  return (
    <div className="ai-chat-wrapper">
      <div className="chatbox" ref={chatboxRef}>
        {displayData && displayData.map((message, index) => (
          message.user === 'ai' ? (
            <DisplayAi
              key={index}
              data={message.text}
            />
          ) : (
            <DisplayUser
              key={index}
              data={message.text}
            />
          )
        ))}
      </div>
      <form className="inputs" onSubmit={(e) => submit(e)}>
        <textarea
          placeholder="Message"
          ref={textareaRef}
          value={inputData}
          className="text-input"
          onChange={(e) => handleChange(e)}
        />
        <button type="submit" className="btn-submit">
          <img src="/icons/black/paper-plane-solid.svg" alt="send message" className="icon-send" />
        </button>
      </form>
    </div>
  );
}

function DisplayAi({ data, key }) {
  return (
    <p className="ai-text" key={key}>{data}</p>
  );
}
function DisplayUser({ data, key }) {
  return (
    <p className="user-text" key={key}>{data}</p>
  );
}

export default AiChat;
