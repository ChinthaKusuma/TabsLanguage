import './index.css'

const TabItem = props => {
  const {item, getChange1, activeId, list3} = props
  const {id, buttonText, imageUrl, imageAltText} = item

  const className3 = id === activeId ? 'className1' : 'className2'

  const getChange = () => {
    getChange1(id)
  }

  return (
    <li className="bg2">
      <div className="get2">
        <button className={className3} type="button" onClick={getChange}>
          {buttonText}
        </button>
      </div>
    </li>
  )
}

export default TabItem
