function startNetwork() {
    // create an array with nodes
    nodesArray = [
        {id: 1, label: '1', color:{background:'#FF0000'}},
        {id: 2, label: '2'},
        {id: 3, label: '3'},
        {id: 4, label: '4'},
        {id: 5, label: '5'},
        {id: 6, label: '6'},
        {id: 7, label: '7'}
    ];
    nodes = new vis.DataSet(nodesArray);

    // create an array with edges
    edgesArray = [
        {from: 1, to: 3, value: 4, color:'red'},
        {from: 1, to: 2, value: 3},
        {from: 2, to: 4, value: 3},
        {from: 2, to: 5, value: 5},
        {from: 1, to: 5, value: 1},
        {from: 4, to: 6, value: 4},
        {from: 5, to: 7, value: 3},
        {from: 7, to: 6, value: 6},
        {from: 6, to: 5, value: 4},

    ];
    markTree(edgesArray);
    edges = new vis.DataSet(edgesArray);
    //markTree(edges._data);

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
            g[i].color = 'red';
            visitedEdges[g[i].from] = true;
            visitedEdges[g[i].to] = true;
        }
        else{
            g[i].color = 'blue';
        }
    }
    
}