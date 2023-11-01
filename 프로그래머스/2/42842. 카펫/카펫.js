const solution = (brown, yellow) => {
    const tot = brown + yellow;
    for (var y = 3; y <= tot / y; y++) {
        var x = Math.floor(tot / y);
        if( (x-2)*(y-2)=== yellow) {
            break;
        }
    }
    return [x,y]; 
}
