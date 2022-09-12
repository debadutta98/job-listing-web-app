import { useMemo, useState } from "react";
import JobCard from "./Components/JobCard";
import JobFilter from "./Components/JobFilter";
import jobs from "./data";
function App() {
  const [filter, setFilter] = useState([]);
  const onRemoveFilter = (filterName) => {
    setFilter((prevState) => {
      return prevState.filter((val) => val !== filterName);
    });
  };
  const onAddFilter = (filterName) => {
    if (!filter.includes(filterName)) {
      setFilter((prevState) => {
        return [...prevState, filterName];
      });
    }
  };
  const removeAllFilter = () => {
    setFilter([]);
  }
  const filteredJobs = useMemo(() => {
    if (filter.length === 0) {
      return jobs;
    } else {
      return jobs.filter((job) => (
        filter.every((lang) => (
          job.languages.includes(lang)
        ))
      ));
    }
  }, [filter]);
  return (<>
    <header />
    <div className="flex-container" style={{ paddingTop: filter.length >0?"0rem":"3rem"}}>
      {filter.length > 0 && <JobFilter onRemoveFilter={onRemoveFilter} removeAllFilter={removeAllFilter} filters={filter} />}
      {
        filteredJobs.map((job) => {
          return <JobCard key={job.id} details={job} onAddFilter={onAddFilter} />;
        })
      }
    </div>
  </>
  );
}

export default App;
