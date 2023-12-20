import './index.css'

const Image = props => {
  const {src1, alt1} = props
  return (
    <li>
      <img src={src1} alt={alt1} className="img1" />
    </li>
  )
}
export default Image
