<?php
	require_once('../includes/redirect.php');

	if(isset($_POST['submit'])) {
        $direct = "../views/thankyou.html";
        $name = $_POST['name'];
        $tel = trim($_POST['tel']);
        $city = $_POST['city'];
        $email = trim($_POST['email']);
        $radio = $_POST['job'];
        $message = $_POST['message'];
        
        submitMessage($direct,$name,$city,$tel,$email,$radio,$message);
    }
?>

<section class="containers" id="contact">
	<form id="form" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
		<h3>Contact Me</h3>
		<fieldset>
            <input type='text' name='name' placeholder='Enter name please' required />
            <label>Full Name</label>
		</fieldset>

		<fieldset>
            <input type='tel' name='tel' placeholder='(123)-456-7890' required />
            <label>Telephone</label>
		</fieldset>

		<fieldset>
            <input type='text' name='city' placeholder='City' required />
            <label>City</label>
		</fieldset>

		<fieldset>
            <input type='email' name='email' placeholder='you@yourdomain' required />
            <label>Email</label>
		</fieldset>

		<div id="jobsHolder">
			<h3>Free Quote</h3>
			<h3>Website Developer</h3>
			<h3>Website Designer</h3>
		<div class="jobs">
            <input type="radio" id="free" name="job" value="Free Quote" checked/>
            <label for="free"></label>
        </div>

        <div class="jobs">
        	<input type="radio" id="dev" name="job" value="Website Developer"/>
            <label for="dev"></label>
        </div>

        <div class="jobs">
        	<input type="radio" id="des" name="job" value="Website Designer"/>
            <label for="des"></label>
        </div>
		</div>

		<textarea type="message" onkeyup="adjust_textarea(this)" placeholder="Message Me"></textarea>

		<input id="formSubmit" type="submit" name="submit" value="Submit" title="Submit"/>
	</form>

	<div id="resumeHolder">
	<a class="resumeLink" href="images/resumes/MichelBeaubien_Resume.pdf" target="onblank"
	type="application/octet-stream" download="MichelBeaubien_Resume.pdf">
		Download Resume
	</a>
	</div>

</section>

<script type="text/javascript">
function adjust_textarea(h) {
    h.style.height = "20px";
    h.style.height = (h.scrollHeight)+"px";
}
</script>