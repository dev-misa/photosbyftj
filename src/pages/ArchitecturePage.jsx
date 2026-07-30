import BackToCollection from '../components/BackToCollection'
import CollectionGallery from '../components/CollectionGallery'

function ArchitecturePage() {
  return (
    <div className="SubPage">
    <BackToCollection />
    <CollectionGallery category="ARCHITECTURE" folder="architecture" />
    </div>
  )
}

export default ArchitecturePage