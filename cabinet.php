<?php
    //var_dump($_COOKIE);
    if ( !isset($_COOKIE['email']) OR trim($_COOKIE['email']) ==''){
        header("Location: index.html");
        exit; 
    }
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>User Cabinet</title>
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/modal.css">
</head>

<body>
    <nav>
        <div>
            <a href="/"><img class="logo" src="img/logo.png" alt="logo"></a>
        </div>
        <div class="cabinet-header">
            Personal user cabinet
        </div>
        <div>            
            <button class="sign-out">Sign Out</button>
        </div>
    </nav>
    <section class="user-cabinet">
        <h4>You can change your personal information here</h4>
        <form>
            <div  class="modal-form-items">

                <div class="modal-form-items-inputs">
                    <p>Name</p>
                    <input type="text" name="name">                    
                    <p>Password</p>
                    <input type="text" name="pass">
                    <p>Birthday</p>
                    <input type="date" name="birthday">
                </div>

                <div class="modal-form-items-radios">
                    <div>
                        <input id="male" type="radio" name="sex" value="male" checked>
                        <label for="male">Male</label>
                    </div>
                    <div>
                        <input id="female" type="radio" name="sex" value="female">
                        <label for="female">Female</label>
                    </div>
                    <div>
                        <input id="other" type="radio" name="sex" value="other">
                        <label for="other">Other</label>
                    </div>
                </div>
            </div>
            <input type="submit" value="Update">
        </form>
    </section>
    <script src="js/ajax.js"></script>
    <script src="js/get_user_data.js"></script>    
    <script src="js/logout.js"></script>
</body>

</html>