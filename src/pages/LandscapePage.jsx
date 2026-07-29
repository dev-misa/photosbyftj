import BackToCollection from '../components/BackToCollection'
import CollectionBadge from '../components/CollectionBadge'
import ComingSoonNotice from '../components/ComingSoonNotice'
function LandscapePage() {
  return (
    <div>
      <BackToCollection />
      <CollectionBadge category="LANDSCAPE" photoCount={0}/>
      <ComingSoonNotice />
    </div>
  )
}

export default LandscapePage