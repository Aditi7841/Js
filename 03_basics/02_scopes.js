//*************Scope******************//

var a = 400; //...............global scope
let b = 300;
if(true)
{
    var a = 30; 
    let b = 20; //.................block scope
    const c = 40;
    //console.log('Block scope', b);

}
    // console.log(a);
    // console.log(b);
    //console.log(c);

     function one()
     {
        const username = 'Ayushi'

        function two()
        {
            const website = 'youtube'
            console.log(username);
        }
        //console.log(website);
        //two()

     }
     //console.log(username);
     one();

     if(true)
     {
        const website = 'google'
        if(true)
        {
            const userName = 'harry'
            console.log(userName);
        }
        //console.log(userName);
        console.log(website);
     }
     //console.log(website);

//+++++++++++++++++++++++++ Intersting topic based on function declaration +++++++++++++++++++++++++
     console.log(addOne(4));// this will work
    function addOne(num)
     {
        return num + 1;
     }

     //console.log(addTwo(4)); ------> This line throw an error like cannot access before initialization
     const addTwo = function(num)
     {
        return num + 2
     }