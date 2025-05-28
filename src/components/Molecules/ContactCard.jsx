export default function ContactCard({ icon, header, text }) {
    return (
      <div className="bg-colorMenu px-10 pt-16 pb-10 rounded-sm flex flex-col items-center">
        <div className="flex justify-center items-center text-colorPrimary">
          {icon}
        </div>
        <h2 className="text-2xl pt-4 leading-tight">{header}</h2>
        <p className="text-lg text-colorTextSecondary pt-5">{text}</p>
      </div>
    )
}
