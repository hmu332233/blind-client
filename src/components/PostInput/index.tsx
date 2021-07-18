import React, { useEffect, useState } from 'react';

type PostInputProps = {
  onChange: (value: string) => void;
  author: string,
};

function PostInput({ onChange, author }: PostInputProps) {
  const [isButtonShown, setIsButtonShown] = useState(false);
  const [text, setText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setText(e.target.value);
  };

  useEffect(() => {
    setIsButtonShown(!!text);
  }, [text])

  return (
    <form>
      <div className="flex items-center fixed bottom-0 left-0 w-full border-t-2 p-4 bg-white">
        <textarea
          rows={2}
          className="block w-full focus:border-none"
          placeholder="댓글을 적어주세요."
          defaultValue={''}
          onChange={handleChange}
        />
        {isButtonShown && (
          <button className="ml-2 flex-shrink-0 font-bold p-2">등록</button>
        )}
      </div>
    </form>
  );
}

PostInput.defaultProps = {
  onChange: () => { },
  author: '',
};

export default PostInput;