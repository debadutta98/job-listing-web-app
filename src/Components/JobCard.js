const JobCard = (props) => {
    return (
        <div
            className="flex-container__card"
            style={{
                borderLeft: props.details.featured
                    ? "5px solid hsl(180, 29%, 50%)"
                    : "none",
            }}
        >
            <img src={props.details.logo} alt={props.details.company} />
            <div className="flex-container__card__employement-details">
                <div className="flex-container__card__employement-details__employer">
                    <span>{props.details.company}</span>
                    {props.details.new && <span>new!</span>}
                    {props.details.featured && <span>Featured</span>}
                </div>
                <h3 className="flex-container__card__job-role">
                    {props.details.position}
                </h3>
                <ul>
                    <li>{props.details.postedAt}</li>
                    <li>{props.details.contract}</li>
                    <li>{props.details.location}</li>
                </ul>
            </div>
            <hr />
            <div className="flex-container__card__search-tag">
                {props.details.languages.map((lang, index) => {
                    return (
                        <button key={index} onClick={props.onAddFilter.bind(null,lang)}>{lang}</button>
                    );
                })}
            </div>
        </div>
    );
};
export default JobCard;
