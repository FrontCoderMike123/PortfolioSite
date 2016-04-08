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

<section class="containers" id="contactCon">
	<form id="form" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
		<h3>Contact Me</h3>
		<fieldset>
			<label>Full Name</label>
            <input type='text' name='name' placeholder='Enter name please' required />
		</fieldset>

		<fieldset>
			<label>Telephone</label>
            <input type='tel' name='tel' placeholder='(123)-456-7890' required />
		</fieldset>

		<fieldset>
			<label>City</label>
            <input type='text' name='city' placeholder='City' required />
		</fieldset>

		<fieldset>
			<label>Email</label>
            <input type='email' name='email' placeholder='you@yourdomain' required />
		</fieldset>

		<fieldset>
			<label for="free">Free Quote</label>
			<input type="radio" name="job" value="Free Quote" id="free" checked/>
			<label for="website">Website Developer</label>
			<input type="radio" name="job" value="Website Developer" id="website"/>
			<label for="design">Website Designer</label>
			<input type="radio" name="job" value="Website Designer" id="design"/>
		</fieldset>

		<fieldset>
			<label>Message <span class="required">*</span></label>
            <textarea type='message' name='message' onkeyup="adjust_textarea(this)" placeholder='Job Information' required>
            </textarea>
		</fieldset>

		<input type="submit" name="submit" value="Submit" title="Submit"/>
	</form>

	<div id="contactInfo">
		<h3>Contact Information</h3>
		<ul>
			<li>facebook</li>
			<li>LinkedIn</li>
			<li>Skype</li>
		</ul>				
	</div>

	<div id="resumeHolder">
	<a class="resumeLink" href="images/resumes/MichelBeaubien_Resume.pdf" target="onblank"
	type="application/octet-stream" download="MichelBeaubien_Resume.pdf">
		Download Resume
	</a>
	<a class="resumeLink" href="images/resumes/MichelBeaubien_BusinessCard.pdf" target="onblank"
	type="application/octet-stream" download="MichelBeaubien_BusinessCard.pdf">
		<div>
			<object data="images/resumes/busCard.svg">
				<img src="images/resumes/busCard.jpg" alt="Michel Beaubien Business Card"/>
			</object>
		</div>
	</a>
	</div>

</section>

<script type="text/javascript">
function adjust_textarea(h) {
    h.style.height = "20px";
    h.style.height = (h.scrollHeight)+"px";
}
</script>