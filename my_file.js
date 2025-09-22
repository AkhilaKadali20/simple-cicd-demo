<script>
  const currentHour = new Date().getHours();
  let greetingMessage;

  if (currentHour < 12) {
    greetingMessage = "Good morning!";
  } else if (currentHour < 18) {
    greetingMessage = "Good afternoon!";
  } else {
    greetingMessage = "Good evening!";
  }

  document.getElementById("greeting").textContent = greetingMessage;
</script>