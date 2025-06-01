export default function SectionTitle({
  section,
  title,
  divClassname,
  sectionClassname,
  titleClassname
}) {
  return (
    <div className={divClassname}>
      <p className={`uppercase text-xl sm:text-2xl text-colorPrimary ${sectionClassname}`}>
        {section}
      </p>
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl pt-4 font-semibold leading-tight text-white ${titleClassname}`}
      >
        {title}
      </h2>
    </div>
  )
}
