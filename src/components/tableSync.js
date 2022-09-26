import React from 'react'
import '../assets/styles/tableSync.scss'

const TableSync = ({ allContent, /*bodyContent*/ }) => {
return(
<section className='req-wrapper'>
    <div  className='tbl-header-requests'>
        <table cellPadding='0' cellSpacing='0' border='0'>
            <thead>
            {Object.values(allContent).map(({ label, value }) =>(
                <tr key={value}>
                    <th key={label}>{ label }</th>
                </tr>
                ))}
            </thead>
        </table>
    </div>
    <div className='tbl-content' id='tbl-body-requests'>
        <table cellPadding='0' cellSpacing='0' border='0'>
            <tbody>
             {/*   {Object.values(allContent).map(({ label, value }) =>(
                    <tr key={label}>
                        <td key={value}>{ value }</td>
                    </tr>
             ))}*/}
            </tbody>
        </table>
    </div> 
</section>
)
}


export default TableSync;

/* bodyContent commented because the example doesn't get data from the API. */