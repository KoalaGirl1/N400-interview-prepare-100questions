<?php
    $fno = isset($_GET['fnp']) ? $_GET['fno'] : 1;
    $lno = isset($_GET['lno']) ? $_GET['lno'] : 100;
    $randomNumberInRange = rand($fno, $lno); // Generates a random integer between 1 and 100 (inclusive)
    echo $randomNumberInRange-1;
    ?>