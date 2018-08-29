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


var vm = {};

vm.tiles = ko.observableArray([]);
vm.tiles.push(new Tile(6,3,"Subway",'"'));
vm.tiles.push(new Tile(12,12,"Patio",'"'));
vm.activeTile = ko.observable();
vm.choosingTile = ko.observable(true);

vm.tileSelector = {
    selectedTile: ko.observable(),
};

var controls = document.getElementById('controls');
ko.applyBindings(vm, controls);