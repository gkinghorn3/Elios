import './venue-summary.scss';

const VenueSummary = () => {
    return (
        <section className='flex venue-summary-container'>
            <div>
                <img src='./icons/live-music-icon.png' />
                <h3>LIVE MUSIC</h3>
            </div>
            <div>
                <img src='./icons/Cocktail-icon.png' />
                <h3>WORLD CLASS COCKTAILS</h3>
            </div>
            <div>
                <img src='./icons/Calendar-icon.png' />
                <h3>OPEN 7 DAYS</h3>
            </div>
        </section>
    )
}

export default VenueSummary;