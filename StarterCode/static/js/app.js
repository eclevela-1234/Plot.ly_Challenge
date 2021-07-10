

  function buildMetadata(sample) {

// get data

  d3.json("samples.json").then(data => {
    console.log(data);
    var metadata = data.metadata;
    console.log(metadata);

    // filtere meta data for a single sample
    var resultsArray = metadata.filter(sampleObj => sampleObj.id == sample);
    console.log(resultsArray);

    var result = resultsArray[0];
    console.log(result);

    var panel = d3.select("#sample-metadata");

    // ensure the panel is clear
    panel.html("");

    // use object.entries to access key value pairs
    // use chain technique to add text to my h5 tag for each key value pair
    Object.entries(result).forEach(([key, value]) => {
      panel.append("h5").text(`${key.toUpperCase()}: ${value}`);
    });

    });
  };

    function buildCharts (sample) {
      d3.json("samples.json").then(data => {
        // console.log(data);
        // parse data out to variables
        // * Use `sample_values` as the values for the bar chart.
        // * Use `otu_ids` as the labels for the bar chart.
        // * Use `otu_labels` as the hovertext for the chart.

        var samples = data.samples;
        console.log(samples);

        var resultsArray = samples.filter(sampleObj.id == sample);

      console.log(resultsArray);
        // var sample_values = 
        // var otu_ids =
        // var otu_labels =

      });




    };

function init() {
  buildMetadata(940);
  buildCharts(940);
}

init();



// var data = "samples.json"
// d3.json(data).then(function(data) {
//     console.log(data);
//   });