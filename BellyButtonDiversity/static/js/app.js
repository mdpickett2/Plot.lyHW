//using d3 to pull in the data from the samples JSON file

d3.json("data/samples.json").then((samplesdata) => {  
    //do a console.log to see if data is pulled in.
    console.log(samplesdata);

     
  var data = samplesdata;


});

