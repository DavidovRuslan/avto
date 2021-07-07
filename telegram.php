<?php

$name = $_POST['name'];
$phone = $_POST['tel'];
$token = "1292500601:AAFlchQipTo41-EzvO3hxRkUUCNu2W9MW2M";
$chat_id = "-1001319170563";
$arr = array(
  'Имя: ' => $name,
  'Телефон: ' => $phone,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thankyou.html');
} else {
  echo "Error";
}
?>