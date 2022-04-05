import { Fragment, FunctionComponent, useRef, useState } from "react";
import "./ListCard.scss";

interface ListCardProps {}

const ListCard: FunctionComponent<ListCardProps> = () => {
  const [list, setList] = useState(["Hello World"]);
  const [input, setInput] = useState("");

  const handleKeyPress: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      setList([...list, input]);
      setInput("");
    }
    if (e.key === "ArrowUp") {
      const found = list.findIndex((string) => input === string);
      if (found === -1) {
        setInput(list[list.length - 1]);
      } else {
        setInput(list[found > 0 ? found - 1 : 0]);
      }
    }
    if (e.key === "ArrowDown") {
      const found = list.findIndex((string) => input === string);
      if (found === -1) {
        setInput(list[list.length - 1]);
      } else {
        setInput(list[found < list.length - 1 ? found + 1 : found]);
      }
    }
  };
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput(e.target.value);
  };

  return (
    <Fragment>
      <div className="list">
        {list.map((string, index) => (
          <div
            className="list__item"
            key={index}
            dangerouslySetInnerHTML={{ __html: string }}
          ></div>
        ))}
      </div>
      <div className="list__input">
        <input
          type="text"
          className="list__input__text"
          value={input}
          onKeyUp={handleKeyPress}
          onChange={onChange}
        />
      </div>
    </Fragment>
  );
};

export default ListCard;