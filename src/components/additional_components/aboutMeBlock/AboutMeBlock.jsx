import { ABOUT_SECTION_CONTENT } from "../../../constants/content"

const AboutMeBlock = () => {
  return (
    <div className="about_block">
        {ABOUT_SECTION_CONTENT.map((item) => (
            <p key={item} className="paragraph_block">{item}</p>
          ))}
    </div>
  )
}

export default AboutMeBlock