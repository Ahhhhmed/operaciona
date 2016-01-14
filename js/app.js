var model = {
    init: function(){
        this.nodesArray = [
            {id: 1, label: '1'},
            {id: 2, label: '2'},
            {id: 3, label: '3'},
            {id: 4, label: '4'},
            {id: 5, label: '5'},
            {id: 6, label: '6'},
            {id: 7, label: '7'}
        ];
        this.edgesArray = [
            {from: 1, to: 3, value: 4},
            {from: 1, to: 2, value: 3},
            {from: 2, to: 4, value: 3},
            {from: 2, to: 5, value: 5},
            {from: 1, to: 5, value: 1},
            {from: 4, to: 6, value: 4},
            {from: 5, to: 7, value: 3},
            {from: 7, to: 6, value: 6},
            {from: 6, to: 5, value: 4},
        ];
        this.colorMinimalSpaningTree();
    },
    getEdges: function(){
        return this.edgesArray;
    },
    getNodes: function(){
        return this.nodesArray;
    },
    addEdge: function(edge){
        this.edgesArray.push(edge);
        this.colorMinimalSpaningTree();
    },
    addNode: function(node){
        nodesArray.push(node)
    },
    removeNode: function(id){
        for (i in this.nodesArray) {
            if (this.nodesArray[i].id === id){
                this.nodesArray.slice(i, 1);
                break;
            }
        }
    },
    removeEdge: function(from, to){
        for (i in this.nodesArray) {
            if (this.nodesArray[i].from === from && this.nodesArray[i].to === to){
                this.nodesArray.slice(i, 1);
                break;
            }
        }
        this.colorMinimalSpaningTree();
    },
    colorMinimalSpaningTree: function(){
        this.edgesArray.sort(function (a, b){
            return a.value - b.value;
        });
        var visitedEdges = new Set();
        for (i in this.edgesArray) {
            if(!(visitedEdges.has(this.edgesArray[i].from) && visitedEdges.has(this.edgesArray[i].to))){
                this.edgesArray[i].color = 'green';
                visitedEdges.add(this.edgesArray[i].from);
                visitedEdges.add(this.edgesArray[i].to);
            }
            else{
                this.edgesArray[i].color = 'blue';
            }
        }
    }
};


function startNetwork() {
    model.init();
    nodes = new vis.DataSet(model.getNodes());
    edges = new vis.DataSet(model.getEdges());
    //markTree(edges.getDataSet());

    // create a network
    var container = document.getElementById('mynetwork');
    var data = {
        nodes: nodes,
        edges: edges
    };
    var options = {};
    network = new vis.Network(container, data, options);
}

//marks Minimum spanning tree
function markTree(g){
    g.sort(function (a, b){
        return a.value - b.value;
    });
    var visitedEdges = {};
    for (i in g) {
        if(!(g[i].from in visitedEdges && g[i].to in visitedEdges)){
            g[i].color = 'green';
            visitedEdges[g[i].from] = true;
            visitedEdges[g[i].to] = true;
        }
        else{
            g[i].color = 'blue';
        }
    }
    
}