export const Chart = (props) => {
    return (
        <div id='chart' className='text-center'>
            <div className='container'>
                <div className='col-md-10 col-md-offset-1 section-title'>
                    <h2>$Santa</h2>
                </div>
                <div className='row'>
                    <iframe className="iframeSanta" src="https://nomics.com/exchanges/raydium/markets/BimPSEV2PwioDzgFJ91LvvmmbxTZoMM9GDzRGywyFt3m?interval=7d#chart" title="$Santa chart"/>
                </div>
            </div>
        </div>
    )
}
