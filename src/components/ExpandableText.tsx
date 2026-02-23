import { useState } from "react";

interface Props {
  text: string;
  maxChars?: number;
}

const ExpandableText = ({ text, maxChars = 300 }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (text.length <= maxChars) {
    return <p className="text-lg leading-relaxed">{text}</p>;
  }

  const truncatedText = text.substring(0, maxChars) + "...";

  return (
    <p className="text-lg leading-relaxed">
      {isExpanded ? text : truncatedText}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="ml-2 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
      >
        {isExpanded ? "Show less" : "Show more"}
      </button>
    </p>
  );
};

export default ExpandableText;
