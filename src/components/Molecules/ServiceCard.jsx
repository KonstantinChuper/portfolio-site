export default function ServiceCard({ icon, header, text }) {
  return (
    <div className="bg-colorMenu px-10 pt-16 pb-10 rounded-sm mt-16 relative">
      <div className="h-[100px] w-[100px] bg-colorPrimary rounded-md flex items-center justify-center absolute left-9 -top-12">
        {icon}
      </div>
      <h2 className="text-2xl pt-4 leading-tight uppercase">{header}</h2>
      <p className="text-lg text-colorTextSecondary pt-5">{text}</p>
    </div>
  )
}
