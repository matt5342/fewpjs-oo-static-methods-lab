class Formatter {
  //add static methods here
  static capitalize(str){
    return str[0].toUpperCase() + str.slice(1)
  }
  static sanitize(str){
    return str.replace(/[^a-z0-9 '-]/gi, '')
  }
  static titleize( sentence ) {
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let result = [];
    let arrayOfWords = sentence.split( " " )
    for ( let n = 0; n < arrayOfWords.length; n++ ) {
      if ( n == 0 ) {
        result.push( this.capitalize( arrayOfWords[ n ] ) )
      } else {
        if ( exceptions.includes( arrayOfWords[ n ] ) ) {
          result.push( arrayOfWords[ n ] )
        } else {
          result.push( this.capitalize( arrayOfWords[ n ] ) )
        }
      }

    }
    return result.join( " " );
  }
  
}