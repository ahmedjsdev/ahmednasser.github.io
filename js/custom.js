const config = {
    apiKey: "AIzaSyCVDWpxQyvCZ6DPv7HmyxQy2gpUaYUX1rU",
    authDomain: "sparky-chat.firebaseapp.com",
    databaseURL: "https://sparky-chat.firebaseio.com",
    projectId: "sparky-chat",
    storageBucket: "sparky-chat.appspot.com",
    messagingSenderId: "513400931552"
};
firebase.initializeApp(config);
const database = firebase.database();
// function writeUserName(userId, name, email) {
//     firebase.database().set('users/' + userId).set({
//         username: name,
//         email: email
//     });
// }
$(document).ready(function () {
    $('#admin_msg').on('keypress', function (e) {
        if (e.keyCode === 13) {
            database.ref('messages/').push({
                message: $(this).val(),
                role: 'User'
            });
            $(this).val("");
            $('.messages-holder').stop().animate({
                scrollTop: $('.messages-holder')[0].scrollHeight
            }, 800);
        }
    })
});

//
// users.on('value', function(snapshot) {
//     const items = snapshot.val();
//     $.each(items, function (i, item) {
//         console.log(item);
//         $('#admin_area').append(`
//
//         `)
//     })
// });


// const users = firebase.database().ref('users/');
const messages = firebase.database().ref('messages/');

// users.on('child_added', function (data) {
//     console.log(data.val());
//     const x = data.val().message;
//     $('.messages-holder').append(`
//          <div class="user_msg">
//                 <div class="media">
//                     <div class="media-left media-middle">
//                         <a href="#">
//                             <img class="media-object width50"
//                                  src="https://cdn0.iconfinder.com/data/icons/iconshock_guys/512/andrew.png" alt="...">
//                         </a>
//                     </div>
//                     <div class="media-body">
//                         <h4 class="media-heading">Ahmed Nasser</h4>
//                         <p>${x}</p>
//                     </div>
//                 </div>
//             </div>
//     `);
//     $('.messages-holder').stop().animate({
//         scrollTop: $('.messages-holder')[0].scrollHeight
//     }, 800);

// });

// messages.on('child_added', function(snapshot) {
//     const items = snapshot.val().message;
//     // console.log(items);
//     // $.each(items, (item) => {
//     //     console.log(items[item].message);
//         $('.messages-holder').append(`
//         <div class="clearfix">
//                 <div class="user_msg pull-right">
//                     <div class="media">
//                         <div class="media-left media-middle">
//                             <a href="#">
//                                 <img class="media-object width50"
//                                      src="images/Sparky-face-mobile.png" alt="...">
//                             </a>
//                         </div>
//                         <div class="media-body">
//                             <h4 class="media-heading">Sparky Smart</h4>
//                             <p>${items}</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//     `);
//     $('.messages-holder').stop().animate({
//         scrollTop: $('.messages-holder')[0].scrollHeight
//     }, 800);

//     // })

// });

messages.on('child_added', function (data) {
    console.log(data.val());
    const x = data.val().message;
    if(data.val().role == 'User') {
        $('.messages-holder').append(`
         <div class="user_msg">
                <div class="media">
                    <div class="media-left media-middle">
                        <a href="#">
                            <img class="media-object width50"
                                 src="https://cdn0.iconfinder.com/data/icons/iconshock_guys/512/andrew.png" alt="...">
                        </a>
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading">Ahmed Nasser</h4>
                        <p>${x}</p>
                    </div>
                </div>
            </div>
    `);
} else {
    $('.messages-holder').append(`
        <div class="clearfix">
                <div class="user_msg pull-right">
                    <div class="media">
                        <div class="media-left media-middle">
                            <a href="#">
                                <img class="media-object width50"
                                     src="images/Sparky-face-mobile.png" alt="...">
                            </a>
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading">Sparky Smart</h4>
                            <p>${x}</p>
                        </div>
                    </div>
                </div>
            </div>
    `);

    }
    $('.messages-holder').stop().animate({
        scrollTop: $('.messages-holder')[0].scrollHeight
    }, 800);
});







