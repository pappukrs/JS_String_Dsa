function subStrUnderCond(s){
    //write code here
    
         let length = s.length;
         let count = 0;
        for ( let i = 0;i <= length ;i++){
            
            for( let j=i ;j<=length;j++){
               let subStr =  s.substring(i,j)
                
                if(checkCondition(subStr)){
                    count++;
                }
               
            
            }
        }
        console.log(count)
    }
    
    
    function checkCondition(str){
        if(str.charAt(0)==str.charAt(str.length-1)){
            //console.log(str)
             return str;
        }
    }
    