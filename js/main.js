
$(document).ready(function () {
    "use strict";


    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit', function () {
        var check = true;

        for (var i = 0; i < input.length; i++) {
            if (validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });

    function validate(input) {
        if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if ($(input).val().trim() == '') {
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }


    var Page = {
        Public: () => {
            let button = "<button class='login100-form-btn' id='logIn'>Login</button>";
            let username = "<input class='input100' type='text' name='username' placeholder='Username' id='username'>";
            let pass = "<input class='input100' type='password' id='pass' name='pass' placeholder='Password'>";
            let spanInput = "<span class='focus-input100'></span>";
            let headText = "<span class='login100-form-title p-b-51'>ADMIN</span>";
            let Form = {
                Public: () => {
                    let formBtn = "<div class='container-login100-form-btn m-t-17'>" + button + "</div>";
                    let formUsername = "<div class='wrap-input100 validate-input m-b-16' data-validate='Username is required'>" + username + spanInput + "</div>";
                    let formPass = "<div class='wrap-input100 validate-input m-b-16' data-validate='Password is required'>" + pass + spanInput + "</div>";
                    let F_F = {
                        Public: () => {
                            let form1 = "<div class='login100-form validate-form flex-sb flex-w'>" + headText + formUsername + formPass + formBtn + "</div>";
                            let F_F_F = {
                                Public: () => {
                                    let form2 = "<div class='wrap-login100 p-t-50 p-b-90'>" + form1 + "</div>";
                                    let F_F_F_F = {
                                        Public: () => {
                                            let form3 = "<div class='container-login100'>" + form2 + "</div>";
                                            let F_F_F_F_F = {
                                                Public: () => {
                                                    let form4 = "<div class='limiter'>" + form3 + "</div>";
                                                    let F_F_F_F_F_F = {
                                                        Public: () => {
                                                            return "<div id='public'>" + form4 + "</div>";
                                                        }

                                                    }
                                                    return F_F_F_F_F_F.Public();
                                                }
                                            }
                                            return F_F_F_F_F.Public();
                                        }
                                    }
                                    return F_F_F_F.Public();
                                }
                            }
                            return F_F_F.Public();
                        }
                    }
                    return F_F.Public();
                },
            }
            return Form.Public();
        },

        Private: () => {
            let loading = "<center ><p id='loading' style='position: relative; display: none;'>Loading...</p></center>";
            let headText = "<span class='login100-form-title p-b-51'>BACKGROUND SYSTEM</span>";
            let morning = "<option value='morning'>Morning</option>";
            let afternoon = "<option value='afternoon'>Afternoon</option>";
            let evening = "<option value='evening'>Evening</option>";
            let fileUp = "<input class='preview input100' type='file' id='fileButton' name='file' multiple>";
            let buttonUp = "<button class='upload100-form-btn-l' id='btnUp'>Upload</button>";
            let selectedUpload = "<progress value='0' max='100' id='uploader'>0%</progress>";
            let formSelectedUpload = {
                Form: () => {
                    return "<div class='preview input100'>" + selectedUpload + loading + "</div>";
                }
            }
            let dropDown = {
                Form: () => {
                    return "<select class='dropdown100-form-btn-r'>" + morning + afternoon + evening + "</select>"
                }
            }
            let groupBtnUpAndDrop = {
                Form: () => {
                    return "<div class='preview input100' style='width: 100%;'>" + buttonUp + dropDown.Form() + "</div>"
                }
            }
            let F_F = {
                Form: () => {
                    let form1 = "<div class='login100-form validate-form flex-sb flex-w'>" + headText + fileUp + formSelectedUpload.Form() + groupBtnUpAndDrop.Form() + "</div>";
                    let F_F_F = {
                        Form: () => {
                            let form2 = "<div class='wrap-login100 p-t-50 p-b-90'>" + form1 + "</div>";
                            let F_F_F_F = {
                                Form: () => {
                                    let form3 = "<div class='container-login100'>" + form2 + "</div>";
                                    let F_F_F_F_F = {
                                        Form: () => {
                                            let form4 = "<div class='limiter'>" + form3 + "</div>";
                                            let F_F_F_F_F_F = {
                                                Form: () => {
                                                    return "<div id='private'>" + form4 + "</div>";
                                                }

                                            }
                                            return F_F_F_F_F_F.Form();
                                        }
                                    }
                                    return F_F_F_F_F.Form();
                                }
                            }
                            return F_F_F_F.Form();
                        }
                    }
                    return F_F_F.Form();
                }
            }

            return F_F.Form();


        },

        Menu: () => {
            let logOut = "<a href='#' class='w3-bar-item w3-button w3-text-grey w3-hover-black' id='logOut'>LOG UOT</a>";
            let faRemove = "<i class='fa fa-remove'></i>";
            let btnFormRe = {
                Form: () => {
                    return "<a href='javascript:void(0)' id='closeNav' class='w3-button w3-black w3-xxxlarge w3-display-topright' style='padding:0 12px;'>" + faRemove + "</a>";
                }
            }
            let formNav = {
                Form: () => {
                    return "<div class='w3-bar-block w3-center'>" + logOut + "</div>"
                }
            }
            let Nav = {
                Form: () => {
                    return "<nav class='w3-sidebar w3-black w3-animate-right w3-xxlarge' style='display:none;padding-top:150px;right:0;z-index:2;' id='mySidebar'>" + btnFormRe.Form() + formNav.Form() + "</nav>";
                }
            }
            return Nav.Form();

        },

        openMenu: () => {
            let faBars = "<i class='fa fa-bars'></i>";
            let Open = {
                Form: () => {
                    return "<span class='w3-button w3-top w3-white w3-xxlarge w3-text-grey w3-hover-text-black' style='width:auto;right:0;' id='openNav'>" + faBars + "</span>";
                }
            }
            return Open.Form();
        },

        modalFinish: () => {
            let btnOK = "<center><button id='btnFinish'>Finish</button></center>";
            let headText = " <h1>Upload Finish</h1>";
            let finishForm = {
                Form: () => {
                    let formText = "<div class='formText'>" + headText + "</div>"
                    let formBtn = "<div class='container' style='background-color:#f1f1f1'>" + btnOK + "</div>";
                    let F_F = {
                        Form: () => {
                            let formAll = "<div class='modal-content animate'>" + formText + formBtn + "</div>";
                            let modalForm = {
                                Form: () => {
                                    return "<div id='modal' class='modal'>" + formAll + "</div>";
                                }
                            }
                            return modalForm.Form();
                        }
                    }
                    return F_F.Form();
                }
            }
            return finishForm.Form();

        },


    }


    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            $("div").remove("#public");
            $("body").append(Page.Private());
            $("body").append(Page.Menu());
            $("body").append(Page.openMenu());
            $('body').append(Page.modalFinish());

            $('#openNav').click(function () {
                document.getElementById("mySidebar").style.width = "100%";
                document.getElementById("mySidebar").style.display = "block";
                document.getElementById("private").style.display = "none";

            })

            $('#closeNav').click(function () {
                document.getElementById("mySidebar").style.display = "none";
                document.getElementById("private").style.display = "block";
            })

            // var input = document.querySelector('input');
            // var preview = document.querySelector('.preview');

            // input.style.opacity = 0;



            $('#logOut').click(function () {
                firebase.auth().signOut().then(function () {
                    // Sign-out successful.
                }).catch(function (error) {
                    // An error happened.
                });
            })

            // upload To Storage



            var uploader = document.getElementById('uploader');
            var fileButton = document.getElementById('fileButton');

            fileButton.addEventListener('change', function (e) {

                $('#btnUp').click(function () {
                    // อ้างถึง ค่าของ teg select ของ html เก็บไว้ในตัวแปร dropDownVal
                    var dropDownVal = $('select').val();

                    console.log(dropDownVal)

                    // เมื่อมีเหตุการบางอย่าง ให้ชี้ ไปที่ ตัวแปร file ตำแหน่่งอาเรย์ที่ 0 เก็บไว้ในตัวแปร file เป็น var
                    var file = e.target.files[0];


                    // อ้างถึงการเข้าถึงไปยังโฟล์เดอร์ ของ firebase storage
                    var storageRef = firebase.storage().ref(`background_system/${dropDownVal}/${file.name}`);
                    var uploadRef = firebase.database().ref(`background_system/upload/${dropDownVal}`);



                    var task = storageRef.put(file);
                    // return new Promise(function (resolve, reject) {
                        task.on('state_changed',
                            function progress(snapshot) {
                                var percentage = (snapshot.bytesTransferred /
                                    snapshot.totalBytes) * 100;
                                uploader.value = percentage; console.log(percentage);

                                if (percentage == 100) {
                                    let modal = document.getElementById('modal');
                                    let loading = document.getElementById('loading')
                                    loading.style.display = "none";
                                    modal.style.display = "block";
                                    $('#btnFinish').click(function () {
                                        let fileVal = document.getElementById('fileButton');
                                        fileVal.value = "";
                                        modal.style.display = "none";
                                        uploader.value = 0;
                                    })

                                }

                                if (percentage < 100) {
                                    let modal = document.getElementById('modal');
                                    let loading = document.getElementById('loading')
                                    modal.style.display = "none";
                                    loading.style.display = "block";
                                }


                            },
                            function erroe(err) { },
                            function () {
                                var metadata = task.snapshot.metadata;
                                var key = metadata.md5Hash.replace(/\//g, ': ');
                                var fileRecord = {
                                    downloadURL: task.snapshot.downloadURL,
                                    key: key,
                                    metadata: {
                                        fullPath: metadata.fullPath,
                                        md5Hash: metadata.md5Hash,
                                        name: metadata.name
                                    }
                                };
                                console.log('metadata',metadata)
                                uploadRef.child(key).set(fileRecord).then()
                            });
                    // })
                })






            })




        } else {
            $("div").remove("#private");
            $("nav").remove('#mySidebar');
            $("span").remove('#openNav');

            $("body").append(Page.Public());

            $('#logIn').click(function () {

                let email = $('#username').val();
                let pass = $('#pass').val();
                console.log(email)

                firebase.auth().signInWithEmailAndPassword(email, pass)
                    .catch(function (err) {
                        // Handle Errors here.
                        var errorCode = err.code;
                        var errorMessage = err.message;

                        if (errorCode == 'auth/wrong-password') {
                            alert('Wrong password.');
                        } else {
                            alert(errorMessage);
                        }
                        return;
                    });
            }
            )
        }


    }
    )


})

