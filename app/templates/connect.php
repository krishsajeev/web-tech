<?php
	$firstName = $_POST['firstName'];
	$lastName = $_POST['lastName'];
    $rollNo = $_POST['rollNo'];
	$gender = $_POST['gender'];
    $year = $_POST['year'];
	$email = $_POST['email'];
	$number = $_POST['number'];
    $sportName = $_POST['sportName'];

	// Database connection
	$conn = new mysqli('localhost','root','','web');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ".$conn->connect_error);
	} 
    else {
		$stmt = $conn->prepare("insert into registration(firstName, lastName, rollNo, year, gender, email, number, sportName) values(?, ?, ?, ?, ?, ?, ?, ?)");
		$stmt->bind_param("ssssssis", $firstName, $lastName, $rollNo, $year, $gender, $email, $number, $sportName);
		$execval = $stmt->execute();
		echo $execval;
		echo " Registration successfully...";
		$stmt->close();
		$conn->close();
	}
?>