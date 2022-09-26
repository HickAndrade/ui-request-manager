import React from 'react'
import '../assets/styles/table-sync.scss'

const TableSync = ({ allContent, /*bodyContent*/ }) => {
  const betweenScrolls = (e) =>{
    const headerScroll = document.getElementById('tbl-header-requests');
    const bodyScroll = document.getElementById('tbl-body-requests');

    if(e.target.id === 'tbl-header-requests'){
        bodyScroll.scrollLeft = e.target.scrollLeft;
        bodyScroll.scrollRight = e.target.scrollRight;
    }else{
        headerScroll.scrollLeft = e.target.scrollLeft;
        headerScroll.scrollRight = e.target.scrollRight;
    }
  }

return(
<section className='req-wrapper'>
    <div className='tbl-header'id='tbl-header-requests' onScroll={(e) => betweenScrolls(e)}>
        <table cellPadding='0' cellSpacing='0' border='0'>
            <thead>
             <tr>
                {Object.values(allContent).map(({ label, value }) =>(
                    <th key={label}>{ label }</th>
                ))}
            </tr>
            </thead>
        </table>
    </div>
    <div className='tbl-content' id='tbl-body-requests' onScroll={(e) => betweenScrolls(e)}>
        <table cellPadding='0' cellSpacing='0' border='0'>
            <tbody>
                <tr>
                {Object.values(allContent).map(({label, value}) =>(
                    <td key={label}>{ value }</td>            
                ))}
                </tr>
            </tbody>
        </table>
    </div> 
</section>
)
}


export default TableSync;

/* bodyContent commented because the example doesn't get data from the API. */