//Set defualt date========================================================
let date = new Date();
this.startDate = new Date(date.getFullYear(), date.getMonth(), 1);
this.endDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);

this.searchDataGroup = new FormGroup({
    search: new FormControl(''),
    start_date: new FormControl(moment(this.startDate).locale('en-US').format('YYYY-MM-DD')),
    end_date: new FormControl(moment(this.endDate).locale('en-US').format('YYYY-MM-DD')),
    status: new FormControl(null),
});
