function subStrUnderCond(s){
    //write code here
    //console.log(typeof(s))
    let length = s.length;
    let count =0;
    for(let i=0;i<length;i++){
        
        for(let j = i;j<=length;j++){
            let substr = s.substring(i,j)
            if(CheckStr(substr)){
                count++;
            }
        }
       
    }
     console.log(count)
    
    }
    function CheckStr(substr){
        if(substr.length==1){
            return false
        }
        
        return substr.charAt(0)==substr.charAt(substr.length-1);
    }
    