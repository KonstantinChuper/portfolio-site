export default function ServiceCard({ icon, header, text }) {
  return (
    <div className="bg-colorMenu px-10 pt-16 pb-10 rounded-sm sm:mt-16 mt-8 relative">
      <div className="h-[100px] w-[100px] bg-colorPrimary rounded-md flex items-center justify-center absolute left-9 -top-12">
        {icon}
      </div>
      <h2 className="sm:text-2xl text-lg pt-4 leading-tight uppercase">{header}</h2>
      <p className="sm:text-lg text-colorTextSecondary pt-5">{text}</p>
    </div>
  )
}
