// Write your code here
import './index.css'

const PlanetItem = props => {
  const {itemDetails} = props
  const {imageUrl, id, name, description} = itemDetails
  return (
    <div className="item-container">
      <div className="item-container2" key={id}>
        <img className="image1" alt={`planet ${name}`} src={imageUrl} />
        <h2 className="item-h2">{name}</h2>
        <p className="item-description">{description}</p>
      </div>
    </div>
  )
}

export default PlanetItem
