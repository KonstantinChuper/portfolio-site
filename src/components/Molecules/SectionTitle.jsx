export default function SectionTitle({ section, title, divClassname }) {
  return (
    <div className={divClassname}>
      <p className="uppercase text-2xl text-colorPrimary">{section}</p>
      <h2 className="text-5xl pt-4 font-semibold max-w-4xl leading-tight text-white">{title}</h2>
    </div>
  )
}
