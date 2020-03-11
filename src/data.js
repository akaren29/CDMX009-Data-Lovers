
 const sortData = (data, sortBy, sortOrder) => {
   let arrOrder = [];
   /*Ordenar Alfabeticamente*/
    if (sortBy === 'name'){
       if (sortOrder === 'A-Z'){
         arrOrder = data.sort(function(abc,bcd){
            if (abc.name > bcd.name) return 1;
            if (abc.name === bcd.name) return 0;
            return -1; 
         });
       }else{
         arrOrder = data.sort(function (abc, bcd){
           if (bcd.name > abc.name) return 1;
           if (bcd.name === abc.name) return 0;
           return -1;
         });
       }
     /*Ordenar por número*/
     } else if (sortBy === 'number'){
       if (sortOrder === 'asc'){
         arrOrder = data.sort(function (abc, bcd){
           if(abc.num > bcd.num) return 1;
           if(abc.num === bcd.num) return 0;
           return -1;
         });
       }else {
         arrOrder = data.sort(function(abc, bcd){
           if (bcd.num > abc.num) return 1;
           if (bcd.num === abc.num) return 0;
           return -1;
         });
       }
     }
    return arrOrder;
    };

 
export default sortData