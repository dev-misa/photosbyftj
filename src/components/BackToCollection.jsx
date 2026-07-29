import {useNavigate} from 'react-router-dom'
function BackToCollection() {
    const navigate = useNavigate();
  return (
    <div className="BackToCollection">

     <div className="BTCBUTTON">
            <button onClick={() => navigate('/collections')} >
                <svg width="35" height="35" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">

            <path d="M4 12.3002C4 12.5312 4.1215 12.7517 4.34019 12.9302L10.6094 18.3378C10.8281 18.5163 11.0711 18.6003 11.3262 18.6003C11.8608 18.6003 12.2739 18.2538 12.2739 17.7813C12.2739 17.5608 12.1888 17.3403 12.0066 17.1933L10.33 15.6918L6.22339 12.4997L6.00469 12.9512L9.23647 13.1507H20.7057C21.2767 13.1507 21.6777 12.7937 21.6777 12.3002C21.6777 11.8067 21.2767 11.4496 20.7057 11.4496H9.23647L6.00469 11.6492L6.22339 12.1112L10.33 8.90858L12.0066 7.40704C12.1888 7.26004 12.2739 7.03953 12.2739 6.81902C12.2739 6.3465 11.8608 6 11.3262 6C11.0711 6 10.8281 6.084 10.6094 6.26251L4.34019 11.6701C4.1215 11.8487 4 12.0692 4 12.3002Z" fill="var(--btctxt)"/>
            <circle cx="12.5" cy="12.5" r="12.5" fill="var(--btcbutton)" fill-opacity="0.5"/>
            </svg>
           
            </button>
    </div>
 <div className="BTCh2">
     <h2>Back to Collections</h2>
 </div>


    </div>

    
  )
}

export default BackToCollection