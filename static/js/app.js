
//function that makes chart with  
function buildBarchart() {

  //reading in samples.json file
  d3.json("samples.json").then(function(data) {
    console.log(data);
  
  
    //use map arrow function to grab values from json for plots 
    //
    var id = data.samples.map(row => row["id"]);
    var tooltip = data.samples.map(row =>row["otu_labels"]);
    var sampleValues = data.samples.map(row => row["sample_values"]);
    var labels = data.samples.map(row => row["otu_ids"]);
    
    //convert labels to string, split between objects
    var strlabels = labels[0].toString().split(",");
    //map otu id's back onto newLabels array
    var newLabels = strlabels.map(element => `OTU ${element}`);

    

    // console.log(id);
    // console.log(tooltip);
    // console.log(sampleValues);
    // console.log(labels);

    
    //creating trace for bar plot and slicing data to keep only top 10 values
    var trace1 = {
      
      x: sampleValues[0].slice(0, 10).reverse(),
      y: newLabels.slice(0, 10).reverse(),
      text: tooltip[0].slice(0,10).reverse(),
      type: "bar",
      orientation: "h",

    };

    // creating array of trace 1 for adding to newPlot function
    var top10data = [trace1];
    console.log(top10data);

    //layout for bar chart
    var layout = {
      title: "Top 10 Microbes",
      height: 600,
      width: 450
    };

    //creating newPlot chart with chart type, sliced trace data, and layout
    Plotly.newPlot("bar", top10data, layout);

    

  });


}

buildBarchart();



  
  
  








