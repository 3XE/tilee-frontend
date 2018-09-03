var Tile = function (width, height, name, unit) {
    this.width  = width;
    this.height = height;
    this.name   = name;
    this.unit = unit || '';
    this.aspectRatio = ko.computed(this.getAspectRatio);
};

Tile.prototype.getAspectRatio = function () {
    let fractionalPart = this.width / this.height;
    fractionalPart = Math.round(fractionalPart * 100) / 100;
    return '1:' + new String();
};


var Pattern = function (name, calculator) {
    this.name = name;
};

var Surface = function (width, height) {
    
    this.width = ko.observable(width);
    this.height = ko.observable(height);
    this.area = ko.pureComputed(this.computeArea, this);
};

Surface.prototype.computeArea = function () {
    console.log(this.width(), this.height());
    return this.width() * this.height();
};

var vm = {};

var subway = new Tile(6,3,"Subway",'"');
var patio = new Tile(12,12,"Patio",'"');
vm.tiles = ko.observableArray([subway, patio]);
vm.activeTile = ko.observable(patio);
vm.choosingTile = ko.observable(false);

var diamond = new Pattern('Diamond');
var rectangle = new Pattern('Rectangle');
vm.patterns = ko.observableArray([diamond, rectangle]);
vm.selectedPattern = ko.observable();

vm.tileSelector = {
    selectedTile: ko.observable(),
};

vm.wall = new Surface(120, 120);
vm.tileCount = ko.observable(0);

var recalculate = function() {
    //TODO: 
    console.log('RECALCULATE...');
};

vm.wall.area.subscribe(recalculate);
vm.selectedPattern.subscribe(recalculate);
vm.activeTile.subscribe(recalculate);

var controls = document.getElementById('controls');
ko.applyBindings(vm, controls);