interface HeadingProps {
    title: string,
    style?: string
}

const Heading = ({ title, style }: HeadingProps) => {
  return (
    <h2 className={`text-md font-semibold text-gray-900 dark:text-white mb-4 ${style}`}>{title}</h2>
  )
}

export default Heading