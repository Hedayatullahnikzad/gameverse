import type { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode;
}

const DefinitionItem = ({ term, children }: Props) => {
  return (
    <div>
      <h3 className="text-gray-400 text-sm font-semibold mb-1">{term}</h3>

      <div className="text-lg font-medium">{children}</div>
    </div>
  );
};

export default DefinitionItem;
