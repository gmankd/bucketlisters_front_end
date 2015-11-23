







  // // Register and Login/Logout Click Handlers

    // REGISTER
      $('#register').on('submit', function(e) {
        var credentials = wrap('credentials', form2object(this));
        /*SOME API*/.register(credentials, function(err, data){
          handleError(err, data);
          $('#register_form').hide();
          $('#login_form').css('margin', '0px auto');
          $('#spacer').addClass('col-xs-3');
          e.preventDefault();
        });
      });

    // LOGIN
      $('#login').on('submit', function(e) {
        var credentials = wrap('credentials', form2object(this));
        /*SOME API*/.login(credentials, function(err, data){
          handleError(err,data);
          token = data.user.token;
          user_id = data.user.id;
          console.log(data);
          $('.modal-dialog').hide();
          $('#spacer').removeClass('col-xs-3');
          $('#logout').show();
          $("#profile_buttons_display").show();
        });
        e.preventDefault();

      });

    // LOGOUT
      $('#logout').on('click', function(e) {
        /*SOME API*/.logout(user_id, token, function(err, data){
          handleError(err,data);
          console.log("logged out");
          e.preventDefault();
          $('#logout').hide();
          $("#profile_buttons_display").hide();
          $('.modal-dialog').show();
          $('#register_form').show();
          $('#profile_buttons').hide();
          $('#profile').hide();
        });
      });


//////////////////////Other buttons

 $('#some_task').on("click", function(){});
$('#some_task').on("click", function(){});
$('#some_task').on("click", function(){});
$('#some_task').on("click", function(){});
