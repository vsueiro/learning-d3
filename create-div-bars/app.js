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

let chart = d3.select( 'div' )
  .style( 'padding', '4px 0' )

let bars = chart.selectAll( 'div' )
  .data( data )
  .enter()
  .append( 'div' )

bars
  .text( d => d.label )
  .style( 'display', 'flex' )
  .style( 'flex-direction', 'column' )
  .style( 'justify-content', 'center' )

bars
  .style( 'width', d => d.value * 20 + 'px' )
  .style( 'height', '40px' )
  .style( 'margin', '4px 0' )
  .style( 'background-color', 'pink' )