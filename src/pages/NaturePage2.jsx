import BackToCollection from '../components/BackToCollection'
import CollectionGallery from '../components/CollectionGallery'
function NaturePage2() {
  return (

    <div className="SubPage">

    <BackToCollection />
    <CollectionGallery category="ANIMALS" folder="nature" />
    </div>

  )
}

export default NaturePage2