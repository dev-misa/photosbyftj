
function CollectionBadge({category, photoCount}) {
  return (
    <div className="CollBadge">
        <span className="badge-cat">{category}</span>
        <span className="photo-count">{photoCount} Photos</span>
    </div>
    
  )
}

export default CollectionBadge