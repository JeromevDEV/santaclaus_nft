export const Faq = (props) => {
    return (
        <div id="Faq"  className='text-center'>
            <div className="container">
                <div className='section-title'>
                    <h2>FAQ</h2>
                    <p>
                        Do you have any question ? Here you can find a summary of our informations.
                    </p>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        {" "}
                        <img src="img/portfolio/santa9.png" className="img-responsive" alt=""/>{" "}
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <div className="about-text">
                            <p>{props.data ? props.data.paragraph : "loading..."}</p>
                            <div className="list-style">
                                <div className="col-lg-6 col-sm-6 col-xs-12">
                                    <ul>
                                        {props.data
                                            ? props.data.Why.map((d, i) => (
                                                <li key={`${d}-${i}`}>{d}</li>
                                            ))
                                            : "loading"}
                                    </ul>
                                </div>
                                <div className="col-lg-6 col-sm-6 col-xs-12">
                                    <ul>
                                        {props.data
                                            ? props.data.Why2.map((d, i) => (
                                                <li key={`${d}-${i}`}> {d}</li>
                                            ))
                                            : "loading"}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
