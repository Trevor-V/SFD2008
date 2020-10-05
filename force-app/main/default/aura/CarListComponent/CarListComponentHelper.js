({
    sort : function(comp, col) {
        var garage = comp.get('v.carList');
        garage.sort(function (a,b){
            if(a[col] < b[col]){
                return -1;
            }
            if(a[col] > b[col]){
                return 1;
            }
        });
        comp.set('v.carList',garage);
    }
})