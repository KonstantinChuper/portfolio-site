export default function ContactCard({ icon, header, text, link }) {
  const content = link ? (
    <a
      href={link}
      className="text-lg text-colorTextSecondary pt-5 hover:text-colorPrimary transition-colors"
    >
      {text}
    </a>
  ) : (
    <p className="text-lg text-colorTextSecondary pt-5">{text}</p>
  )
  return (
    <div className="bg-colorMenu px-10 pt-16 pb-10 rounded-sm flex flex-col items-center">
      <div className="flex justify-center items-center text-colorPrimary">{icon}</div>
      <h2 className="text-2xl pt-4 leading-tight">{header}</h2>
      {content}
    </div>
  )
}
