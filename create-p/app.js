let data = [ 1, 2, 3 ]

// D3 version
d3.select( '.d3' )
  .selectAll( 'p' )
  .data( data )
  .enter()
  .append( 'p' )
  .text( d => d )

// Vanilla version
for ( let d of data ) {
  let p = document.createElement( 'p' )
  p.textContent = d
  document.querySelector( '.vanilla' ).append( p )
}
