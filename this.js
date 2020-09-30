var kim = {
    name : 'kim',
    first:10,
    second:20,
    sum:function(){
            return this.first+this.second;
    }
    //메소드가 자신이 속해있는 객체를 가르키는 키워드 : this 
}

// console.log("kim.sum(kim.first, kim.second)" , kim.sum(kim.first, kim.second));
console.log("kim.sum(kim.first, kim.second)" , kim.sum());
