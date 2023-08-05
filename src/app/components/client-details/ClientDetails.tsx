interface ClientDetailsProps {
  title?: string;
  content?: any;
  focusContent?: string;
}

export const ClientDetails = ({ title, content, focusContent }: ClientDetailsProps) => {
  return (
    <>
      <main className="text-gray-500">
        <p className="">{title} <span className="text-red-700">{focusContent}</span></p>
        <p className="font-bold">{content}</p>
      </main>
    </>
  );
};
