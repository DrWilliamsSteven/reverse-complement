$(document).ready(function() {
			
			
    function updateOutput(str){
        
        var arr = str.split("");
        var result = [];
        
        for (var i = 0; i < arr.length; i++){
            var newValue = "";
            switch(arr[i]){
                case 'A': 
                case 'a': 
                    newValue = 'T';
                    break;
                case 'T': 
                case 't':
                    newValue = 'A';
                    break;
                case 'C':
                case 'c':    
                    newValue = 'G';
                    break;    
                case 'G':
                case 'g':    
                    newValue = 'C';
                    break; 
                default:
                    newValue = 'Z';
                    break;
            }
            
            result.push(newValue);            
        }
        
        result.reverse();  
        var regexp = /[Z]/g;
        
        
        var isNonBases = regexp.test(result.join(""));
        console.log(isNonBases);
        console.log(result.join(""));
        
       isNonBases ? document.getElementById('outputbox').innerHTML = "Your input contains non-standard bases" : document.getElementById('outputbox').innerHTML = result.join("")  ; 
    }
    
    
			
			$('button').click( function() {
                
                var input = $('#inputbox').val();
				updateOutput(input);
			});
			
						
   
		

});