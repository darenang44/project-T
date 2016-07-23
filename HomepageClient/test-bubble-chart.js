$(document).ready(function () {
  // $.ajax({
  //     type: "GET",
  //     headers: {"Content-Type": "application/json", "Accept": "application/json"},
  //     // url: "http://www.example.org/ajax.php"
  // }).done(function (data) {
  //     console.log(data);
  //   });

var bubbleChart = new d3.svg.BubbleChart({
    supportResponsive: true,
    //container: => use @default
    size: 750,
    //viewBoxSize: => use @default
    innerRadius: 750 / 3.5,
    //outerRadius: => use @default
    radiusMin: 62.5,
    //radiusMax: use @default
    //intersectDelta: use @default
    //intersectInc: use @default
    //circleColor: use @default

    data: {
      items: [
        { text: 'Britney Spears', count: '90' },
        { text: 'Stranger Things', count: '55' },
        { text: 'Sharia Law', count: '56' },
        { text: 'Katy Perry Rise', count: '39' },
        { text: 'NES Classic Edition', count: '32' },
        { text: 'Melanie Hamrick', count: '40' },
        { text: 'Darryl Strawberry', count: '38' },
        { text: 'Eiffel Tower', count: '75' },
        { text: 'Dani Mathers', count: '24' },
        { text: 'Dylan Noble', count: '1' },
        { text: 'Nintendo', count: '23' }
      ],
      eval: function (item) {return item.count;},
      classed: function (item) {return item.text.split(" ").join("");}
    },
    plugins: [
      {
        name: "central-click",
        options: {
          text: "(Click for Trend Research)",
          style: {
            "font-size": "14px",
            "font-style": "italic",
            "font-family": "Source Sans Pro, sans-serif",
            //"font-weight": "700",
            "text-anchor": "middle",
            "fill": "white"
          },
          attr: {dy: "65px"},
          centralClick: function(item) {
            // alert("Here is more details: " + item.text + "!!");
<<<<<<< 01b3dbeed0c08ba57e240944b4de2e5e973686f2
            window.location.href = 'http://localhost:3000/dashboard';
=======
            window.location.href = 'dashboard.html';
>>>>>>> redirect from homepage to dashboard
            // console.log()
          }
        }
      },
      {
        name: "lines",
        options: {
          format: [
            {// Line #0
              textField: "count",
              classed: {count: true},
              style: {
                "font-size": "36px",
                "font-family": "Source Sans Pro, sans-serif",
                "text-anchor": "middle",
                fill: "white"
              },
              attr: {
                dy: "0px",
                x: function (d) {return d.cx;},
                y: function (d) {return d.cy;}
              }
            },
            {// Line #1
              textField: "text",
              classed: {text: true},
              style: {
                "font-size": "12px",
                "font-family": "Source Sans Pro, sans-serif",
                "text-anchor": "middle",
                fill: "white"
              },
              attr: {
                dy: "20px",
                x: function (d) {return d.cx;},
                y: function (d) {return d.cy;}
              }
            }
          ],
          centralFormat: [
            {// Line #0
              style: {"font-size": "60px"},
              attr: {}
            },
            {// Line #1
              style: {"font-size": "40px"},
              attr: {dy: "40px"}
            }
          ]
        }
      }]
  });
});