<?php
if (isset($_REQUEST['from'])) {

  $email_to = "webform@kjd.me";
  $email_subject = "Website Contact Form";
//     $email_message = "simple test";
//     $name = "simple from";

  $name = $_POST['name'];
  $from = $_POST['from'];
  $www = $_POST['www'];
  $msg = $_POST['msg'];
   
//   $email_message = "Form details below.\n\n";
   
  function clean_string($string) {
    $bad = array("content-type","bcc:","to:","cc:","href");
    return str_replace($bad,"",$string);
  }
     
  $email_message .= "".clean_string($msg)."\n\n--\n\n";

  $email_message .= "".clean_string($name)."\n";
  $email_message .= "".clean_string($from)."\n";
  $email_message .= "".clean_string($www)."\n\n";

   
   
  $headers   = array();
  $headers[] = "MIME-Version: 1.0";
  $headers[] = "Content-type: text/plain; charset=iso-8859-1";
//   $headers[] = "From: ".$name." <".$input['from'].">";
  $headers[] = "From: ".$name." <".$from.">";
  $headers[] = "Reply-To: ".$name." <".$from.">";
  $headers[] = "Subject: Website Contact Form";
  $headers[] = "X-Mailer: PHP/".phpversion();


  mail($email_to, $email_subject, $email_message, implode("\r\n", $headers));  

}

?>