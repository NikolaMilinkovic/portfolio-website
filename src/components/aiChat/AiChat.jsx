/* eslint-disable max-len */
import React, {
  useState, useEffect, useRef, useCallback,
} from 'react';
import { Element } from 'react-scroll';
import './AiChat.scss';
import { getAboutInfo } from '../../util/getAiInfo';

function AiChat({ triggerFAQ }) {
  const textareaRef = useRef(null);
  const chatboxRef = useRef(null);
  const submitBtn = useRef(null);
  const [inputData, setInputData] = useState('');
  const [displayData, setDisplayData] = useState([
    {
      user: 'ai',
      text: 'Ask away!',
    },
  ]);

  useEffect(() => {
    if (triggerFAQ !== '') {
      setInputData(triggerFAQ);
      textareaRef.current.value = triggerFAQ;
    }
  }, [triggerFAQ]);

  useEffect(() => {
    if (inputData === triggerFAQ && inputData !== '') {
      submitBtn.current.click();
    }
  }, [inputData, triggerFAQ]);

  // ===============================[ Submit Method ]===============================
  const submit = useCallback(async (e) => {
    // API Call for AI response
    async function getResponse() {
      const formData = new FormData();
      formData.append('question', inputData);
      formData.append('aboutText', getAboutInfo());

      const loading = {
        user: 'ai',
        text: 'Thinking...',
      };

      setDisplayData((prev) => [...prev, loading]);
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
        setDisplayData((prev) => prev.slice(0, -1));
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
      setDisplayData((prev) => prev.slice(0, -1));
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
  const scrollToBottom = useCallback(() => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [displayData, scrollToBottom]);

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

  function focusInput() {
    textareaRef.current.focus();
  }

  return (
    <div className="ai-chat-wrapper">
      <div className="chatbox" ref={chatboxRef} onClick={() => focusInput()}>
        {displayData && displayData.map((message, index) => (
          message.user === 'ai' ? (
            <DisplayAi
              key={index}
              data={message.text}
              onComplete={scrollToBottom}
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
        <button type="submit" className="btn-submit" ref={submitBtn}>
          <img src="/icons/black/paper-plane-solid.svg" alt="send message" className="icon-send" />
        </button>
      </form>
    </div>
  );
}

function DisplayAi({ data, onComplete }) {
  const [text, setText] = useState('');
  const speed = 10;

  useEffect(() => {
    setText('');
    const tempTextArr = data.split('');
    const timeouts = [];

    tempTextArr.forEach((char, index) => {
      const timeout = setTimeout(() => {
        setText((prev) => {
          const newText = `${prev}${char}`;
          onComplete();
          return newText;
        });
      }, speed * index);
      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [data, speed, onComplete]);

  // Function to render text with bold sections and links
  const renderTextWithBoldAndLinks = (text) => {
    // Split by newlines and keep track of indexes for keys
    const lines = text.split('\n').map((line, lineIndex) => {
      // Handle bold text and links
      const parts = line.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);
      return parts.map((part, partIndex) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          // Bold text
          return (
            <strong key={`${lineIndex}-${partIndex}`}>
              {part.slice(2, -2)}
              {' '}
              {/* Remove the ** markers */}
              {' '}
            </strong>
          );
        }

        // Check if part is a link
        const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
        if (linkMatch) {
          const linkText = linkMatch[1];
          const linkUrl = linkMatch[2];
          return (
            <a className="ai-link" key={`${lineIndex}-${partIndex}`} href={linkUrl} target="_blank" rel="noopener noreferrer">
              {linkText}
            </a>
          );
        }

        // Regular text
        return <span key={`${lineIndex}-${partIndex}`}>{part}</span>;
      });
    });

    return <>{lines}</>;
  };

  // Split text into lines and render each line with bold formatting
  const textWithLineBreaks = text.split('\n').map((line, index) => (
    <p className="p-ai" key={index}>{renderTextWithBoldAndLinks(line)}</p>
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
