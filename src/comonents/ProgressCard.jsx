import React from "react";
import data from "../jsons/Project_Progress_Summary.json";
import {progressStyleData} from '../Data/data'

function ProgressCard() {
 
  return (
    <div className='col-xl-12'>
      <div className='card proj-progress-card'>
        <div className='card-block'>
          <div className='row'>
            {data?.project_progress_summary.map((el,idx) => (
              <div className='col-xl-3 col-md-6'>
              <h6>{el.title}</h6>
              <h5 className='m-b-30 f-w-700'>
               {el.value}
                <span className={' m-l-10' +( progressStyleData[idx].TextColor)}>{el.percentage}</span>
              </h5>
              <div className='progress'>
                <div
                  className={'progress-bar ' + ( progressStyleData[idx].backGround)}
                  style={{ width: progressStyleData[idx].width}}
                />
              </div>
            </div>
            ))}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressCard;
