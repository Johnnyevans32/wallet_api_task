<?php
  
  $bvn = $_POST['bvn'];
  $sec_key = $_POST['sec_key'];

  require_once 'HTTP/Request2.php';
  $request = new HTTP_Request2();
  $request->setUrl('https://api.wallets.africa/account/resolvebvn/details');
  $request->setMethod(HTTP_Request2::METHOD_POST);
  $request->setConfig(array(
    'follow_redirects' => TRUE
  ));
  $request->setBody('{
  \n  "bvn": "22231485915",
  \n  "secretKey": "$ir6r2cblaj0i"
  \n}');
  try {
    $response = $request->send();
    if ($response->getStatus() == 200) {
      echo $response->getBody();
    }
    else {
      echo 'Unexpected HTTP status: ' . $response->getStatus() . ' ' .
      $response->getReasonPhrase();
    }
  }
  catch(HTTP_Request2_Exception $e) {
    echo 'Error: ' . $e->getMessage();
  }

?>