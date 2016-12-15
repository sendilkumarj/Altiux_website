<?php
$var_name = $_POST['career_name'];
$var_email = $_POST['career_email'];
$var_post = $_POST['career_post'];


if ($_FILES["career_file"]["error"] > 0)
  {
  echo "Error: " . $_FILES["career_file"]["error"] . "<br>";
  }
else
  {
  //echo "Upload: " . $_FILES["career_file"]["name"] . "<br>";
  //echo "Type: " . $_FILES["career_file"]["type"] . "<br>";
  //echo "Size: " . ($_FILES["career_file"]["size"] / 1024) . " kB<br>";
  //echo "Stored in: " . $_FILES["career_file"]["tmp_name"];


  $allowedExts = array("gif", "jpeg", "jpg", "png", "pdf", "doc", "docx");
$temp = end(explode(".", $_FILES["career_file"]["name"]));
$extension = $temp;
if ((($_FILES["career_file"]["type"] == "image/gif")
|| ($_FILES["career_file"]["type"] == "image/jpeg")
|| ($_FILES["career_file"]["type"] == "image/jpg")
|| ($_FILES["career_file"]["type"] == "image/pjpeg")
|| ($_FILES["career_file"]["type"] == "image/x-png")
|| ($_FILES["career_file"]["type"] == "image/png")
|| ($_FILES["career_file"]["type"] == "application/msword")
|| ($_FILES["career_file"]["type"] == "application/doc")
|| ($_FILES["career_file"]["type"] == "application/docx")

|| ($_FILES["career_file"]["type"] == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") //.xlsx
|| ($_FILES["career_file"]["type"] == "application/vnd.openxmlformats-officedocument.spreadsheetml.template") //.xltx
|| ($_FILES["career_file"]["type"] == "application/vnd.openxmlformats-officedocument.presentationml.template") //.potx
|| ($_FILES["career_file"]["type"] == "application/vnd.openxmlformats-officedocument.presentationml.slideshow") //.ppsx
|| ($_FILES["career_file"]["type"] == "application/vnd.openxmlformats-officedocument.presentationml.presentation") //.pptx
|| ($_FILES["career_file"]["type"] == "application/vnd.openxmlformats-officedocument.presentationml.slide") //.sldx
|| ($_FILES["career_file"]["type"] == "application/vnd.openxmlformats-officedocument.wordprocessingml.document") //.docx
|| ($_FILES["career_file"]["type"] == "application/vnd.openxmlformats-officedocument.wordprocessingml.template") //.dotx
|| ($_FILES["career_file"]["type"] == "application/vnd.ms-excel.addin.macroEnabled.12") //.xlam
|| ($_FILES["career_file"]["type"] == "application/vnd.ms-excel.sheet.binary.macroEnabled.12") //.xlsb

|| ($_FILES["career_file"]["type"] == "application/pdf")
|| ($_FILES["file"]["type"] == "application/acrobat")
|| ($_FILES["file"]["type"] == "applications/vnd.pdf")
|| ($_FILES["file"]["type"] == "text/pdf")
|| ($_FILES["file"]["type"] == "text/x-pdf")


)

&& ($_FILES["career_file"]["size"] < 1000000)
&& in_array($extension, $allowedExts))
  {
  if ($_FILES["career_file"]["error"] > 0)
    {
    echo "Return Code: " . $_FILES["career_file"]["error"] . "<br>";
    }
  else
    {
   // echo "Upload: " . $_FILES["career_file"]["name"] . "<br>";
    //echo "Type: " . $_FILES["career_file"]["type"] . "<br>";
    //echo "Size: " . ($_FILES["career_file"]["size"] / 1024) . " kB<br>";
    //echo "Temp file: " . $_FILES["career_file"]["tmp_name"] . "<br>";

    if (file_exists("upload/" . $_FILES["career_file"]["name"]))
      {
      echo $_FILES["career_file"]["name"] . " already exists. ";
      }
    else
      {
      move_uploaded_file($_FILES["career_file"]["tmp_name"],
      "upload/" . $_FILES["career_file"]["name"]);
      //echo "Stored in: " . "upload/" . $_FILES["career_file"]["name"];
      }


	//$sendto   = "ayush@whiteorangeworks.com";
	//$sendto   = "info@altiux.com";
	$sendto   = "hr@altiux.com";
	//$var_msg = $_POST['contact_msg'];
	$var_file_path = "http://www.altiux.com/upload/" . $_FILES["career_file"]["name"];

	$subject  = "Career Form Details detail";
	//$headers  = "From: " . $var_name . "\r\n";
	$headers  = "From:hr@altiux.com " . "\r\n";
	$headers .= "Reply-To: ". $var_name . "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html;charset=utf-8 \r\n";

	$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
	$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>".$var_name." has filled career form from website.</h2>\r\n";
	$msg .= "<p><strong>Name:</strong> ".$var_name."</p>\r\n";
	$msg .= "<p><strong>Email:</strong> ".$var_email."</p>\r\n";
	$msg .= "<p><strong>Position:</strong> ".$var_post."</p>\r\n";
	$msg .= "<p><strong>Uploaded File:</strong> ".$var_file_path."</p>\r\n";
	$msg .= "</body></html>";


	if(@mail($sendto, $subject, $msg, $headers)) {
	//print "<h3 style='color:#090;'>message sent successfully</h3>";
	} else {
		echo "<h3 style='color:#F00;'>message not sent</h3>";
	}

   }
  }
else
  {
  echo "Invalid file";
  }


  }


header('Location: http://www.altiux.com/index.html');


?>




<script type="text/javascript">
//window.parent.location.reload(true);
//top.location="pdf/elexia.pdf";
//window.parent.document.getElementById('sbox-window').close();

</script>