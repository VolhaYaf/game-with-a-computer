const input = document.querySelector('#guess');
const button = document.querySelector('#btn');
const answer = Math.floor(Math.random()* 100)+1;

button.addEventListener('click', play);

input.addEventListener('keypress', function(e){
    if (e.key === 'Enter') {
        play();
    }
})

function play(){
    const userNumber = document.querySelector('#guess').value;
    if (userNumber < 1 || userNumber > 100){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            text: 'Enter a number from 1 to 100!'
          })
    }

    else if (isNaN(userNumber)){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            text: 'Enter a number!'
          })
    }

    else {
        if (userNumber < answer || userNumber > answer){
            Swal.fire('Try again!');
        }
        
        else {
            Swal.fire({
                title: 'You win!!!',
                imageUrl: 'pic two.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
        }
    }
}


console.log(answer);
