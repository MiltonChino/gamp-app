import { useState } from 'react';
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-dt';

DataTable.use(DT);

function Table() {
 const [tableData, setTableData] = useState([
    [ 'Tiger Nixon', 'System Architect' ],
    [ 'Garrett Winters', 'Accountant' ],
    // ...
  ]);
 
    return (
      <>
      <div className="container" >
  <h1>Table well formated</h1>
            <div id="demo-table">
            <DataTable data={tableData} className="display">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Position</th>
                </tr>
            </thead>
        </DataTable>
        </div>
        </div>
        </>
  )
}

export default Table