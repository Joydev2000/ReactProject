import PropTypes from 'prop-types'

const Card = ({item}) => {
  return (
    <div key={item.id} className="bg-white rounded-lg shadow p-4">
      <img 
        src={item.imageSrc} 
        alt={item.imageAlt}
        className="w-full h-48 object-contain rounded-lg mb-4"
      />
      <h3 className="font-semibold text-lg">{item.name}</h3>
      <p className="text-gray-600">{item.price}</p>
    </div>
  )
}

Card.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired
  }).isRequired
}

export default Card
