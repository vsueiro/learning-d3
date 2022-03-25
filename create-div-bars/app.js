let data = [
  {
    "id": 1,
    "value": 10,
    "label": "Label A"
  },
  {
    "id": 2,
    "value": 20,
    "label": "Label B"
  },
  {
    "id": 3,
    "value": 5,
    "label": "Label C"
  }
]

let chart = d3.select( '.chart' )

let bars = chart.selectAll( 'div' )
  .data( data )
  .enter()
  .append( 'div' )

bars
  .text( d => d.label )

bars
  .style( 'width', d => d.value * 20 + 'px' )
  .style( 'height', '40px' )
  .style( 'margin', '4px' )
  .style( 'background-color', 'pink' )