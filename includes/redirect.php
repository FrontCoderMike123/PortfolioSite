<?php

	function redirect_to($location) {
		
		if($location != NULL) {
			header("Location: {$location}");
			exit;
		}
	}

	ini_set("SMTP","64.15.150.90");
	ini_set("smtp_port","25");
	ini_set("sendmail_from","webmaster@michel-beaubien.com");
	
	function submitMessage($direct,$name,$city,$tel,$email,$radio,$message) {

		$contacts = array(
			"hypnoclown69@hotmail.com",
			"michelBeaubien@hotmail.com"
			);
		
		foreach($contacts as $contact) {
		$to = $contact;
		$subj = "Message from michel-beaubien.com";
		$extra = "Reply to: {$email}";
		$msg = "Full Name: {$name}\r\n
		City: {$city}\r\n
		Tel: {$tel}\r\n
		Email: {$email}\r\n
		Job Required: {$radio}\r\n
		Message: {$message}";
		
		mail($to, $subj, $msg, $extra);
	}
		$direct = $direct."?name={$name}";
		redirect_to($direct);
	}
?>