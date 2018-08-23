function formValidation() {
	var uname = document.registration.username;
	var passid = document.registration.passid;
	var cpassid = document.registration.cpassid;
	var uadd = document.registration.address;
	var umobno = document.registration.contact;
	var uemail = document.registration.email;
	if (allLetter(uname)) {
		if (passid_validation(passid, 8, 20)) {
			if (cpassid_validation(cpassid, document.registration.passid)) {
				if (ValidateEmail(uemail)) {
					if (allnumeric(umobno, 10)) {
						if (alphanumeric(uadd)) {
						}
					}
				}
			}
		}
	}
	return false;
}

function allLetter(uname) {
	var letters = /^[A-Za-z]+$/;
	var uname_len = uname.value.length;
	if (uname.value.match(letters)) {
		return true;
	} else if (uname_len == 0) {
		alert('Username cannot be empty');
		uname.focus();
		return false;
	} else {
		alert('Username must have alphabet characters only');
		uname.focus();
		return false;
	}
}
function passid_validation(passid /* ,mx, my */) {
	/* var passid_len = passid.value.length; */
	var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
	if (passid.value.match(passw)) {
		return true;
	} else if (passid.value.length == 0) {
		alert('Passowrd cannot be empty');
	}
	/*
	 * else if (passid_len == 0 || passid_len >= my || passid_len < mx) {
	 * alert("Password should not be empty / length be between " + mx + " to " +
	 * my); passid.focus(); return false;}
	 */
	else {
		alert('Password must contain atleast one numeric digit,one uppercase,one special character & one lower case');
		passid.focus();
		return false
	}
}
function cpassid_validation(cpassid, passid_l) {
	if (cpassid.value.length == 0) {
		alert('Password cannot be empty');
		cpassid.focus();
	} else if (cpassid != passid_l) {
		alert("Passwords do not match");
		cpassid.focus();
		return false;
	}
	return true;
}

function ValidateEmail(uemail) {
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (uemail.value.match(mailformat)) {
		return true;
	} else {
		alert("You have entered an invalid email address!");
		uemail.focus();
		return false;
	}
}

function allnumeric(umobno, mx) {
	var umobno_len = umobno.value.length;
	var numbers = /^[0-9]+$/;
	/*
	 * if (umobno.value.match(numbers)) { return true; }
	 */
	if ((umobno_len == 0 || umobno_len < mx) && (umobno.value.match(numbers))) {
		alert("Mobile no should not be empty / length should be " + mx);
		umobno.focus();
		return false;
	} else {
		alert('Please enter a valid Mobile number');
		umobno.focus();
		return false;
	}
}
function alphanumeric(uadd) {
	var letters = /^[0-9a-zA-Z]+$/;
	if (uadd.value.match(letters)) {
		return true;
	} else {
		alert('User address must have alphanumeric characters only');
		uadd.focus();
		return false;
	}
}

/*
 * function check_pass() { if (document.getElementById('passid').value ==
 * document.getElementById('cpassid').value) {
 * document.getElementById('submit').disabled = false; } else {
 * document.getElementById('submit').disabled = true; } }
 */
