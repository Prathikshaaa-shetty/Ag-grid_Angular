import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'ag-grid';

  ColumnDefs:any;  
  RowData: any;  
  AgLoad!: boolean;  
  constructor() { }  
  
  ngOnInit() {  
    this.GetAgColumns();  
    this.GetGiftVoucherList();  
  }  
  GetAgColumns() {  
    this.ColumnDefs = [  
      { headerName: 'EmpId', field: 'EmpId', sortable: true, filter: true },  
      { headerName: 'Name', field: 'Name', sortable: true, filter: true },  
      { headerName: 'TeamName', field: 'TeamName', sortable: true, filter: true },  
      { headerName: 'YearOfJoining', field: 'YearOfJoining', sortable: true, filter: true },  
      { headerName: 'Place', field: 'Place', sortable: true, filter: true },  
      { headerName: 'CTC', field: 'CTC', sortable: true, filter: true }  
    ];  
  }  
  GetGiftVoucherList() {  
    this.AgLoad = true;  
    this.RowData = [  
      {  
        EmpId: "100",  
        Name: "Joey",  
        TeamName: "Friends",  
        YearOfJoining: "2012",  
        Place: "California",  
        CTC: "250000",  
      },  
      {  
        EmpId: "101",  
        Name: "Pheobe",  
        TeamName: "Friends",  
        YearOfJoining: "2013",  
        Place: "California",  
        CTC: "260000",  
      },  
      {  
        EmpId: "102",  
        Name: "Monica",  
        TeamName: "Friends",  
        YearOfJoining: "2014",  
        Place: "LA",  
        CTC: "150000",  
      },  
      {  
        EmpId: "103",  
        Name: "Chandler",  
        TeamName: "Friends",  
        YearOfJoining: "2012",  
        Place: "California",  
        CTC: "1650000",  
      },  
      {  
        EmpId: "100",  
        Name: "Ross",  
        TeamName: "Friends",  
        YearOfJoining: "2013",  
        Place: "Califonia",  
        CTC: "350000",  
      },  
      {  
        EmpId: "101",  
        Name: "Rachel",  
        TeamName: "Friends",  
        YearOfJoining: "2014",  
        Place: "LA",  
        CTC: "360000",  
      },  
      {  
        EmpId: "102",  
        Name: "Emily",  
        TeamName: "Friends",  
        YearOfJoining: "Apple",  
        Place: "LA",  
        CTC: "350000",  
      },  
      {  
        EmpId: "103",  
        Name: "Ben",  
        TeamName: "Friends",  
        YearOfJoining: "Intex",  
        Place: "LA",  
        CTC: "1650000",  
      }  
    ];  
  }  
}  

