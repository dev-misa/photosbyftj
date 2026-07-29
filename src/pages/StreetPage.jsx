import BackToCollection from '../components/BackToCollection'
import CollectionBadge from '../components/CollectionBadge'
import ComingSoonNotice from '../components/ComingSoonNotice'
function StreetPage() {
  return (
    <div>
      <BackToCollection />
          <CollectionBadge category="STREET" photoCount={0}/>
          <ComingSoonNotice />
    </div>
  )
}

export default StreetPage