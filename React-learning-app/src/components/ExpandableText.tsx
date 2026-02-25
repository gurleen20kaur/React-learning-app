import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}
const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  // const [summarize, setSummarize] = useState(false);
  const [isExpandable, setIsExpandable] = useState(false);
  const toggle = () => {
    setIsExpandable(!isExpandable);
  };
  if (children.length <= maxChars) return <p>{children}</p>;

  const text = isExpandable ? children : children.substring(0, maxChars);
  return (
    <>
      <p>
        {text}...
        <button onClick={toggle}>{isExpandable ? "Less" : "More"}</button>
      </p>
    </>
  );
};

export default ExpandableText;
