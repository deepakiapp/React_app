import React, { Component } from 'react';
import { Table, Pagination, PaginationItem, PaginationLink} from 'reactstrap';
import './userlist.css';

class Userlist extends Component{

render(){
  return(
      <div className="user-list">
        <div className="userlist-table">
        <Table hover>
       <thead>
         <tr>
           <th>S.No</th>
           <th>First Name</th>
           <th>Last Name</th>
           <th>Email Address</th>
           <th>Status</th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <th scope="row">1</th>
           <td>Mark</td>
           <td>Otto</td>
           <td>@mdo</td>
           <td>Active</td>
         </tr>
         <tr>
           <th scope="row">2</th>
           <td>Jacob</td>
           <td>Thornton</td>
           <td>@fat</td>
           <td>inActive</td>
         </tr>
         <tr>
           <th scope="row">3</th>
           <td>Larry</td>
           <td>the Bird</td>
           <td>@twitter</td>
           <td>Active</td>
         </tr>
       </tbody>
     </Table>
     <div className="pagination">
     <Pagination size="sm" aria-label="Page navigation example">
        <PaginationItem>
          <PaginationLink previous href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="#" />
        </PaginationItem>
      </Pagination>
     </div>
        </div>
      </div>
  );
}
}

export default Userlist;
