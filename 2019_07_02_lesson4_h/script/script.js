const maxLength = 30;
let argFunction = '                  string string string string string string string string string string string '+
'string string string string    ';

function getChangedString( argF ){

    if (typeof argF!=='string'){
        alert( 'В параметр должна быть передана строка!' );
    }
    else{
        let trimmedStr = argF.trim();
        return getCuttedString(trimmedStr);
    }
}

function getCuttedString( str ){
    if (str.length > maxLength){
        return str.substring(0,maxLength)+'...';
    }
    return  str;
}

console.log(getChangedString( argFunction ));