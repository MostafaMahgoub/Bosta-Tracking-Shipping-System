import LogsProgress from "./Components/LogsProgress";
import { useContext } from 'react';
import { AppContext } from '../AppContext';


function ActivityLogs(){
    const { data , t  } = useContext(AppContext);
    return (
        data && data.TrackingNumber ? (<div>
            <h2 className="text-[#667085]">{t('Activity log')}</h2>
            <LogsProgress />
        </div>) : ""
    )
}


export default ActivityLogs;