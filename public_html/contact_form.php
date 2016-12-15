<?php
//$sendto   = "ayush@whiteorangeworks.com";
$sendto   = "info@altiux.com";
$var_name = $_POST['contact_name'];
$var_email = $_POST['contact_mail'];
$var_msg = $_POST['contact_msg'];

$subject  = "Visitor contact detail";
//$headers  = "From: " . strip_tags($var_name) . "\r\n";
$headers  = "From:info@altiux.com " . "\r\n";
$headers .= "Reply-To: ". strip_tags($var_name) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";

$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>".$var_name." wants to contact you.</h2>\r\n";
$msg .= "<p><strong>Name:</strong> ".$var_name."</p>\r\n";
$msg .= "<p><strong>Email:</strong> ".$var_email."</p>\r\n";
$msg .= "<p><strong>Message:</strong> ".$var_msg."</p>\r\n";
$msg .= "</body></html>";


$var_status = mail($sendto, $subject, $msg, $headers);
/* echo("<script>console.log('CONTACT_FORM STATUS: ".$var_status."');</script>"); */
header('Location: index.html');
/*if(@mail($sendto, $subject, $msg, $headers)) {
	print "<h3 style='color:#090;'>message sent successfully</h3>";
} else {
	echo "<h3 style='color:#F00;'>message not sent</h3>";
}*/
?>
<script type="text/javascript">
//window.parent.location.reload(true);
//top.location="pdf/elexia.pdf";
//window.parent.document.getElementById('sbox-window').close();

</script>