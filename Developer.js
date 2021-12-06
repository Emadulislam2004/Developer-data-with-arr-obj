// function
// constructor function
let Developer = function() {




    // function to exicute data
    this.devData = function() {
        // to count salary
        let total = 0;

        // map loop
        developerData.map( (data,index) =>{
        
            console.log(`
        
            ID          : ${data.ID}
            Name        : ${data.Name}
            Age         : ${data.Age}
            Skill       : ${data.Skill}
            Location    : ${data.Location}
            Salary      : ${data.Salary}    
            
            
            
            

            showing ${ index + 1 } out of ${developerData.length} 
            
            
            
            `)
            total = total + data.Salary
        
            
        })
        console.log(`total cost ${total}$`)

    }

   

}