import React from "react";
import data from "../jsons/summary.json";
import {summaryStyleData} from '../Data/data'

function ImpressionsCard() {
 
  return (
    <div className='col-md-12 col-xl-4'>
      {data?.summary.map((el, idx) => (
        <div className='card comp-card'>
          <div className='card-body'>
            <div className='row align-items-center'>
              <div className='col'>
                <h6 className='m-b-25'>{el.title}</h6>
                <h3 className={"f-w-700 " + (summaryStyleData[idx].color)}>{el.value}</h3>
                <p className='m-b-0'>{el.duration} ({el.year})</p>
              </div>
              <div className='col-auto'>
                <i className={(summaryStyleData[idx].icon) +' bg-c-blue' + (summaryStyleData[idx].font) } />
              </div>
            </div>
          </div>
        </div>
      ))}

    </div>
  );
}

export default ImpressionsCard;
