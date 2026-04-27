interface DescriptionProps {
    content: string,
    style?: string
}

const Description = ({ content, style }: DescriptionProps) => {
  return (
    <p className={`text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-2 ${style}`}>
      {content}
    </p>
  );
};

export default Description;
