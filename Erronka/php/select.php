<html>
<body>
<?php
include ('conn.php');


$sql = "SELECT Date FROM `menu_item` WHERE DATE(Date) = CURDATE();";



$payment = $conn->prepare($sql);
$payment->execute();
$payment->setFetchMode(PDO::FETCH_ASSOC);

$sql2 = "SELECT Name FROM dish WHERE type= 'breakfast' AND type= 'lunch' AND type= 'dinner'";

$payment2 = $conn->prepare($sql2);
$payment2->execute();
$payment2->setFetchMode(PDO::FETCH_ASSOC);

?>

<h1>Hola</h1>
<table>
    <thead>
        <tr>
            <th>Breakfast</th>
            <th>Lunch</th>
            <th>Dinner</th>
            <th>DATE</th>
        </tr>
    </thead>
    <tbody>
    <?php
    $result = array_merge($payment->fetchAll(), $payment2->fetchAll());
    foreach($result as $row){

        echo "<tr><td>" . $row['Name'] . "</td><td>" . $row['Name'] . "</td><td>" .$row['Name'] . "</td><td>" . $row['Date'] . "</td></tr>";
    }

    ?>
    </tbody>
</table>
</body>
</html>