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

let padding = .1
let width = 400
let height = 40 * data.length + ( 40 * padding * ( data.length + 1 ) )

const xScale =
d3.scaleLinear()
  .domain( [ 0, 20 ])
  .range( [ 0, width ] )

const yScale =
d3.scaleBand()
  .domain( data.map( d => d.label ) )
  .rangeRound( [ 0, height ] )
  .padding( padding )

let chart =
d3.select( 'svg' )
  .attr( 'width', width )
  .attr( 'height', height )

let bars =
chart.selectAll( 'rect' )
  .data( data )
  .enter()
  .append( 'rect' )

bars
  .attr( 'width', d => xScale( d.value ) )
  .attr( 'height', yScale.bandwidth() )
  .attr( 'x', 0 )
  .attr( 'y', d => yScale( d.label ) )
  .attr( 'fill', 'pink' )

let labels =
chart.selectAll( 'text' )
  .data( data )
  .enter()
  .append( 'text' )

let offset = yScale.bandwidth() / 2

labels
  .text( d => d.label )
  .attr( 'dominant-baseline', 'middle' )
  .attr( 'x', 0 )
  .attr( 'y', d => yScale( d.label ) + offset )

