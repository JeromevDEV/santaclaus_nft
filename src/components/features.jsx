export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Features</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-md-4'>
                  {' '}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                    <p><a href={d.link}>More info </a></p>
                </div>
              ))
            : 'Loading...'}
            <iframe className="iframeSanta" src="https://nomics.com/exchanges/raydium/markets/BimPSEV2PwioDzgFJ91LvvmmbxTZoMM9GDzRGywyFt3m#chart" title="$Santa chart"/>
        </div>
      </div>
    </div>
  )
}
