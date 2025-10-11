import React from 'react'
import BackToCollection from '../components/BackToCollection'
import CollectionBadge from '../components/CollectionBadge'
import ComingSoonNotice from '../components/ComingSoonNotice'
function NaturePage2() {
  return (
    
    <div>

    <BackToCollection />
    <CollectionBadge category="NATURE" photoCount={0}/>
    <ComingSoonNotice />
    </div>

  )
}

export default NaturePage2