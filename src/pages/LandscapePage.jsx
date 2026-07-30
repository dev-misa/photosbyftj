import BackToCollection from '../components/BackToCollection'
import CollectionGallery from '../components/CollectionGallery'
function LandscapePage() {
  return (
    <div className="SubPage">
      <BackToCollection />
      <CollectionGallery category="LANDSCAPE" folder="landscape" />
    </div>
  )
}

export default LandscapePage