const JobFilter=(props)=>{
    return <div className="flex-container__job-filter">
    <div className="flex-container__job-filter__container">
        {
            props.filters.map((filterName,index)=>{
                return <div className="flex-container__job-filter__container__ele" key={index}>
                    <span>{filterName}</span>
                    <button onClick={props.onRemoveFilter.bind(null,filterName)}>x</button>
                </div>
            })
        }
    </div>
        <button onClick={props.removeAllFilter.bind(null)} className="flex-container__job-filter__clear">Clear</button>
    </div>
}
export default JobFilter;