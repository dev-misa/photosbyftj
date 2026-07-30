import BackToCollection from '../components/BackToCollection'
import CollectionGallery from '../components/CollectionGallery'
function StreetPage() {
  return (
    <div className="SubPage">
      <BackToCollection />
          <CollectionGallery category="STREET" folder="street" />
    </div>
  )
}

export default StreetPage