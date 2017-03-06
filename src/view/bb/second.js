require('grid');
require('pager');
function genData(n) {
    var list = [];
    for (var i = 0; i < n; i++) {
        list.push({
            aaa: new Date - i,
            bbb: Math.random().toString(32).replace(/0\./, ""),
            ccc: (Math.random() + "").replace(/0\./, ""),
            ddd: i
        })
    }
    return list
}
 var vm = avalon.define({
    $id: 'widget1',
    header: ['aaa', 'bbb', 'ccc'],
    start: 0,
    count: 10,
    data: genData(300),
     init: function () {
         avalon.log("second init"+_.now());
     },
    ready: function (e) {
        avalon.log("second ready"+_.now());
        e.vmodel.$watch('currentPage', function (a) {
            vm.start = a - 1;
        })
    },
    ddd: 'bbb'
});


avalon.ready(function () {
    avalon.vmodels['root'].headerPage = '<p>this is headerPage,second</p>';
});
module.exports = vm;