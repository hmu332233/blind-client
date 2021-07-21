import React, { useEffect, useState } from 'react';

type PostInputProps = {
  onSubmit: (value: string) => void;
};

function PostInput({ onSubmit }: PostInputProps) {
  const [isButtonShown, setIsButtonShown] = useState(false);
  const [text, setText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setText(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSubmit(text);
      setText('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(text);
    setText('');
  };

  useEffect(() => {
    setIsButtonShown(!!text);
  }, [text])

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center fixed bottom-0 left-0 w-full border-t-2 p-4 bg-white">
        <textarea
          rows={2}
          className="block w-full focus:border-none"
          placeholder="댓글을 적어주세요."
          value={text}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        {isButtonShown && (
          <button className="ml-2 flex-shrink-0 font-bold p-2">등록</button>
        )}
      </div>
    </form>
  );
}

PostInput.defaultProps = {
  onSubmit: () => {},
};

export default PostInput;