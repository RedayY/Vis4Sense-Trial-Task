/*Spec for Nodes

describe("BuildGraph", function() {
    var Node;
    beforeEach(function () {
        Node = new parentNode;
        ChildNode = new nodeDict;
    });
},
//descr
it("Should Create a Node", function() {
    //action
    //checks if a link has been drawn from one node
    expect(Node.arcTo(ChildNode.widget(), x1, ChildNode.widget(), y1)).toEqual((ChildNode.arcTo(Node.widget(), x1, Node.widget(), y1)));
    expect(Node.setLink(ChildNode));
})

This whole thing up there is wrong.
*/

//Second Attempt

describe( "Forest Node Edges and Connection", function () {


    var key, edges, d;

    describe( "buildGraph", function () {
        it("Builds a Graph around Nodes and connects the child to the parent", function () {
            expect(key).toBe(d);
            !expect(edges).toBeNull;
    });
});

});
//jasmine still doesn't read spec after reading spec the whole time ?
/*

Things I've leared about reading SenseMap Source

Sensemap uses mxClient() Api to manage connections between server service.
Used Forest.js, history-map-vis.js and mxclient.js to visualize d(data) using m(map)
Sensemap ignores local files. IE, open local written .html .js .php files when sensemap is running will trigger sensemap to store info.
When Sensemap is executed, it adds listeners to chrome to gather data to process.

At the start I mostly focused on testing and recreating the bug to further identify how it gets triggered, however I was unable to recreate it,
contacted Dr Xu.

I feel like I am missing something small that could solve all my doubts. Or maybe my deductions from this Projects are just wrong.

Major issue regards of testing:
-Tests are running, however unsure if they are running because it is written correctly or has no connection to forest.js/history-map-vis.js
-Jasmine slightly unsuitable for running chrome extension tests. Maybe Chai/Mocha would be more suitable to run tests..... my fault

Code however was very interesting to read :)

 */