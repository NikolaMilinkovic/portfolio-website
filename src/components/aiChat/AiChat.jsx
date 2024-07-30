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
      text: 'What would you like to know?',
    },
  ]);

  function getAboutInfo() {
    const now = new Date();
    const currentDate = now.toDateString();

    const aboutMeText = `name: Nikola Milinkovic, Web Developer, date of birth: 27.04.1997, current date for calculating age is ${currentDate}, lives in Belgrade the capitol city of Serbia.`;

    return aboutMeText;
  }

  // ===============================[ Submit Method ]===============================
  const submit = useCallback(async (e) => {
    // API Call for AI response
    async function getResponse() {
      const formData = new FormData();
      formData.append('question', inputData);
      formData.append('aboutText', getAboutInfo());
      // http://localhost:3000/

      const response = await fetch(`${import.meta.env.VITE_DOMAIN}put-about-question`, {
        method: 'PUT',
        body: formData,
      });

      if (response.status !== 200) {
        const data = await response.json();
        const newData = {
          user: 'ai',
          text: data.message,
        };
        setDisplayData((prev) => [...prev, newData]);
        return;
      }
      //

      // Parsirani podaci
      const data = await response.json();
      const newData = {
        user: 'ai',
        text: data.response,
      };
      setDisplayData((prev) => [...prev, newData]);
    }

    e.preventDefault();
    if (inputData.trim() === '') return;
    const data = {
      user: 'user',
      text: inputData,
    };
    setDisplayData((prev) => [...prev, data]);
    setInputData('');
    getResponse();
  }, [inputData]);
    // ===============================[ \Submit Method ]===============================

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

function DisplayAi({ data }) {
  const [text, setText] = useState('');
  const speed = 12;

  useEffect(() => {
    setText(''); // Reset text when new data comes in
    const tempText = data.split('');
    const timeouts = [];

    tempText.forEach((char, index) => {
      const timeout = setTimeout(() => {
        setText((prev) => `${prev}${char}`);
      }, speed * index);
      timeouts.push(timeout);
    });

    // Cleanup function to clear timeouts
    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [data, speed]); // Add speed as a dependency if it can change

  const textWithLineBreaks = text.split('\n').map((line, index) => (
    <p key={index}>{line}</p>
  ));

  return (
    <div className="ai-text">{textWithLineBreaks}</div>
  );
}
function DisplayUser({ data, key }) {
  return (
    <p className="user-text" key={key}>{data}</p>
  );
}

export default AiChat;
