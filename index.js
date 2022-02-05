const friendName = ['maruf','hasan','niloy','bellah','salman'];

function oddFriend(friend){
     if(friend < 0 ){
          return 'plese try again';
     }
     let largest = friend[0];
     for (let i = 0; i < friend.length; i++){
          let  element = friend[i];
          if(friend[i].length > element.length){
               largest = friend;
          }
     }
     return largest;
  }
  console.log(oddFriend(friendName));