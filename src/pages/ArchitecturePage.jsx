import React from 'react'
import BackToCollection from '../components/BackToCollection'
import CollectionBadge from '../components/CollectionBadge'
import ComingSoonNotice from '../components/ComingSoonNotice'

function ArchitecturePage() {
  return (
    <div>
    <BackToCollection />
    <CollectionBadge category="ARCHITECTURE" photoCount={0}/>
    <ComingSoonNotice />
    </div>
  )
}

export default ArchitecturePage