import { Component, Input, OnInit } from '@angular/core';
//import * moment from 'moment';
enum SEARCH_TYPE {
  NORMAL = 'NORMAL',
  FILTER = 'FILTER',
}

enum COLUMN_DATA_TYPE{
  STRING = 'STRING',
  INT_NUMBER = 'INT_NUMBER',
  FLOAT_NUMBER = 'FLOAT_NUMBER',
  TAGS = 'TAGS',
  STAR = 'STAR',
  STATUS = 'STATUS',
  STATUS_NEW = 'STATUS_NEW',
  ARRAY = 'ARRAY',
  DUAL_TEXT = 'DUAL_TEXT'
}

interface FixedHeader{
title:string;
key_name:string;
dtype: COLUMN_DATA_TYPE;
flexPercent?: string;
canSort?: boolean;
ascending?: boolean;
searchValue?: boolean;
searchType?: SEARCH_TYPE;
searchFilterList ?: any[];
selectedFilters?: FILTER_OPTION[];
searchWidthMatchesParent?: boolean;

}

interface Header{
  title:string;
  key_name:string;
  dtype: COLUMN_DATA_TYPE;
  flexPercent?: string;
  canSort?: boolean;
  ascending?: boolean;
  searchValue?: boolean;
  searchType?: SEARCH_TYPE;
  searchFilterList ?: any[];
  selectedFilters?: FILTER_OPTION[];
  searchWidthMatchesParent?: boolean;
  
  }
interface FILTER_OPTION {
  name: string;
  value : string;
}

@Component({
  selector: 'app-ru-table',
  templateUrl: './ru-table.component.html',
  styleUrls: ['./ru-table.component.scss']
})
export class RuTableComponent implements OnInit {

  fixedTableMaxWidth='25';
  constructor() { }
  @Input() tableTitle="";
  @Input() totalTableDataCount="";
  @Input() showFilter = false;
  @Input() showupload = false;
  @Input() download = false;
  @Input() showicon = false;
  @Input() header:any=[];
  @Input() tableData:any=[];
  ngOnInit(): void {
  }


}













